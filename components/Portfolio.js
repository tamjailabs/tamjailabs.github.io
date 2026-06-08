class TamjaiPortfolio extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section-title-wrap">
        <h2 class="section-title">Our Portfolio</h2>
      </div>
      
      <section class="portfolio-grid">
        <!-- Card 1: TellDream -->
        <div class="grid-card">
          <div>
            <div class="card-header-icon">🌌</div>
            <h3 class="card-title">TellDream (เล่าฝัน)</h3>
            <p class="card-desc">AI-driven dream interpretation with interactive elements, local history, and localized Thai and English support.</p>
          </div>
          <a href="#apps" class="card-footer-link">View Details →</a>
        </div>

        <!-- Card 2: Upcoming Project Alpha (Extensible Placeholder) -->
        <div class="grid-card card-locked">
          <div>
            <div class="card-header-icon">🤖</div>
            <h3 class="card-title">Project Alpha</h3>
            <p class="card-desc">An interactive entertainment solution fueled by generative AI. Currently in prototyping stage.</p>
          </div>
          <span class="card-footer-link" style="color: var(--text-muted);">Coming Soon</span>
        </div>

        <!-- Card 3: Upcoming Project Beta (Extensible Placeholder) -->
        <div class="grid-card card-locked">
          <div>
            <div class="card-header-icon">⚡</div>
            <h3 class="card-title">Project Beta</h3>
            <p class="card-desc">A lightweight productivity toolkit built with hyper-optimized Jetpack Compose designs.</p>
          </div>
          <span class="card-footer-link" style="color: var(--text-muted);">Coming Soon</span>
        </div>
      </section>
    `;
  }
}
customElements.define('tamjai-portfolio', TamjaiPortfolio);
