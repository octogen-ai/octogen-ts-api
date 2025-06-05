// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import OctogenAPI from 'octogen-api';

export const metadata: Metadata = {
  resource: 'catalog',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/catalog/text_search',
  operationId: 'catalogTextSearchProducts',
};

export const tool: Tool = {
  name: 'text_search_catalog',
  description:
    'Search for products in the Octogen e-commerce catalog.\nThe search is performed using text embedding similarity on the input query text with the pre-computed product embeddings.\nThe additional parameters are used filters to narrow down the search results.\nThe number of results is determined by the limit parameter.',
  inputSchema: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        title: 'Product search query text',
        description:
          'The text is converted to a vector embedding and used to search for products in the e-commerce catalog with pre-computed product embeddings.',
      },
      exclusion_facets: {
        type: 'array',
        title: 'Exclusion facets filter',
        description: 'Facets that will be excluded from the search results.',
        items: {
          $ref: '#/$defs/facet',
        },
      },
      facets: {
        type: 'array',
        title: 'Facets filter',
        description: 'The search results will be filtered by the specified facets.',
        items: {
          $ref: '#/$defs/facet',
        },
      },
      limit: {
        type: 'integer',
        title: 'Search results limit',
        description: 'The maximum number of results to return from the search. The default is 10.',
      },
      price_max: {
        type: 'number',
        title: 'Maximum price',
        description:
          'The products will be filtered to have a price less than or equal to the specified value.',
      },
      price_min: {
        type: 'number',
        title: 'Minimum price',
        description:
          'The products will be filtered to have a price greater than or equal to the specified value.',
      },
      ranking_embedding_column: {
        type: 'string',
        title: 'Ranking embedding column',
        description: "The column to use for the ranking embedding. The default is 'embedding'.",
      },
      ranking_text: {
        type: 'string',
        title: 'Ranking text',
        description: 'The text is converted to a vector embedding and used to rank the search results.',
      },
      retrieval_embedding_column: {
        type: 'string',
        title: 'Retrieval embedding column',
        description: "The column to use for the retrieval embedding. The default is 'embedding'.",
      },
    },
    $defs: {
      facet: {
        type: 'object',
        title: 'Facet',
        properties: {
          name: {
            type: 'string',
            title: 'FacetName',
            description:
              'The facet to filter by. Options: brand_name (The brand or manufacturer name of the product), product_type (The type or category of the product (e.g., shirt, pants, shoes)), gender (The target gender for the product (e.g., men, women, unisex))',
            enum: ['brand_name', 'product_type', 'gender'],
          },
          values: {
            type: 'array',
            title: 'Values',
            description:
              'List of values to filter by. They should all be lowercase. Facet values can be phrases, so make sure to include the spaces.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['name', 'values'],
      },
    },
  },
};

export const handler = (client: OctogenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.catalog.textSearch(body);
};

export default { metadata, tool, handler };
