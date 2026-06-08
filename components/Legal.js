class TamjaiLegal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="legal-section" id="legal">
        <div class="legal-container">
          <h2 class="section-title">Legal & Compliance</h2>
          <p style="color: var(--text-muted); margin-top: 12px; max-width: 600px;">We believe in absolute user privacy, clear terms of service, and direct options for user data protection.</p>
          
          <div class="legal-grid">
            <!-- Privacy Policy Card -->
            <div class="legal-card">
              <div>
                <h3>Privacy Policy</h3>
                <p>นโยบายความเป็นส่วนตัว</p>
                <p style="font-size: 0.8rem;">Understand what data we collect, why we collect it, and how your information is protected.</p>
              </div>
              <a href="privacy-policy.html">Read Policy →</a>
            </div>

            <!-- Terms of Use Card -->
            <div class="legal-card">
              <div>
                <h3>Terms of Use</h3>
                <p>ข้อกำหนดการใช้งาน</p>
                <p style="font-size: 0.8rem;">Review the guidelines, rules, and agreements required when interacting with our applications.</p>
              </div>
              <a href="terms-of-use.html">Read Terms →</a>
            </div>

            <!-- Data Deletion Card -->
            <div class="legal-card">
              <div>
                <h3>Data Deletion</h3>
                <p>การลบข้อมูลบัญชี</p>
                <p style="font-size: 0.8rem;">Learn how you can request complete deletion of your account and personal history from our servers.</p>
              </div>
              <a href="delete-data.html">Request Deletion →</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('tamjai-legal', TamjaiLegal);
