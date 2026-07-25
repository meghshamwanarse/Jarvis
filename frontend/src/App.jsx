import { useState } from "react";

import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {messages.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <ChatWindow messages={messages} />
        )}
      </main>

      <InputBar
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;