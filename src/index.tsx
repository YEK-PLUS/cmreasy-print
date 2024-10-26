import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { GeneratePDF } from './Document';

renderToFile(<GeneratePDF />, `my-doc.pdf`);