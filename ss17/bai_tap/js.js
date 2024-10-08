class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ProductManager {
    constructor() {
        this.productList = [];
    }

    addProduct(name, price, quantity) {
        const product = new Product(name, price, quantity);
        this.productList.push(product);
        this.showListProduct();
    }

    deleteProduct(index) {
        if (confirm("Are you sure you want to delete")) {
            this.productList.splice(index, 1);
            this.showListProduct();
        }
    }

    updateProduct(index, name, price, quantity) {
        this.productList[index].name = name;
        this.productList[index].price = price;
        this.productList[index].quantity = quantity;
        this.showListProduct();
    }

    showListProduct() {
        let text = "";
        this.productList.forEach((item, index) => {
            text += "<tr>";
            text += "<td>" + (index + 1) + "</td>";
            text += "<td>" + item.name + "</td>";
            text += "<td>" + item.price + "</td>";
            text += "<td>" + item.quantity + "</td>";
            text += "<td>";
            text += `<button onclick="productManager.deleteProduct(${index})" class="btn-delete">Delete</button>`;
            text += `<button onclick="productManager.updateProductPrompt(${index})" class="btn-update">Update</button>`;
            text += "</td>";
            text += "</tr>";
        });
        document.getElementById("list-product").innerHTML = text;
    }

    updateProductPrompt(index) {
        const product = this.productList[index];
        document.getElementById("name-product").value = product.name;
        document.getElementById("price-product").value = product.price;
        document.getElementById("quantity-product").value = product.quantity;
        document.getElementById("id-product").value = index;
    }

    editProduct() {
        const index = document.getElementById("id-product").value;
        const nameProduct = document.getElementById("name-product").value;
        const priceProduct = document.getElementById("price-product").value;
        const quantityProduct = document.getElementById("quantity-product").value;

        this.updateProduct(index, nameProduct, priceProduct, quantityProduct);
    }
}

// Khởi tạo đối tượng quản lý sản phẩm
const productManager = new ProductManager();

// Ví dụ thêm sản phẩm ban đầu
productManager.addProduct("Samsung Note 10", 23000, 2);
productManager.addProduct("Nokia S21", 15000, 3);
productManager.addProduct("Iphone 14 xs", 100000, 1);
productManager.addProduct("Xiaomi Note 10", 5000, 5);

// Hàm thêm sản phẩm từ input
function addProduct() {
    let nameProduct = document.getElementById("name-product").value;
    let priceProduct = document.getElementById("price-product").value;
    let quantityProduct = document.getElementById("quantity-product").value;

    if (nameProduct && priceProduct && quantityProduct) {
        productManager.addProduct(nameProduct, priceProduct, quantityProduct);
        document.getElementById("name-product").value = "";
        document.getElementById("price-product").value = "";
        document.getElementById("quantity-product").value = "";
    } else {
        alert("Please enter product name, price, and quantity");
    }
}