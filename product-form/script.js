const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const price = document.getElementById("price");
const category = document.getElementById("category");
const quantity = document.getElementById("quantity");
const description = document.getElementById("description");

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newProduct = {
        newproductName: productName.value.trim(),
        newprice: price.value.trim(),
        newCategory:category.value.trim(),
        newquantity:quantity.value.trim(),
        newdescription:description.value.trim(),
    }
    console.log(newProduct);
    result.textContent = "Product Added successfully"

    productForm.reset();
})