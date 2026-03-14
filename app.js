const statusEl = document.getElementById("status");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("/sw.js");
      statusEl.textContent = "Service Worker: 已注册";
    } catch (error) {
      statusEl.textContent = "Service Worker: 注册失败";
      console.error(error);
    }
  });
} else {
  statusEl.textContent = "Service Worker: 当前浏览器不支持";
}