import { useState } from "react";
import { sendMessage } from "../services/api";

function InputBar({ messages, setMessages }) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    // Show the user's message immediately
    setMessages([...messages, userMessage]);

    // Store input before clearing it
    const currentInput = input;

    // Clear input field
    setInput("");

    try {
      const response = await sendMessage(currentInput);

      setMessages((prev) => [
        ...prev,
        {
          sender: "jarvis",
          text: response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "jarvis",
          text: "Unable to connect to Jarvis backend.",
        },
      ]);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a command..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button
        className="mic-btn"
        onClick={handleSubmit}
      >
        🎤
      </button>
    </div>
  );
}

export default InputBar;