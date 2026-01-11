import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReportStore } from '../components/reportStore';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const LOW_CONFIDENCE_THRESHOLD = 0.05;

interface Report {
  id: string | number;
  imageUrl?: string;
  doctor?: string;
  date?: string;
  patientName: string;
  age?: string | number;
  sex?: string;
  diagnosis: string;
  confidence?: string;
  gradcamUrl?: string;
  yoloUrl?: string;
}

const Reports = () => {
  const { reports } = useReportStore();
  const reportRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const diseaseDetails = {
    glioma: {
      normal: {
        prevention: "Maintain a healthy lifestyle and avoid radiation exposure.",
        treatment: "Surgery, radiation therapy, and chemotherapy.",
        specialist: "Neurosurgeon, Oncologist"
      },
      low: {
        prevention: "Maintain overall neurological health and attend routine check-ups.",
        treatment: "No treatment required at this stage.",
        specialist: "General Physician"
      }
    },
    meningioma: {
      normal: {
        prevention: "Regular check-ups, avoid harmful chemicals.",
        treatment: "Surgery, radiation therapy if needed.",
        specialist: "Neurosurgeon"
      },
      low: {
        prevention: "Maintain overall health with routine monitoring.",
        treatment: "No treatment required at this stage.",
        specialist: "General Physician"
      }
    },
    pituitary: {
      normal: {
        prevention: "Maintain hormonal balance, manage stress levels.",
        treatment: "Medication, surgery, or hormone therapy.",
        specialist: "Endocrinologist, Neurosurgeon"
      },
      low: {
        prevention: "Maintain a healthy lifestyle, manage stress, and monitor hormonal health.",
        treatment: "No active treatment required. Routine observation is advised.",
        specialist: "Consult an Endocrinologist only if symptoms develop."
      }
    },
    notumour: {
      normal: {
        prevention: "Regular screenings and a balanced diet.",
        treatment: "No treatment required.",
        specialist: "General Physician"
      },
      low: {
        prevention: "Continue routine health monitoring.",
        treatment: "No treatment required.",
        specialist: "General Physician"
      }
    }
  };

  const downloadPDF = async (report: Report) => {
    const ref = reportRefs.current[report.id];
    if (!ref) return;

    const canvas = await html2canvas(ref, { scale: 2 });
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
                <div className="flex justify-center gap-4 my-4 flex-wrap">
                  {report.imageUrl && <img src={`data:image/png;base64,${report.imageUrl}`} alt="Medical Scan" className="rounded-lg shadow-md w-72 border" />}
                  {report.gradcamUrl && <img src={`data:image/png;base64,${report.gradcamUrl}`} alt="Grad-CAM Heatmap" className="rounded-lg shadow-md w-72 border" />}
                  {report.yoloUrl && <img src={`data:image/png;base64,${report.yoloUrl}`} alt="YOLO Detection" className="rounded-lg shadow-md w-72 border" />}
                </div>

                {/* Report Details */}
                <p className="text-gray-700"><strong>Doctor:</strong> {report.doctor}</p>
                <p className="text-gray-700"><strong>Date:</strong> {report.date}</p>
                <p className="text-gray-700"><strong>Patient Name:</strong> {report.patientName}</p>
                <p className="text-gray-700"><strong>Age:</strong> {report.age} | <strong>Sex:</strong> {report.sex}</p>

                {/* Disease Information */}
                {(() => {
                  const confidence = Number(report.confidence) || 0;
                  const isLowConfidence = confidence <= LOW_CONFIDENCE_THRESHOLD;

                  const diagnosisKey = report.diagnosis.toLowerCase();
                  const disease = diseaseDetails[diagnosisKey as keyof typeof diseaseDetails];

                  const diagnosisText = isLowConfidence
                    ? "No significant abnormality detected"
                    : report.diagnosis;

                  const recommendations = isLowConfidence
                    ? disease?.low
                    : disease?.normal;

                  return (
                    <div className="mt-4 p-4 border rounded-lg bg-gray-100 space-y-1">
                      <h4 className="text-lg font-bold text-gray-800">Findings:</h4>

                      <p>
                        <strong>Diagnosis:</strong> {diagnosisText}
                      </p>

                      <p>
                        <strong>Probability:</strong> {confidence.toFixed(2)}
                      </p>

                      <p>
                        <strong>Prevention:</strong> {recommendations?.prevention || "N/A"}
                      </p>

                      <p>
                        <strong>Treatment:</strong> {recommendations?.treatment || "N/A"}
                      </p>

                      <p>
                        <strong>Specialist:</strong> {recommendations?.specialist || "N/A"}
                      </p>
                    </div>
                  );
                })()}

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

