import { ApiClient } from '../index.js';

const baseUrl = 'https://beravote.com/api/';
const apiKey = '';

const client = new ApiClient(baseUrl, apiKey);

async function runAll() {
  try {
    console.log('getChains:');
    console.log(await client.getChains());

    console.log('\ngetNetworks:');
    console.log(await client.getNetworks());

    console.log('\ngetPopularProposals:');
    console.log(await client.getPopularProposals());

    console.log('\ngetProposalsByCid:');
    console.log(await client.getProposalsByCid('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX'));

    console.log('\ngetProposalLists:');
    console.log(await client.getProposalLists('beravote', { page: 1, pageSize: 10 }));

    console.log('\ngetPendingProposals:');
    console.log(await client.getPendingProposals('beravote', { page: 1 }));

    console.log('\ngetActiveProposals:');
    console.log(await client.getActiveProposals('beravote'));

    console.log('\ngetClosedProposals:');
    console.log(await client.getClosedProposals('beravote'));

    console.log('\ngetProposalComments:');
    console.log(await client.getProposalComments('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', { page: 1 }));

    console.log('\ngetProposalVotes:');
    console.log(await client.getProposalVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', { page: 1 }));

    console.log('\ngetVotes:');
    console.log(await client.getVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994'));

    console.log('\ngetFilterVotes:');
    console.log(await client.getFilterVotes('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994'));

    console.log('\nfindProposalStats:');
    console.log(await client.findProposalStats('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994'));

    console.log('\ngetProposalVoterBalance:');
    console.log(await client.getProposalVoterBalance('Qma9JvYhfYNfkGpiztiRBsMUWFFUtyau9m6Hm5nVu6JNaX', 'berachain-mainnet', '0x18a428ce0c31584a21cf8cefdb8849d8013e1994'));

    console.log('\ngetSpaceStats:');
    console.log(await client.getSpaceStats('beravote'));

    console.log('\ngetJoinedSpaces:');
    console.log(await client.getJoinedSpaces('0x227d660c0dE72cd2480e0E831701C070e6741B3D'));

    console.log('\ngetOwnerSpaces:');
    console.log(await client.getOwnerSpaces('0x227d660c0dE72cd2480e0E831701C070e6741B3D'));

    console.log('\ngetSpaceMembers:');
    console.log(await client.getSpaceMembers('beravote'));

    console.log('\ngetSpaceDetails:');
    console.log(await client.getSpaceDetails('beravote'));

    console.log('\ngetNetworkSpaces:');
    console.log(await client.getNetworkSpaces('berachain-mainnet'));

    console.log('\ngetAllSpaces:');
    console.log(await client.getAllSpaces());

    console.log('\ngetAllSpacesWithoutFilter:');
    console.log(await client.getAllSpacesWithoutFilter());
  } catch (err) {
    console.error('Error during execution:', err);
  }
}

runAll();