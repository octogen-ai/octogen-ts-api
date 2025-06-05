// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import OctogenAPI from 'octogen-api';

export const metadata: Metadata = {
  resource: 'catalog',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/catalog/style_and_tags_search',
  operationId: 'catalogStyleAndTagsSearchProducts',
};

export const tool: Tool = {
  name: 'style_and_tags_search_catalog',
  description:
    "Search for products using the Octogen's search agent.\n\nArgs:\n    type: The type of product to search for\n    styles: List of styles to search for\n    tags: List of tags to search for\n    limit: Maximum number of results to return. The default is 10.",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        title: 'Type',
      },
      styles: {
        type: 'array',
        title: 'Styles',
        items: {
          type: 'string',
        },
      },
      tags: {
        type: 'array',
        title: 'Tags',
        items: {
          type: 'string',
        },
      },
      compact_mode: {
        type: 'string',
        title: 'OutputMode',
        enum: ['compact', 'medium'],
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
    },
  },
};

export const handler = (client: OctogenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.catalog.styleAndTagsSearch(body);
};

export default { metadata, tool, handler };
