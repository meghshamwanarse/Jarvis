const API_URL = "http://127.0.0.1:8000";

export async function sendMessage(message) {
  const response = await fetch(`${API_URL}/`);

  const data = await response.json();

  return data.message;
}