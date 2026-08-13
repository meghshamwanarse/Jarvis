import ollama


MODEL_NAME = "qwen3:1.7b"


def generate_response(message: str) -> str:
    response = ollama.chat(
        model=MODEL_NAME,
        messages=[
            {
                "role": "user",
                "content": message,
            }
        ],
        think=False,
    )

    return response["message"]["content"]