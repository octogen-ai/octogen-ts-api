// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import OctogenAPI from 'octogen-api';

export const metadata: Metadata = {
  resource: 'catalog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/catalog/agent_search',
  operationId: 'catalogAgentSearchProducts',
};

export const tool: Tool = {
  name: 'agent_search_catalog',
  description:
    'Search for products using an LLM to generate a TextSearchQuery object that is used to search for products in the e-commerce catalog.\nThe LLM will generate the fields of the TextSearchQuery object based on input query text.',
  inputSchema: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        title: 'Product search query',
        description: 'Query text to be input to an LLM to generate a TextSearchQuery object',
      },
      limit: {
        type: 'integer',
        title: 'Search results limit',
        description: 'The maximum number of results to return from the search.',
      },
    },
  },
};

export const handler = (client: OctogenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.catalog.agentSearch(body);
};

export default { metadata, tool, handler };
