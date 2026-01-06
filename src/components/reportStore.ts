import { create } from 'zustand';

interface Report {
  id: number;
  patientName: string;
  age: string;
  sex: string;
  doctor: string;
  date: string;
  diagnosis: string;
  status: 'pending' | 'completed';
  imageUrl?: string;
  confidence?: string;
}

interface ReportStore {
  reports: Report[];
  addReport: (report: Omit<Report, 'id'>) => void;
  updateStatus: (id: number, status: 'pending' | 'completed') => void;
  deleteReport: (id: number) => void;
}

export const useReportStore = create<ReportStore>((set) => ({
  reports: [],

  addReport: (report) => 
    set((state) => ({
      reports: [...state.reports, { id: Date.now(), ...report }],
    })),

  updateStatus: (id, status) => 
    set((state) => ({
      reports: state.reports.map((report) =>
        report.id === id ? { ...report, status } : report
      ),
    })),

  deleteReport: (id) =>
    set((state) => ({
      reports: state.reports.filter((report) => report.id !== id),
    })),
}));

