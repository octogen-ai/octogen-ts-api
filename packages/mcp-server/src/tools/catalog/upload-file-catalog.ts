// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import OctogenAPI from 'octogen-api';

export const metadata: Metadata = {
  resource: 'catalog',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/catalog/file_upload',
  operationId: 'catalogFileUpload',
};

export const tool: Tool = {
  name: 'upload_file_catalog',
  description:
    'Upload an image file to Google Cloud Storage.\n\nArgs:\n    file: The file to upload\n\nReturns:\n    FileUploadResponse with the file ID and URL',
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        title: 'File',
      },
    },
  },
};

export const handler = (client: OctogenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.catalog.uploadFile(body);
};

export default { metadata, tool, handler };
