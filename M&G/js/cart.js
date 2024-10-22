const tablebody = document.getElementById("tablebody");
const totalprice = document.getElementById("totalprice");
const checkoutBtn = document.getElementById("checkoutBtn");

let cartContainer = JSON.parse(localStorage.getItem("Cart")) || [];

// Function to render the cart items in the table
function renderCart() {
    tablebody.innerHTML = ''; // Clear the current table body
    let sum = 0; // Initialize sum for total price

    // Loop through cartContainer and populate the table
    cartContainer.forEach((pro, index) => {
        const item__Name = pro.itemName;
        const item__price = parseInt(pro.itemprice);
        sum += item__price; // Add price to sum

        tablebody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${item__Name}</td>
                <td class="item-price">${item__price}</td>
                <td>1</td>
                <td><button class="btn btn-danger remove-item" data-index="${index}">Remove</button></td>
            </tr>
        `;
    });

    totalprice.innerHTML = sum; // Update total price
}

// Event listener for checkout button
checkoutBtn.addEventListener('click', () => {
    // Reload the page on checkout
    window.location.reload();
});

// Event delegation for removing items
tablebody.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index'); // Get index of item to remove
        cartContainer.splice(index, 1); // Remove item from cart
        localStorage.setItem("Cart", JSON.stringify(cartContainer)); // Update local storage
        renderCart(); // Re-render the cart
    }
});

// Initial rendering of the cart
renderCart();
