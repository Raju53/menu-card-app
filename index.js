const categories = {
    "Soups": [
        { name: "Tomato Soup", description: "Creamy tomato soup", veg: true, price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OQyQvW2SrF3xSJ_D_piW5Vs_LfDGB5Ca7W07lSpAruLUbAEQO4cNfktwl1MFO2oJ22A&usqp=CAU", rating: 4 },
        { name: "Chicken Manchow Soup", description: "Hearty chicken soup", veg: false, price: 350, image: "https://res.cloudinary.com/dhsjpmqz9/f_auto,q_auto,w_700,c_fill,g_auto/Chicken_Manchow_Soup_ke3x89", rating: 5 },
        // ... more soup items
    ],
    "Starters": [
        { name: "Paneer Tikka", description: "Grilled paneer", veg: true, price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjU3AT9r8228is-t5JHuLCk2InG0PID_mpRw&s", rating: 4 },
        { name: "Chicken Tikka", description: "Grilled chicken", veg: false, price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy2lA_TWFUVHV9A_EF33FiLpR7sVhbNzOtA&s", rating: 5 },
        { name: "Egg Manchurian", description: "Indo-Chinese egg dish", veg: false, price: 280, image: "https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg", rating: 4 },
        // ... more starter items
    ],
    // ... other categories
    "Biryanis": [
        { name: "Chicken Biryani", description: "Dum chicken", veg: false, price: 200, image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg", rating: 5 },
        { name: "Mutton Biryani", description: "Dum mutton", veg: false, price: 300, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg", rating: 4 },
        { name: "Panner Tikka Biryani", description: "Grilled panner", veg: true, price: 280, image: "https://shreedevimelange.com/wp-content/uploads/2023/12/Paneer-Tikka-Biryani-600x600.webp", rating: 4 },
        // ... more biryani items
    ],
    "Desserts": [
      { name: "Gulab Jamun", description: "Sweet fried dough balls", veg: true, price: 180, image: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800", rating: 4 },
      { name: "Double Ka Meeta", description: "Fried bread slices soaked in hot milk with spices", veg: true, price: 200, image: "https://4.bp.blogspot.com/-NVm43QsZGY4/Tk0za2pTx7I/AAAAAAAABqw/A1mG_a5lt2c/s1600/IMG_6196.JPG", rating: 5 },
      { name: "Caramel Custard", description: "Creamy caramel dessert", veg: false, price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdSnBQvMbeu944xwXOPr2LgR-8TbM49sy2A&s", rating: 4 },
      // ... more dessert items
  ],
  "Ice Creams": [
    { name: "Vanilla Ice Cream", description: "Classic vanilla ice cream", veg: true, price: 150, image: "https://nutritionrefined.com/wp-content/uploads/2018/07/vegan-vanilla-ice-cream-featured.jpg", rating: 5 },
    { name: "Strawberry Ice Cream", description: "Refreshing strawberry ice cream", veg: true, price: 160, image: "https://i0.wp.com/thegastronomicbong.com/wp-content/uploads/2014/06/strawberry-icecream1-1-of-1-16-682x1024.jpg?resize=800%2C1200", rating: 4 },
    { name: "Chocolate Brownie Ice Cream", description: "Decadent chocolate fudge ice cream", veg: false, price: 220, image: "https://emilylaurae.com/wp-content/uploads/2022/08/chocolate-brownie-ice-cream-11.jpg", rating: 4 },
    // ... more ice cream items
  ],
  "Beverages": [
    { name: "Masala Chai", description: "Spiced tea", veg: true, price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJGAqStEizWHId9GTcUsOouDXGegBIR5HHw&s", rating: 5 },
    { name: "Coffee", description: "Freshly brewed coffee", veg: true, price: 100, image: "https://cdn.pixabay.com/photo/2022/11/01/05/18/coffee-7561288_640.jpg", rating: 4 },
    { name: "Mango Lassi", description: "Yogurt-based mango drink", veg: true, price: 150, image: "https://www.flavourstreat.com/wp-content/uploads/2018/06/mango-lassi.jpg", rating: 5 },
    // ... more beverage items
  ],
};

const categoryList = document.getElementById('category-list');
const menuItems = document.getElementById('menu-items');

// Function to generate star rating
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "<span class='star'>★</span>" : "<span class='star'>☆</span>";
    }
    return stars;
}

function displayMenuItems(category, filter = 'all') {  // Default filter to 'all'
    menuItems.innerHTML = ""; // Clear previous items

    const items = categories[category];
    const filteredItems = items.filter(item => {
        if (filter === 'all') return true;
        return item.veg === (filter === 'veg');
    });

    if (filteredItems.length === 0) {
      menuItems.innerHTML = "<p>No items available in this category.</p>";
      return;
    }

    filteredItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemContent = document.createElement('div');
        itemContent.classList.add('item-content');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemName = document.createElement('h3');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = item.description;

        const itemRating = document.createElement('div');
        itemRating.classList.add('item-rating');
        itemRating.innerHTML = generateStars(item.rating);

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemRating);

        const itemImageContainer = document.createElement('div'); // Container for image and price
        itemImageContainer.style.display = 'flex'; // Use flexbox for alignment
        itemImageContainer.style.flexDirection = 'column'; // Align items vertically

        const itemImage = document.createElement('img');
        itemImage.classList.add('item-image');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImageContainer.appendChild(itemImage);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `₹${item.price}`;
        itemImageContainer.appendChild(itemPrice);

        itemContent.appendChild(itemDetails);
        itemContent.appendChild(itemImageContainer);
        itemContainer.appendChild(itemContent);



        menuItems.appendChild(itemContainer);
    });


    // Add Veg/Non-Veg filter buttons
    const filterDiv = document.createElement('div');
    filterDiv.classList.add('veg-nonveg-filter');
    filterDiv.innerHTML = `
        <button data-filter="veg">Veg</button>
        <button data-filter="nonveg">Non-Veg</button>
        <button data-filter="all">All</button>
    `;
    menuItems.insertBefore(filterDiv, menuItems.firstChild); // Add filter at the top

    // Store references to the buttons for easier access
    const vegButton = filterDiv.querySelector('[data-filter="veg"]');
    const nonvegButton = filterDiv.querySelector('[data-filter="nonveg"]');
    const allButton = filterDiv.querySelector('[data-filter="all"]');

    // Function to update button styles
    function updateButtonStyles(activeFilter) {
        vegButton.classList.remove('active-veg');
        nonvegButton.classList.remove('active-nonveg');
        allButton.classList.remove('active-all');

        if (activeFilter === 'veg') {
            vegButton.classList.add('active-veg');
        } else if (activeFilter === 'nonveg') {
            nonvegButton.classList.add('active-nonveg');
        } else {
          allButton.classList.add('active-all');
        }
    }

    // Initialize button styles (show all by default)
    updateButtonStyles(filter);

    filterDiv.addEventListener('click', (event) => {
        const selectedFilter = event.target.dataset.filter;
        displayMenuItems(category, selectedFilter); // Redisplay with the selected filter
    });
}


// Populate category list
for (const category in categories) {
    const categoryItem = document.createElement('li');
    categoryItem.textContent = category;
    categoryItem.addEventListener('click', () => displayMenuItems(category));
    categoryList.appendChild(categoryItem);
}


// Display the first category by default
const firstCategory = Object.keys(categories)[0];
displayMenuItems(firstCategory);