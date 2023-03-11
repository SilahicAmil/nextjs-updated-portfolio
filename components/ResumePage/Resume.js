import { Document, Page, pdfjs } from "react-pdf";

import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="m-4 flex h-[90vh] w-full">
      <div className="flex h-full w-full">
        <Document
          file="/Amil-Silahic-Web-Dev-Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          className="w-full"
        >
          <Page pageNumber={pageNumber} className="" />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
