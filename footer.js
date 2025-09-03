class navFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="col-layout">
        <p>© Terri Karpish Coaching 2025</p>
      </footer>`;
  }
}

customElements.define('nav-footer', navFooter);



