import StatusIndicator from "./StatusIndicator";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        🤖 <span>JARVIS</span>
      </div>

      <div className="header-right">
        <StatusIndicator />
        <button className="settings-btn">⚙️</button>
      </div>
    </header>
  );
}

export default Header;