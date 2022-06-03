class product {

  #name;
  #id;
  #category;
  #price;
  #qty;

  constructor(name, id, category, price, qty) {
    this.#name = name;
    this.#id = id;
    this.#category = category;
    this.#price = price;
    this.#qty = qty;
  }

  getName() {
    return this.#name;
  }
  getId() {
    return this.#id;
  }
  getCategory() {
    return this.#category;
  }
  getPrice() {
    return this.#price;
  }
  getQty() {
    return this.#qty;
  }

  setName(name) {
    this.#name = name;
  }
  setId(id) {
    this.#id = id;
  }
  setCategory(category) {
    this.#category = category;
  }
  setPrice(price) {
    this.#price = price;
  }
  setQty(qty) {
    this.#qty = qty;
  }

  addQty() {
    this.#qty++;
  }
  reduceQty() {
    this.#qty--;
  }

}
