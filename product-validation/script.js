const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const displayName = document.getElementById("displayName");
const displayPrice = document.getElementById("displayPrice");
const displayQuantity = document.getElementById("displayQuantity");
const errorMessage = document.getElementById("errorMessage");

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const productname = productName.value.trim();
    const productprice = Number(price.value);
    const productquantity = Number(quantity.value);

    if (
        productname === "" ||
        price.value.trim() === "" ||
        quantity.value.trim() === ""
    ) {
        errorMessage.textContent = "Fill all fields";

    } else if (productprice <= 0 && productquantity <= 0) {
        errorMessage.textContent = "Product price and quantity must be greater than zero";

    } else if (productprice <= 0) {
        errorMessage.textContent = "Price must be greater than zero";

    } else if (productquantity <= 0) {
        errorMessage.textContent = "Quantity must be greater than zero";

    } else {
        errorMessage.textContent = "";

        displayName.textContent = productname;
        displayPrice.textContent = productprice;
        displayQuantity.textContent = productquantity;

        productForm.reset();
    }
});
