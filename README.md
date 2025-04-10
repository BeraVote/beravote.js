# 🔗 beravote-client.js

A lightweight and structured JavaScript/Node.js client for interacting with the [Beravote API](https://beravote.gitbook.io/beravote/api-reference/routes), making it easier to fetch proposals, supported chains, networks, comments, and more.

## 📦 Installation

```bash
npm install beravote-client.js
or
yarn add beravote-client.js


🚀 Quick Start

Here's a simple example of how to use beravote.js to fetch the list of supported chains:

import { SupportedChains } from 'beravote-client.js';

const baseUrl = 'https://beravote.com/api/';
const apiKey = 'your-api-key'; // Replace with your actual API key

const chains = new SupportedChains(baseUrl, apiKey);

async function run() {
  const chainList = await chains.getChains();
  console.log(chainList);
}

run();

