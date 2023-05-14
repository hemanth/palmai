import PalmAI  from './index.js';
import {describe,it} from 'node:test';
import {expect} from 'expect';
describe('PALMClient', () => {
    let client;
    
    // mock fetch without any dependencies
    global.fetch = () => Promise.resolve({
      ok: true,
      status:200,
      json: () => {
          return {status:200};
      },
     })
    
    client = new PalmAI('YOUR_API_KEY');
  
    it('should be able to call the API', async () => {
      const response = await client.call('GET', 'https://generativelanguage.googleapis.com/v1beta2/models');
      console.log({response})
      expect(response).toBeDefined();
      expect(response.status).toBe(200);
    });

    // TODO rest of the tests ;)
  });
  