import React from 'react';
import {renderToBuffer} from '@react-pdf/renderer';
import {GeneratePDF} from './Document';

import {Languages} from './Document/languages';
import {typeCheck} from './Document/utils';
import type * as Types from './Document/types';
import {FinalDocument, finalDocumentSchema} from './Document/types';

export default Types;
interface GetBufferProps {
  ({
    document,
    documentId,
    documentUrl,
    time,
    languages,
  }: {
    document: FinalDocument;
    documentId: string;
    documentUrl: string;
    time: number;
    languages: Languages[];
  }): Promise<Buffer>;
}

export const getBuffer: GetBufferProps = async ({
  document: _document,
  documentId,
  documentUrl,
  time,
  languages,
}) => {
  const document = typeCheck(finalDocumentSchema, _document);
  return renderToBuffer(
    <GeneratePDF
      document={document}
      documentId={documentId}
      documentUrl={documentUrl}
      time={time}
      languages={languages}
    />,
  );
};
