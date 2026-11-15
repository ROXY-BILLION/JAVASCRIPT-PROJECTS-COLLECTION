const productForm = document.getElementById("productForm");
const jsonInput = document.getElementById("jsonInput");
const errorMessage = document.getElementById("errorMessage");
const productResult = document.getElementById("productResult");

productForm.addEventListener("submit", function (event) {

    event.preventDefault();

    try {

        // Convert the JSON input to JavaScript
        const JSONData = jsonInput.value.trim();

        if (JSONData === "") {
            throw new Error("empty");
        }

        const productValue = JSON.parse(JSONData);

        // Display the JavaScript object
        productResult.innerHTML = "";
        productResult.classList.remove("error");
        errorMessage.textContent = "";

        const product = document.createElement("div");
        product.classList.add("product");

        const productNameElement = document.createElement("h1");
        productNameElement.textContent = productValue.name;

        const productPriceElement = document.createElement("h2");
        productPriceElement.textContent = productValue.price;

        const productQuantityElement = document.createElement("h3");
        productQuantityElement.textContent = productValue.quantity;

        product.appendChild(productNameElement);
        product.appendChild(productPriceElement);
        product.appendChild(productQuantityElement);

        productResult.appendChild(product);

        jsonInput.value = "";

    } catch (error) {

        errorMessage.textContent = "Invalid JSON. Please check your data.";
        productResult.classList.add("error");

    }

});
