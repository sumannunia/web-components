// web component
class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log("inside the web component");
    this._tooltipContainer;
  }
  // connect component
  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = `( ? )`;
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
    // this.textContent = "Hello World!";
  }
  _showTooltip() {
    this._tooltipText = this.getAttribute("text") || "No text set";
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.appendChild(this._tooltipContainer);
  }
  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

// register component
customElements.define("sm-tooltip", Tooltip);
