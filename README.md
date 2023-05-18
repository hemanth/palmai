# palmai
> An interface for interacting with Google's Generative Language API.

## Installation

To install PalmAI, run:

```bash
npm install palmai
```

## Usage

```js
const PalmAI = require('palmai');

const palm = new PalmAI(apiKey [, modelName]);

const info = await palm.getInfo();

const models = await palm.listModels();

const tokens = await palm.countMessageTokens('Hello World!');

const embedding = await palm.embedText('Hello World!');

const message = await palm.generateMessage('Hello World!', 0.5, 1);

const text = await palm.generateText('Hello World!', 0.5, 1);
```

## API

### `new PalmAI(apiKey[, modelName])`

Creates a new instance of the `PalmAI` class.

- `apiKey` - Your Google Cloud API key.
- `modelName` - The name of the model to use (default: `'chat-bison-001'`).

### `palm.getInfo([modelName])`

Gets information about the specified model.

- `modelName` - The name of the model to get information about (default: `'chat-bison-001'`).

### `palm.listModels()`

Lists all available models.

### `palm.countMessageTokens(prompt)`

Counts the number of tokens in the specified prompt.

- `prompt` - The prompt to count tokens in.

### `palm.embedText(text)`

Embeds the specified text.

- `text` - The text to embed.

### `palm.generateMessage(prompt[, temperature[, candidate_count[, top_p[, top_k]]]])`

Generates a message based on the specified prompt.

- `prompt` - The prompt to generate a message from.
- `temperature` - The temperature to use (default: `0.5`).
- `candidate_count` - The number of candidates to generate (default: `1`).
- `top_p` - The top-p value to use (default: `0.95`).
- `top_k` - The top-k value to use (default: `40`).

### `palm.generateText(prompt[, temperature[, candidateCount[, modelName]]]])`

Generates text based on the specified prompt.

- `prompt` - The prompt to generate text from.
- `temperature` - The temperature to use (default: `0`).
- `candidateCount` - The number of candidates to generate (default: `1`).
- `modelName` - The name of the model to use (default: `'chat-bison-001'`).```