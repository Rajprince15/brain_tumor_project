import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReportStore } from '../components/reportStore';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import roiOutputImage from "../components/roi_ouput/gradcam_output.png"; // Adjust path if needed
import gradOutputImage from "../components/roi_ouput/output.png";

const Reports = () => {
  const { reports } = useReportStore();
  const reportRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Store refs dynamically

  const diseaseDetails = {
    glioma: {
      prevention: "Maintain a healthy lifestyle, avoid radiation exposure.",
      treatment: "Surgery, radiation therapy, and chemotherapy.",
      specialist: "Neurosurgeon, Oncologist"
    },
    meningioma: {
      prevention: "Regular check-ups, avoid harmful chemicals.",
      treatment: "Surgery, radiation therapy if needed.",
      specialist: "Neurosurgeon"
    },
    pituitary: {
      prevention: "Maintain hormonal balance, manage stress levels.",
      treatment: "Medication, surgery, or hormone therapy.",
      specialist: "Endocrinologist, Neurosurgeon"
    },
    notumour: {
      prevention: "Regular screenings and a balanced diet.",
      treatment: "No immediate treatment, but follow-up recommended.",
      specialist: "General Physician"
    }
  };

  const downloadPDF = async (report) => {
    if (!reportRefs.current[report.id]) return;

    const canvas = await html2canvas(reportRefs.current[report.id], { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save(`${report.patientName}_Medical_Report.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Medical Reports</h2>

        {reports.length === 0 ? (
          <p className="text-gray-500 text-center">No reports available.</p>
        ) : (
          reports.map((report) => (
            <motion.div
              key={report.id}
              className="border border-gray-200 rounded-lg p-6 mb-6 bg-white shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Assign ref to each report dynamically */}
              <div ref={(el) => (reportRefs.current[report.id] = el)} className="p-6 bg-white rounded-lg">
                {/* Hospital Name */}
                <h2 className="text-2xl font-bold text-center text-gray-800 underline">Evergreen Wellness Hospital</h2>
                <h3 className="text-xl font-semibold text-center text-gray-700 mt-2">Medical Report</h3>

                {/* Image Display */}
                <div className="flex justify-center my-4">
                  <img src={report.imageUrl} alt="Medical Scan" className="rounded-lg shadow-md w-72 border" />
                  <img src={roiOutputImage} alt="ROI Scan" className="rounded-lg shadow-md w-72 border" />
                  <img src={gradOutputImage} alt="ROI Scan" className="rounded-lg shadow-md w-72 border" />
                </div>

                {/* Report Details */}
                <p className="text-gray-700"><strong>Doctor:</strong> {report.doctor}</p>
                <p className="text-gray-700"><strong>Date:</strong> {report.date}</p>
                <p className="text-gray-700"><strong>Patient Name:</strong> {report.patientName}</p>
                <p className="text-gray-700"><strong>Age:</strong> {report.age} | <strong>Sex:</strong> {report.sex}</p>

                {/* Disease Information */}
                <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                  <h4 className="text-lg font-bold text-gray-800">Findings:</h4>
                  <p><strong>Diagnosis:</strong> {report.diagnosis}</p>
                  <p><strong>Probability:</strong> {report.confidence}</p>
                  <p><strong>Prevention:</strong> {diseaseDetails[report.diagnosis.toLowerCase()]?.prevention || "N/A"}</p>
                  <p><strong>Treatment:</strong> {diseaseDetails[report.diagnosis.toLowerCase()]?.treatment || "N/A"}</p>
                  <p><strong>Specialist:</strong> {diseaseDetails[report.diagnosis.toLowerCase()]?.specialist || "N/A"}</p>
                </div>

                <p className="text-center text-sm text-gray-500 mt-4">For inquiries and appointments, contact please visit our hospital or contact us at (123) 456-7890.</p>
              </div>

              {/* Download PDF Button */}
              <div className="mt-4 flex justify-center">
                <button onClick={() => downloadPDF(report)} className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                  <Download className="h-5 w-5 mr-2" /> Download Report (PDF)
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reports;

