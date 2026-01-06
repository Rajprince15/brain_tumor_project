from flask import Flask, request, jsonify
import torch
import torchvision.transforms as transforms
from PIL import Image
import io
import base64
from flask_cors import CORS
import torch.nn as nn
import torchvision.models as models

app = Flask(__name__)
CORS(app)

# Path to the trained model
best_model_path = r"D:\web\project\best_model.pth"

# Load Pretrained EfficientNet & Modify for 4 Classes
class BrainTumorEfficientNet(nn.Module):
    def __init__(self, num_classes=4):
        super(BrainTumorEfficientNet, self).__init__()
        self.model = models.efficientnet_b3(weights=models.EfficientNet_B3_Weights.IMAGENET1K_V1)  # Correct weight loading
        self.model.classifier[1] = nn.Linear(self.model.classifier[1].in_features, num_classes)

    def forward(self, x):
        return self.model(x)

# Initialize Model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = BrainTumorEfficientNet().to(device)

# Class labels
class_labels = ["glioma", "meningioma", "pituitary", "notumour"]

# Load best model
model.load_state_dict(torch.load(best_model_path, map_location=device))
model.eval()

def predict_image(image):
    """Predicts the label for a given image object."""
    transform = transforms.Compose([
        transforms.Grayscale(num_output_channels=3),  # Ensure 3 channels
        transforms.Resize((256, 256)),  # Resize to match training input
        transforms.ToTensor(),  # Convert to tensor
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # EfficientNet normalization
    ])

    image = transform(image).unsqueeze(0).to(device)  # Apply transforms & add batch dimension

    with torch.no_grad():
        output = model(image)  # Forward pass
        predicted_class = torch.argmax(output, dim=1).item()  # Get highest logit index

    predicted_label = class_labels[predicted_class]  # Convert index to class name
    print(predicted_label)
    return predicted_label

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read())).convert('RGB')

    class_label = predict_image(image)

    # Convert processed image to Base64
    buffered = io.BytesIO()
    image.save(buffered, format="PNG")
    img_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

    return jsonify({
        'diagnosis': class_label,
        'image': img_base64
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)

