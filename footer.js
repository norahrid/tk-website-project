class navFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="col-layout">
        <p>© Terri Karpish Coaching 2025</p>
        <a href="https://ca.linkedin.com/in/terri-karpish-58902072" class="social-icon si-rounded si-small si-linkedin">
          <i class="fa-brands fa-linkedin fa-stack-2x fa-inverse"></i>
        </a>
      </footer>`;
  }
}

customElements.define('nav-footer', navFooter);



