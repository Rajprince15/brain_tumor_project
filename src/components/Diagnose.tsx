import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useReportStore } from "../components/reportStore";

function Diagnose() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    sex: '',
    doctor_name: '',
  });

  const navigate = useNavigate();
  const { addReport } = useReportStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error('Please select an image file first');
      return;
    }

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('patient_name', patientInfo.name);
    formData.append('age', patientInfo.age);
    formData.append('sex', patientInfo.sex);
    formData.append('doctor_name', patientInfo.doctor_name);

    try {
      const response = await fetch('http://localhost:8080/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Analysis complete!');

        // Convert selected image to a blob URL
        const imageUrl = URL.createObjectURL(selectedFile);

        // Save report to Zustand store
        addReport({
          patientName: patientInfo.name,
          age: patientInfo.age,
          sex: patientInfo.sex,
          doctor: patientInfo.doctor_name,
          date: new Date().toISOString().split('T')[0],
          diagnosis: data.diagnosis,
          confidence: data.confidence,
          status: 'pending',
          imageUrl: imageUrl,  // Store image URL
        });

        navigate('/reports');
      } else {
        toast.error(data.error || 'Analysis failed');
      }
    } catch (error) {
      toast.error('Error analyzing image');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Brain Tumor Detection</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input type="file" onChange={handleFileChange} accept="image/jpeg, image/png" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <span className="text-gray-600">{selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}</span>
              </label>
            </div>

            {/* Patient Details Input Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Patient Name" value={patientInfo.name} onChange={handleInputChange} className="p-3 border rounded-lg w-full" required />
              <input type="number" name="age" placeholder="Age" value={patientInfo.age} onChange={handleInputChange} className="p-3 border rounded-lg w-full" required />
              <input type="text" name="sex" placeholder="Sex" value={patientInfo.sex} onChange={handleInputChange} className="p-3 border rounded-lg w-full" required />
              <input type="text" name="doctor_name" placeholder="Doctor Name" value={patientInfo.doctor_name} onChange={handleInputChange} className="p-3 border rounded-lg w-full" required />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={!selectedFile || isAnalyzing} className={`w-full py-3 px-4 rounded-lg text-white font-medium ${!selectedFile || isAnalyzing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
              {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Diagnose;