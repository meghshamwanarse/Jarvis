function ChatWindow({ messages }) {
  return (
    <main className="chat-window">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender}`}
        >
          <strong>
            {message.sender === "user"
              ? "👤 You"
              : "🤖 Jarvis"}
          </strong>

          <p>{message.text}</p>
        </div>
      ))}
    </main>
  );
}

export default ChatWindow;