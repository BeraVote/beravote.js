class ApiClient {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  getUrl() {
    return this.baseUrl;
  }

  getApiKey() {
    return this.apiKey;
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }
}

export class SupportedChains extends ApiClient {
  async getChains() {
    const url = `${this.getUrl()}chains/definition`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching chains: ${res.statusText}`);
    }

    return res.json();
  }
}

export class SupportedNetworks extends ApiClient {
  async getNetworks() {
    const url = `${this.getUrl()}networks`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching networks: ${res.statusText}`);
    }

    return res.json();
  }
}

export class PopularProposals extends ApiClient {
  async getPopularProposals() {
    const url = `${this.getUrl()}home/hottest`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalsByCid extends ApiClient {
  async getProposalsByCid(proposalCid) {
    const url = `${this.getUrl()}proposal/${proposalCid}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalComments extends ApiClient {
  async getProposalComments(proposalCid, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}proposal/${proposalCid}/comments?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalVotes extends ApiClient {
  async getProposalVotes(proposalCid, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}proposal/${proposalCid}/votes?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class SpaceVotes extends ApiClient {
  async getSpaceVotes(spaceName, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}space/${spaceName}/votes?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class SpaceStats extends ApiClient {
  async getSpaceStats(spaceName) {
    const url = `${this.getUrl()}space/${spaceName}/stats`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

// Need to be check
export class FindVote extends ApiClient {
  async getVotes(proposalCid, address) {
    const url = `${this.getUrl()}proposal/${proposalCid}/votes/${address}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}${res}`);
    }

    return res.json();
  }
}

export class FindVoteFilterByAddress extends ApiClient {
  async getFilterVotes(proposalCid, network, address) {
    const url = `${this.getUrl()}proposal/${proposalCid}/votes/network/${network}/address/${address}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalStats extends ApiClient {
  async findProposalStats(proposalCid, network, address) {
    const url = `${this.getUrl()}proposal/${proposalCid}/stats`;

    const res = await fetch(url, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({
        proposalCid: proposalCid,
        network,
        address,
      }),
    });

    if (!res.ok) {
      throw new Error(`Error fetching proposal stats: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalVoterBalance extends ApiClient {
  async getProposalVoterBalance(proposalCid, network, address) {
    const url = `${this.getUrl()}proposal/${proposalCid}/voterbalance/${network}/${address}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ProposalLists extends ApiClient {
  async getProposalLists(spaceName, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}${spaceName}/proposals?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class PendingProposals extends ApiClient {
  async getPendingProposals(spaceName, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}${spaceName}/proposals/pending?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ActiveProposals extends ApiClient {
  async getActiveProposals(spaceName, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}${spaceName}/proposals/active?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class ClosedProposals extends ApiClient {
  async getClosedProposals(spaceName, { page = 1, pageSize = 10 } = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const url = `${this.getUrl()}${spaceName}/proposals/closed?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class JoinedSpaces extends ApiClient {
  async getJoinedSpaces(address) {
    const url = `${this.getUrl()}account/${address}/spaces`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class SpaceMembers extends ApiClient {
  async getSpaceMembers(spaceName) {
    const url = `${this.getUrl()}account/spaces/${spaceName}/members`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class NetworkSpaces extends ApiClient {
  async getNetworkSpaces(network) {
    const url = `${this.getUrl()}spaces-by-network/${network}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class AllSpaces extends ApiClient {
  async getAllSpaces() {
    const url = `${this.getUrl()}spaces`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class AllSpacesWithoutFilter extends ApiClient {
  async getAllSpacesWithoutFilter() {
    const url = `${this.getUrl()}spaces-without-filter`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class OwnerSpaces extends ApiClient {
  async getOwnerSpaces(address) {
    const url = `${this.getUrl()}spaces/space/${address}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}

export class SpaceDetails extends ApiClient {
  async getSpaceDetails(spaceName) {
    const url = `${this.getUrl()}spaces/${spaceName}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error fetching: ${res.statusText}`);
    }

    return res.json();
  }
}
