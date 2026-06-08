class TamjaiShowcase extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section-title-wrap" id="apps">
        <h2 class="section-title">Featured Project</h2>
      </div>
      
      <section class="showcase-container">
        <div class="showcase-card">
          <div class="showcase-left">
            <div class="app-logo-wrap">
              <img class="app-logo" src="assets/logo.png" alt="TellDream App Logo">
              <div>
                <h3 class="app-title">เล่าฝัน (TellDream)</h3>
                <p style="color: var(--primary); font-size: 0.9rem; font-weight: 600;">AI Dream Interpretation & Entertainment</p>
              </div>
            </div>
            <p class="app-desc">
              TellDream is an Android application dedicated to personal entertainment and dream interpretation. Users describe their dreams through voice or text input, and our Cloudflare-powered backend instantly analyzes the content to deliver keyword insights, entertainment-focused dream interpretations, and lucky number suggestions.
            </p>
            <ul class="feature-list">
              <li class="feature-item"><span class="feature-icon">✓</span> AI Dream Analyst</li>
              <li class="feature-item"><span class="feature-icon">✓</span> Voice-to-Text Dictation</li>
              <li class="feature-item"><span class="feature-icon">✓</span> Local & Server History</li>
              <li class="feature-item"><span class="feature-icon">✓</span> Premium Ticket-Stub UI</li>
            </ul>
            <div style="display: flex; gap: 12px;">
              <span class="btn btn-primary" style="opacity: 0.75; cursor: default;">Android (Internal Testing)</span>
            </div>
          </div>
          
          <div class="showcase-right">
            <div class="mockup-gallery">
              <div class="mockup-screen-container">
                <img class="mockup-img" id="mockupScreen" src="assets/ChatGPT Image May 27, 2026, 01_16_56 AM.png" alt="TellDream Screen Mockup" style="transition: opacity 0.2s ease-in-out;">
              </div>
              <div class="gallery-dots">
                <div class="dot active" data-index="0"></div>
                <div class="dot" data-index="1"></div>
                <div class="dot" data-index="2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    // Bind event listeners for switcher dots
    const dots = this.querySelectorAll('.dot');
    const img = this.querySelector('#mockupScreen');
    const images = [
      "assets/ChatGPT Image May 27, 2026, 01_16_56 AM.png",
      "assets/ChatGPT Image May 22, 2026, 04_17_37 PM.png",
      "assets/ChatGPT Image May 27, 2026, 11_46_12 PM.png"
    ];

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = encodeURI(images[index]);
          img.style.opacity = 1;
        }, 200);

        dots.forEach((d, idx) => {
          if (idx === index) {
            d.classList.add('active');
          } else {
            d.classList.remove('active');
          }
        });
      });
    });
  }
}
customElements.define('tamjai-showcase', TamjaiShowcase);
