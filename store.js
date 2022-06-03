class store {

    #products = [new product("productA", 1, "A", 1, 1), new product("productB", 2, "B", 2, 2), new product("productC", 3, "C", 3, 3)];
    #listElement;

    constructor(element) {
        this.#listElement = element;
        this.#productList(this.#products, this.#listElement);
    }

    getProducts() {
        return this.#products;
    }
    getListElement() {
        return this.#listElement;
    }

    setProducts(products) {
        this.#products = products;
    }
    setListElement(listElement) {
        this.#listElement = listElement;
    }

    #productList(list, element) {
        //אם כבר מופיעה רשימה הוא מוחק אותה
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        list.forEach(e => {
            var newProductDiv = document.createElement("div");
            element.appendChild(newProductDiv);
            var name = document.createElement("h4");
            var txt = document.createTextNode(e.getName());
            name.appendChild(txt);
            newProductDiv.appendChild(name);

            txt = document.createTextNode("Price: " + e.getPrice());
            var prop = document.createElement("p");
            prop.appendChild(txt);
            newProductDiv.appendChild(prop);


            txt = document.createTextNode("Product code: " + e.getId());
            prop = document.createElement("p");
            prop.appendChild(txt);
            newProductDiv.appendChild(prop);

            txt = document.createTextNode("Category: " + e.getCategory());
            prop = document.createElement("p");
            prop.appendChild(txt);
            newProductDiv.appendChild(prop);

            txt = document.createTextNode("Units in Stock: " + e.getQty());
            prop = document.createElement("p");
            prop.appendChild(txt);
            newProductDiv.appendChild(prop);
        });

    }
    addItem(product) {
        this.#products.push(product);
        this.#productList(this.#products, this.#listElement);
    }

    removeItem(id) {
        this.#products = this.#products.filter(p => p.getId() != id);
        this.#productList(this.#products, this.#listElement);
    }

    updateQTY(id, qty) {
        this.#products.map(p => p.getId() == id ? p.setQty(qty) : p);
        this.#productList(this.#products, this.#listElement);
    }

    updatePrice(id, price) {
        this.#products.map(p => p.getId() == id ? p.setPrice(price) : p);
        this.#productList(this.#products, this.#listElement);
    }

    filterByName(name) {
        var newArr = this.#products.filter(p => p.getName() == name);
        this.#productList(newArr, this.#listElement);
    }

    filterByPriceRange(num1, num2) {
        var newArr = this.#products.filter(p => p.getPrice() >= num1 && p.getPrice() <= num2);
        this.#productList(newArr, this.#listElement);
    }

    filterByCategory(category) {
        var newArr = this.#products.filter(p => p.getCategory() == category);
        this.#productList(newArr, this.#listElement);
    }

    filterByQty() {
        var newArr = this.#products.filter(p => p.getQty() <= 5);
        this.#productList(newArr, this.#listElement);
    }
}
