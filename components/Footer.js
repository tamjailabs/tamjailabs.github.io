class TamjaiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-container">
          <p>© 2026 TamJAI Labs. All rights reserved.</p>
          <p id="about">Contact: <a href="mailto:tamjailabs@gmail.com" style="color: #fff; font-weight: 600;">tamjailabs@gmail.com</a></p>
        </div>
      </footer>
    `;
  }
}
customElements.define('tamjai-footer', TamjaiFooter);
