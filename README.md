# Stable-Diffusion-Based-Image-Generation-Web-App

Step 1: Prerequisites (Zarurat ke Tools aur Setup)

Python Install karein:

Python 3.8+ hona chahiye.

Hardware Requirements:

GPU zaruri hai (NVIDIA GPU with CUDA support recommended).

Agar GPU nahi hai, to aap Google Colab, AWS, ya Azure ka use kar sakte hain.

Dependencies (Zaruri Packages):

Pip aur npm install hona chahiye.

-----------------------------------------------------------------------------------------------------------------------------

Step 2: Stable Diffusion Setup

Stable Diffusion repository ko clone karein:

git clone https://github.com/CompVis/stable-diffusion
cd stable-diffusion

Required packages install karein:

pip install -r requirements.txt

Pre-trained weights download karein:

Hugging Face se weights lein.

Unhe models/ldm directory mein place karein.


---------------------------------------------------------------------------------------------------------------------------------


Step 3: Backend Code Setup (FastAPI ka use)

FastAPI ke saath backend banayein.

Code (Backend - app.py): File maie dekhe file di hui hai 


Backend ko run karne ke liye: "uvicorn app:app --reload"


---------------------------------------------------------------------------------------------------------------------------------

Step 4: Frontend Code Setup (React.js)

React.js frontend ka use karte hain.

Frontend Setup:

React app create karein: 
npx create-react-app stable-diffusion-app
cd stable-diffusion-app


src/App.js file ko replace karein - File dekhe app.js 


Frontend ko run karne ke liye: "npm start"

-----------------------------------------------------------------------------------------------------------------------------------
Step 5: Deployment (Hosting karna)

Frontend Hosting:

Use Netlify ya Vercel.

Backend Hosting:

Use AWS EC2, Render, ya Heroku.



