// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OctogenAPI } from '../client';

export abstract class APIResource {
  protected _client: OctogenAPI;

  constructor(client: OctogenAPI) {
    this._client = client;
  }
}
