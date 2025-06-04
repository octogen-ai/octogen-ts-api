// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OctogenAPI, { toFile } from 'octogen-api';

const client = new OctogenAPI({
  octogenAPIKey: 'My Octogen API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource catalog', () => {
  // skipped: tests are disabled for the time being
  test.skip('agentSearch: only required params', async () => {
    const responsePromise = client.catalog.agentSearch({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('agentSearch: required and optional params', async () => {
    const response = await client.catalog.agentSearch({ text: 'text', limit: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFile', async () => {
    const responsePromise = client.catalog.retrieveFile('file_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('styleAndTagsSearch: only required params', async () => {
    const responsePromise = client.catalog.styleAndTagsSearch({
      type: 'type',
      styles: ['string'],
      tags: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('styleAndTagsSearch: required and optional params', async () => {
    const response = await client.catalog.styleAndTagsSearch({
      type: 'type',
      styles: ['string'],
      tags: ['string'],
      compact_mode: 'compact',
      limit: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('textSearch: only required params', async () => {
    const responsePromise = client.catalog.textSearch({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('textSearch: required and optional params', async () => {
    const response = await client.catalog.textSearch({
      text: 'text',
      exclusion_facets: [{ name: 'brand_name', values: ['string'] }],
      facets: [{ name: 'brand_name', values: ['string'] }],
      limit: 0,
      price_max: 0,
      price_min: 0,
      ranking_embedding_column: 'ranking_embedding_column',
      ranking_text: 'ranking_text',
      retrieval_embedding_column: 'retrieval_embedding_column',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadFile: only required params', async () => {
    const responsePromise = client.catalog.uploadFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('uploadFile: required and optional params', async () => {
    const response = await client.catalog.uploadFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
