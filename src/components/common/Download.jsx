import React, { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Download = ({ children, name }) => {
    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const handleDownload = (e) => {
        savePDF(contentArea.current, {
            scale: 0.8,
            margin: "1cm",
            paperSize: "A4",
            fileName: name,
        });
        // pdfExportComponent.current.save();
    };
    return (
        <>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div ref={contentArea} className="downloadContent">
                    {children}
                </div>
            </PDFExport>
            <button
                className="btn btn-success mt-3 mx-5"
                onClick={handleDownload}
            >
                Download
            </button>
        </>
    );
};

export default Download;
