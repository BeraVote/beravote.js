export class ApiClient {
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

  async _get(endpoint, params = {}) {
    const query = new URLSearchParams(params).toString();
    const url = `${this.getUrl()}${endpoint}${query ? `?${query}` : ''}`;
    const res = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });

    if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.statusText}`);
    return res.json();
  }

  async _post(endpoint, body) {
    const url = `${this.getUrl()}${endpoint}`;
    const res = await fetch(url, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.statusText}`);
    return res.json();
  }

  getChains() {
    return this._get('chains/definition');
  }

  getNetworks() {
    return this._get('networks');
  }

  getPopularProposals() {
    return this._get('home/hottest');
  }

  getProposalsByCid(cid) {
    return this._get(`proposal/${cid}`);
  }

  getProposalComments(cid, opts = {}) {
    return this._get(`proposal/${cid}/comments`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getProposalVotes(cid, opts = {}) {
    return this._get(`proposal/${cid}/votes`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getSpaceVotes(space, opts = {}) {
    return this._get(`space/${space}/votes`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getSpaceStats(space) {
    return this._get(`space/${space}/stats`);
  }

  getVotes(cid, address) {
    return this._get(`proposal/${cid}/votes/${address}`);
  }

  getFilterVotes(cid, network, address) {
    return this._get(`proposal/${cid}/votes/network/${network}/address/${address}`);
  }

  findProposalStats(cid, network, address) {
    return this._get(`proposal/${cid}/stats`, { proposalCid: cid, network, address });
  }

  getProposalVoterBalance(cid, network, address) {
    return this._get(`proposal/${cid}/voterbalance/${network}/${address}`);
  }

  getProposalLists(space, opts = {}) {
    return this._get(`${space}/proposals`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getPendingProposals(space, opts = {}) {
    return this._get(`${space}/proposals/pending`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getActiveProposals(space, opts = {}) {
    return this._get(`${space}/proposals/active`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getClosedProposals(space, opts = {}) {
    return this._get(`${space}/proposals/closed`, {
      page: opts.page || 1,
      page_size: opts.pageSize || 10,
    });
  }

  getJoinedSpaces(address) {
    return this._get(`account/${address}/spaces`);
  }

  getSpaceMembers(space) {
    return this._get(`account/spaces/${space}/members`);
  }

  getNetworkSpaces(network) {
    return this._get(`spaces-by-network/${network}`);
  }

  getAllSpaces() {
    return this._get(`spaces`);
  }

  getAllSpacesWithoutFilter() {
    return this._get(`spaces-without-filter`);
  }

  getOwnerSpaces(address) {
    return this._get(`spaces/space/${address}`);
  }

  getSpaceDetails(space) {
    return this._get(`spaces/${space}`);
  }
}
