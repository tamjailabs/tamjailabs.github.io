class TamjaiHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <span class="badge"><span class="glow-dot"></span>Active Development</span>
        <h1 class="hero-title">Crafting Magical Mobile Experiences</h1>
        <p class="hero-desc">We develop high-fidelity native mobile applications and intelligent cloud backend solutions that blend gorgeous UI designs with seamless AI capabilities.</p>
        <div class="hero-ctas">
          <a href="#apps" class="btn btn-primary">Explore Our Apps</a>
          <a href="#legal" class="btn btn-secondary">Legal Policies</a>
        </div>
      </section>
    `;
  }
}
customElements.define('tamjai-hero', TamjaiHero);
