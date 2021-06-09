var ItemsNomenclature = {
    "Item1": {
        name: "Item1",
        cost: 102.5
    },
    "Item2": {
        name: "Item2",
        cost: 1.55
    },
    "Item3": {
        name: "Item3",
        cost: 24.54
    }

}

class ShopingCart {
    constructor() {
        this.cart = [];
        this.cost = 0;
        document.getElementById("ex2_answer").innerHTML = this.cost.toFixed(2);
    }
    AddToCart(item) {
        this.cart.push(item);
        this.RefreshCost();
        document.getElementById("cart").innerHTML += item.name + ": " + item.cost + " $<br>";
    }
    RefreshCost() {
        this.cost = 0;
        this.cart.forEach(element => {
            this.cost += element.cost;
        });
        document.getElementById("ex2_answer").innerHTML = this.cost.toFixed(2);
    }
    ClearCart() {
        this.cart = [];
        this.RefreshCost();
        document.getElementById("cart").innerHTML = "Товары в корзине:<br>";
    }
}

var Cart = new ShopingCart();