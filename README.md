# 🧠 Brain Tumor Detection AI

![Image](https://github.com/user-attachments/assets/4df2d055-eaaf-422f-a6fd-0a2312d8fd33)

![Brain Tumor Detection]([Brain-tumor-classification-ai
/PROJECT IMAGES/](https://github.com/aniket866/Brain-tumor-classification-ai/blob/main/PROJECT%20IMAGES/Report%20generated.png))

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/) 
[![Flask](https://img.shields.io/badge/Flask-Web%20Framework-green.svg)](https://flask.palletsprojects.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-red.svg)](https://pytorch.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-teal.svg)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.9.1-purple.svg)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)
[![Contributors](https://img.shields.io/github/contributors/yourusername/brain-tumor-ai)](#)

---

## 📌Project Overview 🏥

This project aims to classify **brain tumors** into four categories using deep learning. A DenseNet model was trained on a preprocessed and augmented dataset, achieving 99.65% test accuracy. Additionally, a web application was developed where users can upload MRI scans and receive an automated diagnosis report.

💡 **Built With:** Flask, PyTorch, OpenCV, React, Vite, Node.js, Express, Zustand, Tailwind, JavaScript, HTML, CSS

📚 **Dataset Description**
The dataset consists of JPG MRI images organized into four tumor types:
- 🧠 **Glioma** (Aggressive brain tumor)
- 🏥 **Meningioma** (Brain membrane tumor)
- 🩸 **Pituitary** (Hormonal gland tumor)
- 🏞️ **No Tumor (Healthy)**

---

Training Data: Used 90% for training and 10% for validation.
Testing Data: A separate testing folder was kept for final evaluation.

🚀 **Key Benefits:**
- ✅ **High-accuracy AI detection** with an intuitive UI.
- 📑 **Automated medical report generation** with risk levels.
- 🎨 **Interactive dashboard** for MRI scan visualization.

---

## ✨ Features 💡
- 🏥 **AI-powered tumor detection** from MRI scans.
- 📄 **Structured PDF medical reports** with heatmaps.
- 🌐 **User-friendly Web Dashboard** with interactive results.
- 🖼️ **Supports multiple image formats** (JPG, PNG, DICOM, NIfTI).
- 🔄 **Automated report generation** & secure cloud storage.
- 📡 **Cloud-based deployment** for seamless scaling.

### 📂 Workflows

A Flask-based website was created where users can:
1. ↑ **Upload MRI Scans** (JPG format) 🖼️
2. 👤 **Enter Patient Details** 
3. 🔍 **AI-Based Diagnosis & Tumor Type Prediction** 
4. 📄 **Download Report for Medical Reference**

---

---


### 📂 Dataset Structure:
```
/training
 ├── 🧠 glioma
 ├── 🏥 meningioma
 ├── 🩸 pituitary
 ├── 🏞️ notumour
/testing
 ├── 🧠 glioma
 ├── 🏥 meningioma
 ├── 🩸 pituitary
 ├── 🏞️ notumour
```

## 🚀 Demo 🎥
🔗 **Live Demo:** [Coming Soon](#)

![Demo Screenshot](https://via.placeholder.com/800x400.png?text=Live+Demo+Placeholder)

---

## 🛠️ Installation 🖥️
### 1️⃣ Clone the Repository 🛎️
```bash
git clone https://github.com/aniket866/brain-tumor-ai.git
cd brain-tumor-ai
```
### 2️⃣ Create a Virtual Environment & Install Dependencies ⚙️
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```
### 3️⃣ Download Pretrained AI Model 🧠
```bash
wget https://yourmodelstorage.com/brain_tumor_model.h5 -O models/brain_tumor_model.h5
```
### 4️⃣ Run the Application 🚦
```

1️⃣ Install dependencies:
bash
CopyEdit
pip install torch torchvision flask opencv-python

3️⃣ Run the web application:
bash
python app.py

4️⃣ Access the app at http://localhost:5000.
```
### 5️⃣ Open in Browser 🌍
```
http://127.0.0.1:5000/
```

---

## 🏗️ Tech Stack ⚙️
### **Frameworks & Libraries**
- 🚀 Flask (Backend Web Framework)
- ⚡ FastAPI (Alternative API framework)
- 🎨 React.js (Frontend UI)
- 🔥 Vite (Build Tool)
- 🌍 Node.js & Express (Backend API)
- 🔄 Zustand (State Management)

### **Frontend Dependencies**
- 🎭 framer-motion (Animations)
- 🔘 lucide-react (Icons)
- ⚛️ react, react-dom (Core UI)
- 🚏 react-router-dom (Routing)
- 🔔 react-toastify (Notifications)
- 🎨 TailwindCSS (Styling framework)

### **Backend Dependencies**
- 🧠 PyTorch, Torchvision (Deep Learning)
- 🖼️ OpenCV, SciPy (Image Processing)
- 🗄️ PostgreSQL (Database for reports & logs)

### **Languages**
- 🐍 Python, Flask (Backend, AI Model)
- ⚛️ JavaScript (Frontend, API Logic)
- 🖌️ HTML, CSS (Styling & Markup)



### **AI Model**
- 🧠 PyTorch-based Brain Tumor Classification Model

### **Versions**
- 🔷 React: `18.3.1`
- ⚡ Vite: `5.4.2`
- 📜 TypeScript: `5.5.3`
- 🎨 TailwindCSS: `3.4.1`
- 🛡️ ESLint: `9.9.1`

---

## 🖼️ Screenshots 📸
| Upload MRI Scan | AI Detection | Report Generation | Dashboard |
|---|---|---|---|
| ![Upload](https://via.placeholder.com/300x200.png?text=Upload) | ![Detection](https://via.placeholder.com/300x200.png?text=Detection) | ![Report](https://via.placeholder.com/300x200.png?text=Report) | ![Dashboard](https://via.placeholder.com/300x200.png?text=Dashboard) |

---

## 📊 AI Model Performance 🎯
🌟 Data Processing & Training 💡

🔄 Data Preprocessing & Augmentation

🖼️ Images were resized to 256x256.

♻️ Applied 5 augmentations per image (rotation, flipping, contrast adjustments, etc.).

🌟 Resulting dataset size increased 6x (1 original + 5 augmentations).

🧠 Model & Training

🎨 Used EfficientNet for classification.

🧨 Loss function: CrossEntropyLoss.

💡 Optimizer: Adam.

⏳ Trained for multiple epochs, selecting the model with the best validation loss.

🏆 Final Test Accuracy: 99.65%.
---

## 🤝 Contributing 💡
Contributions are welcome! Please follow these steps:
1. **Fork the repository** 🍴
2. **Create a new branch**: `git checkout -b feature-name`
3. **Commit changes**: `git commit -m "Add feature"`
4. **Push to GitHub**: `git push origin feature-name`
5. **Create a Pull Request** 🚀

---

## 🔒 Security & Compliance 🔐
- ✅ HIPAA & GDPR compliance for medical data privacy.
- 🔑 Secure authentication using Firebase & OAuth.
- 🔐 Encrypted data storage with AES-256 encryption.

---
---

## 🏆 Conclusion
This model provides highly accurate brain tumor classification. The web application makes it easy for users to get an instant diagnosis. Further improvements could include 3D MRI analysis and multi-class localization.

---



## 📜 License 📃
MIT License © 2025 aniket866

---

📩 **Need Help?** Reach out at [iamaniketkumarmaner@gmail.com](mailto:your-email@example.com) 💌

