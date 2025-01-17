# app.py (Backend)
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
from PIL import Image
import torch
from torchvision import transforms
from diffusers import StableDiffusionPipeline

app = FastAPI()

# CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
model = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v-1-4").to("cuda")

@app.post("/generate")
async def generate_image(prompt: str):
    image = model(prompt).images[0]  # Generate image
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    return {"image_data": buffer.getvalue().decode("latin1")}
