import JarvisCore from "./JarvisCore";

function WelcomeScreen() {
  return (
    <main className="welcome-screen">
      <JarvisCore />

      <div className="welcome-text">
        <h1>Welcome back, Meghsham.</h1>
        <p>How can I help you today?</p>
      </div>
    </main>
  );
}

export default WelcomeScreen;