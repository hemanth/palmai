class PalmAI {
    constructor(apiKey, modelName) {
      if (!apiKey) {
        throw new Error('API key is required');
      }
      this.apiKey = apiKey;
      this.modelName = modelName || 'chat-bison-001';
    }
  
    async call(method, url, body) {
      const headers = {
        'Content-Type': 'application/json',
      };
      const opts = {
        method,
        headers,
      }
      if(method === 'POST') {
        opts.body = JSON.stringify(body)
      }
      const response = await fetch(`${url}?key=${this.apiKey}`, opts);
      if (!response.ok) {
        const error = (await response.json()).error;
        throw new Error(error.message);
      }
      return await response.json();
    }
  
    async countMessageTokens(prompt, modelName) {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models/${modelName || this.modelName}:countMessageTokens`;
      const body = {
        "prompt": {"messages": [{"content":prompt}]}
      };
      return this.call('POST', url, body);
    }
  
    embedText(text) {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models/embedding-gecko-001:embedText`;
      const body = {
        'text': text
      };
      return this.call('POST', url, body);
    }
  
    generateMessage(prompt, temperature, candidate_count) {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage`;
      const body = {
        "prompt": {"messages": [{"content":prompt}]},
        candidate_count,
        temperature,
        top_p: 0.95,
        top_k: 40
      };
      return this.call('POST', url, body);
    }
  
    generateText(prompt, temperature=0, candidateCount=1) {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText`;
      const body = {
        "prompt": {"text": prompt},
        'temperature': temperature,
        'candidate_count': candidateCount
      };
      return this.call('POST', url, body);
    }
  
    getInfo(modelName) {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models/${modelName || this.modelName}`;
      return this.call('GET', url);
    }
  
    listModels() {
      const url = `https://generativelanguage.googleapis.com/v1beta2/models`;
      return this.call('GET', url);
    }
  }

  module.exports = PalmAI;