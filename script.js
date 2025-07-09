async function sendForm() {
  const chatBox = document.getElementById("chatBox");

  const categorySelect = document.getElementById("category");
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(opt => opt.value).join(", ");

  const message = `
销售站点：${document.getElementById("market").value}
采购成本范围：$${document.getElementById("costMin").value} - $${document.getElementById("costMax").value}
期望利润率：${document.getElementById("profitMin").value}% - ${document.getElementById("profitMax").value || "未设定"}%
销售节奏：${document.getElementById("salesSpeed").value}
偏好类目：${selectedCategories}
仓储发货方式：${document.getElementById("shipping").value}
结合社媒趋势判断：${document.getElementById("social").value}
  `.trim();

  chatBox.innerHTML += `<p><strong>你:</strong><br>${message.replace(/\n/g, "<br>")}</p>`;

  try {
    const response = await fetch("https://divine-silence-bb95.zhangyabin2000618.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatBox.innerHTML += `<p><strong>GM助手:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (err) {
    chatBox.innerHTML += `<p><strong>GM助手:</strong> ❌ 网络错误：${err.message}</p>`;
  }
}
