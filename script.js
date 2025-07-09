async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = userInput.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<p><strong>你:</strong> ${message}</p>`;
  userInput.value = "";

  const response = await fetch("https://divine-silence-bb95.zhangyabin2000618.workers.dev/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  chatBox.innerHTML += `<p><strong>GM助手:</strong> ${data.reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
