class navHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="topnav">
        <a id="logo" href="index.html">Terri Karpish Coaching</a>

        <div class="topnav-right">
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>`;
  }
}

customElements.define('nav-header', navHeader);



