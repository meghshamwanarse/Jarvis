import { useState } from "react";

function InputBar({ messages, setMessages }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "jarvis",
        text: "I'm thinking...",
      },
    ]);

    setInput("");
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