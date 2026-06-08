class TamjaiNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="nav-container">
          <a href="#" class="logo-link">
            <div class="logo-icon">T</div>
            <span>TamJAI Labs</span>
          </a>
          <nav class="nav-links">
            <a href="#apps">Apps</a>
            <a href="#about">About</a>
            <a href="#legal">Legal & Support</a>
          </nav>
        </div>
      </header>
    `;
  }
}
customElements.define('tamjai-navbar', TamjaiNavbar);
