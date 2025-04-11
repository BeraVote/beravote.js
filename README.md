# 🔗 beravote.js

A lightweight and structured JavaScript/Node.js client for interacting with the [Beravote API](https://beravote.gitbook.io/beravote/api-reference/routes), making it easier to fetch proposals, supported chains, networks, comments, and more.

## Installation

```bash
npm install beravote.js
```

## Usage

[Get Api Key](https://beravote.gitbook.io/beravote/api-reference/api-keys)

Library support multiple endpoints: 

<table><thead><tr><th>Chain</th><th>Endpoint</th><th data-hidden></th></tr></thead><tbody><tr><td>Berachain Mainnet &#x26; Berachain bArtio B2</td><td>https://beravote.com/api/</td><td></td></tr><tr><td>Multiple EVM Chains</td><td>https://evm.dvote.ai/api/</td><td></td></tr><tr><td>Solana</td><td>https://sol.dvote.ai/api/</td><td></td></tr><tr><td>Bitcoin (BRC20, Ordinals, Runes)</td><td>https://btc.dvote.ai/api/</td><td></td></tr></tbody></table>

```js
import { ApiClient } from 'beravote.js';

const baseUrl = 'https://beravote.com/api/';
const apiKey = 'xxx';
const client = new ApiClient(baseUrl, apiKey);

async function run() {
  const allSpaces = await client.getAllSpacesWithoutFilter();
  console.log(allSpaces);
}

run();
```

---

## Available Methods

### Chains & Networks

#### `getChains()`
Fetches all supported chains.
```js
await client.getChains();
```

#### `getNetworks()`
Fetches all supported networks.
```js
await client.getNetworks();
```

### Popular Content

#### `getPopularProposals()`
Fetches the hottest proposals on the platform.
```js
await client.getPopularProposals();
```

### Proposals

#### `getProposalsByCid(proposalCid)`
Fetch a specific proposal by CID.
```js
await client.getProposalsByCid('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX');
```

#### `getProposalLists(spaceName, { page, pageSize })`
List proposals in a space.
```js
await client.getProposalLists('beravote', { page: 1, pageSize: 10 });
```

#### `getPendingProposals(spaceName, { page, pageSize })`
Fetch proposals pending execution.
```js
await client.getPendingProposals('beravote', { page: 1 });
```

#### `getActiveProposals(spaceName, { page, pageSize })`
List currently active proposals.
```js
await client.getActiveProposals('beravote');
```

#### `getClosedProposals(spaceName, { page, pageSize })`
List closed (finished) proposals.
```js
await client.getClosedProposals('beravote');
```

### Comments & Votes

#### `getProposalComments(proposalCid, { page, pageSize })`
Fetch comments for a proposal.
```js
await client.getProposalComments('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', { page: 1 });
```

#### `getProposalVotes(proposalCid, { page, pageSize })`
Fetch all votes on a proposal.
```js
await client.getProposalVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', { page: 1 });
```

#### `getVotes(proposalCid, address)`
Get vote by a specific address on a proposal.
```js
await client.getVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994');
```

#### `getFilterVotes(proposalCid, network, address)`
Get filtered vote details by network and address.
```js
await client.getFilterVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994');
```

### Stats & Balances

#### `findProposalStats(proposalCid, network, address)`
Get vote stats for a proposal by user and network.
```js
await client.findProposalStats('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994');
```

#### `getProposalVoterBalance(proposalCid, network, address)`
Get voter balance on a proposal.
```js
await client.getProposalVoterBalance('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994');
```

#### `getSpaceStats(spaceName)`
Stats for a given space.
```js
await client.getSpaceStats('beravote');
```

### Spaces

#### `getJoinedSpaces(address)`
Get spaces joined by a user.
```js
await client.getJoinedSpaces('0x227d660c0dE72cd2480e0E831701C070e6741B3D');
```

#### `getOwnerSpaces(address)`
Get spaces owned by an address.
```js
await client.getOwnerSpaces('0x227d660c0dE72cd2480e0E831701C070e6741B3D');
```

#### `getSpaceMembers(spaceName)`
List all members of a space.
```js
await client.getSpaceMembers('beravote');
```

#### `getSpaceDetails(spaceName)`
Fetch metadata and settings for a space.
```js
await client.getSpaceDetails('beravote');
```

#### `getNetworkSpaces(network)`
Get all spaces by network.
```js
await client.getNetworkSpaces('berachain-mainnet');
```

#### `getAllSpaces()`
Fetch all visible spaces.
```js
await client.getAllSpaces();
```

#### `getAllSpacesWithoutFilter()`
Fetch all raw spaces without filters.
```js
await client.getAllSpacesWithoutFilter();
```
