from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Jarvis API",
    version="0.1.0",
    description="Backend API for Jarvis Desktop Assistant",
)

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "status": "online",
        "assistant": "Jarvis",
        "message": "Welcome to Jarvis Backend!"
    }