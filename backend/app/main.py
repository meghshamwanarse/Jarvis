from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.ai_service import generate_response


app = FastAPI(
    title="Jarvis API",
    version="0.3.0",
    description="Backend API for Jarvis Desktop Assistant",
)


# Allow React frontend to communicate with FastAPI
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
        "message": "Welcome to Jarvis Backend!",
    }


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = generate_response(request.message)

    return ChatResponse(
        reply=reply
    )