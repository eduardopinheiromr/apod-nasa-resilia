class Conteudo {
  constructor(json) {
    this.date = json.date;
    this.title = json.title;
    this.url = json.url;
    this.explanation = json.explanation;
    this.copyright = json.copyright;
  }

  getConteudo() {
    return {
      date: this.date,
      title: this.title,
      url: this.url,
      explanation: this.explanation,
      copyright: this.copyright
    }
  }
}