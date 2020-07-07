class Translate {
  constructor(text) {
    this.q = text;
    this.target = "en";
  }

  getBody() {
    return {
      q: this.q,
      target: this.target
    }
  }
}