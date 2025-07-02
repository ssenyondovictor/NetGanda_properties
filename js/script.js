// Sample data
const prices = {
    "Rice": { price: 4000, category: "Groceries", name: "Rice" },
    "Cooking Oil": { price: 8500, category: "Groceries", name: "Cooking Oil" },
    "Petrol": { price: 5200, category: "Fuel", name: "Petrol" },
    "Smartphone": { price: 350000, category: "Electronics", name: "Smartphone" },
    "Shirt": { price: 25000, category: "Clothing", name: "Shirt" },
    "House Paint": { price: 30000, category: "Household", name: "House Paint" },
    "Panadol": { price: 500, category: "Pharmacy", name: "Panadol" },
    "Amoxicillin": { price: 2000, category: "Pharmacy", name: "Amoxicillin" },
    "Vitamin C": { price: 1000, category: "Pharmacy", name: "Vitamin C" },
    "Burger": { price: 15000, category: "Restaurants", name: "Burger" },
    "Pizza": { price: 25000, category: "Restaurants", name: "Pizza" },
    "Chicken and Chips": { price: 18000, category: "Restaurants", name: "Chicken and Chips" }
};

let currentCategory = "All";

function searchItems(category) {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    updatePrices(searchTerm, category);
}

function filterCategory(category) {
    currentCategory = category;
    updatePrices(document.getElementById("search-input").value.toLowerCase(), category);
}

function updatePrices(searchTerm = "", category) {
    const priceList = document.getElementById("price-list");
    priceList.innerHTML = "";

    let items = [];

    for (const itemKey in prices) {
        if (prices.hasOwnProperty(itemKey)) {
            const item = prices[itemKey];
            if (category === "All" || item.category === category) {
                if (searchTerm === "" || item.name.toLowerCase().includes(searchTerm)) {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${item.name} - UGX ${item.price}`;
                    priceList.appendChild(listItem);
                }
            }
        }
    }

    // Ensure that all items are shown by default
    if (searchTerm === "" && category === "All") {
        for (const itemKey in prices) {
            if (prices.hasOwnProperty(itemKey)) {
                const item = prices[itemKey];
                const listItem = document.createElement("li");
                listItem.textContent = `${item.name} - UGX ${item.price}`;
                priceList.appendChild(listItem);
            }
        }
    }
}

function reportPrice() {
    alert("Thank you for reporting a price!");
}

function searchCategories() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const categoryIcons = document.getElementById("category-icons");
    const categories = categoryIcons.getElementsByClassName("category");

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const categoryName = category.dataset.category.toLowerCase();

        if (categoryName.includes(searchTerm)) {
            category.style.display = "inline-block"; // Show matching categories
        } else {
            category.style.display = "none"; // Hide non-matching categories
        }
    }
}

// electronics.html, groceries.html, fuel.html, clothing.html, household.html
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var prm = prmarr[i].split("=");
        params[prm[0]] = prm[1];
    }
    return params;
}

var params = getSearchParameters();

//Only search if there is a search parameter
if(params["search"]!=null){
    searchItems(document.title.split(" - ")[0]);
    document.getElementById("search-input").value = params["search"];
} else {
    // Show all products when the page loads
    searchItems(document.title.split(" - ")[0]);
}

// Initial price update
updatePrices();

function startSearch() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();

    // Play sound effect
    const sound = new Audio("search-sound.mp3"); // Replace with your sound file
    sound.play();

    // Animate search icon
    const searchIcon = document.getElementById("search-icon");
    searchIcon.classList.add("searching");

    // Redirect to the appropriate category page based on the search term
    if (searchTerm.includes("electronics") || searchTerm.includes("laptop") || searchTerm.includes("smartphone")) {
        searchItems("Electronics");
    } else if (searchTerm.includes("groceries") || searchTerm.includes("rice") || searchTerm.includes("oil")) {
        searchItems("Groceries");
    } else if (searchTerm.includes("fuel") || searchTerm.includes("petrol") || searchTerm.includes("diesel")) {
        searchItems("Fuel");
    } else if (searchTerm.includes("clothing") || searchTerm.includes("shirt") || searchTerm.includes("trousers")) {
        searchItems("Clothing");
    } else if (searchTerm.includes("household") || searchTerm.includes("paint") || searchTerm.includes("broom")) {
        searchItems("Household");
    } else {
        // Witty error message
        alert("Oops! We couldn't find anything matching that. Maybe try searching for 'banana'?");
    }

    // Remove searching class after animation
    setTimeout(() => {
        searchIcon.classList.remove("searching");
    }, 2000);
}