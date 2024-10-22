const favoritesTableBody = document.getElementById("favoritesTableBody");

// Initialize favorites array from local storage
let favorites = JSON.parse(localStorage.getItem("Favorites")) || [];

// Function to populate the favorites table
function populateFavorites() {
    favoritesTableBody.innerHTML = ""; // Clear existing items

    if (favorites.length === 0) {
        favoritesTableBody.innerHTML = `<tr><td colspan="4">No favorites added.</td></tr>`;
        return;
    }

    favorites.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${item.itemName}</td>
            <td class="item-price">${item.itemprice}</td>
            <td><button class="btn btn-danger" onclick="removeFromFavorites(${index})">Remove</button></td>
        `;

        favoritesTableBody.appendChild(row);
    });
}

// Function to remove item from favorites
function removeFromFavorites(index) {
    favorites.splice(index, 1); // Remove item from favorites array
    localStorage.setItem("Favorites", JSON.stringify(favorites)); // Update local storage
    populateFavorites(); // Refresh table
}

// Populate the favorites table on page load
populateFavorites();
