// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import OctogenAPI from 'octogen-api';

export const metadata: Metadata = {
  resource: 'catalog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/catalog/file/{file_id}',
  operationId: 'catalogGetFile',
};

export const tool: Tool = {
  name: 'retrieve_file_catalog',
  description:
    'Retrieve a file from Google Cloud Storage by file ID.\n\nArgs:\n    file_id: The unique identifier of the file\n\nReturns:\n    StreamingResponse with the file content and appropriate content type',
  inputSchema: {
    type: 'object',
    properties: {
      file_id: {
        type: 'string',
        title: 'File Id',
      },
    },
  },
};

export const handler = (client: OctogenAPI, args: Record<string, unknown> | undefined) => {
  const { file_id, ...body } = args as any;
  return client.catalog.retrieveFile(file_id);
};

export default { metadata, tool, handler };
