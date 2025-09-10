const categoriesList = document.getElementById('categories-list');
const plantGrid = document.getElementById('plant-grid');
const loadingSpinner = document.getElementById('loading-spinner');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total-price');
const plantModal = document.getElementById('plant-modal');
const modalDetails = document.getElementById('modal-details');
const modalCloseButton = document.querySelector('.close-button');

// The plants.json data AR KAJ 
const data = {
 "status": "success",
  "data": {
    "categories": [
      {
 "category_id": "fruit-trees",
 "category_name": "Fruit Trees"
      },
      {
 "category_id": "flowering-trees",
   "category_name": "Flowering Trees"
   },
      {
   "category_id": "shade-trees",
 "category_name": "Shade Trees"
 },
      {
"category_id": "medicinal-trees",
"category_name": "Medicinal Trees"
      },
      {
        "category_id": "timber-trees",
        "category_name": "Timber Trees"
      },
      {
    "category_id": "evergreen-trees",
  "category_name": "Evergreen Trees"
      },
      {
   "category_id": "ornamental-plants",
 "category_name": "Ornamental Plants"
      },
      { "category_id": "bamboo",
 "category_name": "Bamboo"
      },
      {
      "category_id": "climbers",
    "category_name": "Climbers"
      },
      {
     "category_id": "aquatic-plants",
    "category_name": "Aquatic Plants"
      }
    ],


    "plants": [
      {
        "id": "1",
   "name": "Mango Tree",
    "category": "Fruit Trees",
        "price": 1200,
    "description": "The national fruit of India, a large, juicy mango that is full of flavor. The tree is a fast grower and can produce fruit within 3-4 years.",
     "image": "https://i.ibb.co/L5T190C/mango.jpg",
    "details": "A fast-growing evergreen tree that can reach a height of 30-40 feet. It is a very popular shade tree and can provide great shade and fruit for years."
      },
      {
        "id": "2",
        "name": "Guava Tree",
    "category": "Fruit Trees",
     "price": 500,
       "description": "A fast-growing tropical tree that produce  Js delicious, juicy guavas during summer. Its dense green",
    "image": "https://i.ibb.co/y4L26mK/guava.jpg",
        "details": "The guava is a common tropical fruit cultivated and appreciated in many tropical and subtropical regions. It is a good source of vitamin C, and the tree is easy to maintain."
      },
      {
        "id": "3",
        "name": "Shade Tree",
        "category": "Shade Trees",
        "price": 500,
        "description": "A tall, sturdy tree with a wide canopy that provides excellent shade. Perfect for a backyard or park.",
        "image": "https://i.ibb.co/3sN6d1b/shade-tree.jpg",
        "details": "A large shade tree can reduce your cooling costs in the summer by providing natural shade to your home. It's a great way to cool your home and beautify your landscape."
      },
      {
        "id": "4",
        "name": "Flowering Tree",
   "category": "Flowering Trees",
        "price": 600,
     "description": "A beautiful tree that produces a stunning display of vibrant flowers in the spring.",
   "image": "https://i.ibb.co/q50QvL5/flowering.jpg",
     "details": "Flowering trees add color and fragrance to your yard. They can also attract birds and other wildlife to your landscape. There are many different types of flowering trees, so you can choose one that is perfect for your yard."
      },
      {
     "id": "5",
       "name": "Neem Tree",
   "category": "Medicinal Trees",
      "price": 800,
     "description": "A popular tree with medicinal properties. Its leaves, bark, and seeds are used to treat a variety of ailments.",
"image": "https://i.ibb.co/sK6V14h/neem.jpg",
        "details": "The neem tree is a fast-growing tree that is native to India. It is a very popular medicinal plant and is used to treat a variety of ailments. Its leaves, bark, and seeds are all used to make a variety of medicinal products."
      },
      {
        "id": "6",
        "name": "Teak Tree",
        "category": "Timber Trees",
        "price": 1500,
        "description": "A large, deciduous tree that is a source of high-quality timber. Its wood is used to make furniture, boats, and other products.",
        "image": "https://i.ibb.co/c1mXw7R/teak.jpg",
        "details": "The teak tree is a large, deciduous tree that is a source of high-quality timber. Its wood is used to make furniture, boats, and other products. It is a very popular timber tree and is grown in many different parts of the world."
      },
      {
        "id": "7",
      "name": "Pine Tree",
      "category": "Evergreen Trees",
      "price": 900,
"description": "A tall, evergreen tree with long, needle-like leaves. Its wood is used to make paper, furniture, and other products.",
       "image": "https://i.ibb.co/422X8qN/pine.jpg",
        "details": "The pine tree is a tall, evergreen tree with long, needle-like leaves. Its wood is used to make paper, furniture, and other products. It is a very popular evergreen tree and is grown in many different parts of the world."
      },
      {
        "id": "8",
        "name": "Orchid Plant",
     "category": "Ornamental Plants",
        "price": 400,
        "description": "A beautiful plant with stunning flowers. It is a popular choice for indoor decoration and can be grown in a variety of pots and containers.",
       "image": "https://i.ibb.co/gT7h41F/orchid.jpg",
        "details": "The orchid is a beautiful plant with stunning flowers. It is a popular choice for indoor decoration and can be grown in a variety of pots and containers. There are many different types of orchids, so you can choose one that is perfect for your home."
      },
      {
        "id": "9",
        "name": "Banyan Tree",
    "category": "Shade Trees",
      "price": 2000,
        "description": "A massive, spreading tree with aerial prop roots that can grow into new trunks. It's a symbol of longevity and provides immense shade.",
      "image": "https://i.ibb.co/Gdk9k4S/banyan.jpg",
        "details": "The Banyan is a species of fig that begins its life as an epiphyte, a plant that grows on another plant. Its seeds are dispersed by birds and germinate in the canopy of host trees. Over time, the Banyan tree's roots grow down to the ground and envelop the host tree, eventually strangling it."
     },
      {
     "id": "10",
        "name": "Bamboo",
        "category": "Bamboo",
      "price": 300,
        "description": "A fast-growing, evergreen perennial plant. It is a popular choice for creating privacy screens, windbreaks, and garden borders.",
    "image": "https://i.ibb.co/5c9Q9F7/bamboo.jpg",
        "details": "Bamboo is a fast-growing, evergreen perennial plant. It is a popular choice for creating privacy screens, windbreaks, and garden borders. Bamboo is also a very versatile plant and can be used to make a variety of products, including furniture, flooring, and paper."
      }
    ]
  }
};










let allPlants = data.data.plants;
let cart = [];

const toggleSpinner = (show) => {
    loadingSpinner.style.display = show ? 'flex' : 'none';
};

const fetchData = () => {
    toggleSpinner(true);
    try {
        const categories = data.data.categories;
        displayCategories(categories);
        
        displayPlants(allPlants);

    } catch (error) {
        console.error('Error fetching local data:', error);
        plantGrid.innerHTML = '<p>Failed to load trees. Please try again later.</p>';
    } finally {
        toggleSpinner(false);
    }
};



const getCategoryNameById = (categoryId) => {
    const category = data.data.categories.find(cat => cat.category_id === categoryId);
    return category ? category.category_name : '';
};


const displayCategories = (categoriesToDisplay) => {
    categoriesList.innerHTML = '';
    

    const allTreesLi = document.createElement('li');
    allTreesLi.textContent = "All Trees";
    allTreesLi.dataset.id = 'all';
    allTreesLi.classList.add('active'); 
    allTreesLi.addEventListener('click', () => {
        handleCategoryClick(allTreesLi, 'all');
    });
    categoriesList.appendChild(allTreesLi);

    
    categoriesToDisplay.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category.category_name;
        li.dataset.id = category.category_id;
        li.addEventListener('click', () => {
            handleCategoryClick(li, category.category_id);
        });
        categoriesList.appendChild(li);
    });
};

const handleCategoryClick = (clickedElement, categoryId) => {
  
    document.querySelectorAll('#categories-list li').forEach(li => {
        li.classList.remove('active');
    });
   
    clickedElement.classList.add('active');

    toggleSpinner(true);
    try {
        let plantsToDisplay = [];
        if (categoryId === 'all') {
            plantsToDisplay = allPlants;
        } else {
        
            const categoryName = getCategoryNameById(categoryId);
            plantsToDisplay = allPlants.filter(plant => plant.category.trim() === categoryName.trim());
        }
        displayPlants(plantsToDisplay);
    } catch (error) {
        console.error('Error filtering plants by category:', error);
        plantGrid.innerHTML = '<p>Failed to load plants for this category. Please try another one.</p>';
    } finally {
        toggleSpinner(false);
    }
};


const displayPlants = (plantsToDisplay) => {
    plantGrid.innerHTML = '';
    if (!plantsToDisplay || plantsToDisplay.length === 0) {
        plantGrid.innerHTML = '<p>No plants found in this category.</p>';
        return;
    }

    plantsToDisplay.forEach(plant => {
        const card = document.createElement('div');
        card.classList.add('plant-card');
        card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}" class="plant-card-image">
            <div class="plant-card-content">
      <h3 class="plant-name-link" data-id="${plant.id}">${plant.name}</h3>
                <p>${plant.description}</p>
         <div class="plant-card-footer">
            <span class="plant-category">${plant.category}</span>
        <span class="plant-price">৳${plant.price}</span>
        </div>
    <button class="add-to-cart-btn" data-id="${plant.id}">Add to Cart</button>
            </div>
        `;
        plantGrid.appendChild(card);
    });

    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const plantId = e.target.dataset.id;
            addToCart(plantId);
        });
    });






    document.querySelectorAll('.plant-name-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const plantId = e.target.dataset.id;
            showPlantDetails(plantId);
        });
    });
};












const addToCart = (plantId) => {
    const plantToAdd = allPlants.find(plant => plant.id === plantId);
    if (plantToAdd && !cart.find(item => item.id === plantId)) {
        cart.push(plantToAdd);
        updateCartDisplay();
    }
};

const removeFromCart = (plantId) => {
    cart = cart.filter(item => item.id !== plantId);
    updateCartDisplay();
};

const updateCartDisplay = () => {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <span>${item.name}</span>
          <button data-id="${item.id}">&times;</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    cartTotalElement.textContent = `৳${totalPrice}`;

    document.querySelectorAll('.cart-item button').forEach(button => {
        button.addEventListener('click', (e) => {
        const plantId = e.target.dataset.id;
        removeFromCart(plantId);
    });
    });
};























const showPlantDetails = (plantId) => {
    toggleSpinner(true);
    try {

        const plant = allPlants.find(plant => plant.id === plantId);

        if (plant) {
            modalDetails.innerHTML = `
                <h3>${plant.name}</h3>
                <img src="${plant.image}" alt="${plant.name}" style="width: 100%; height: auto; border-radius: 8px;">
                <p>${plant.details}</p>
                <p><strong>Category:</strong> ${plant.category}</p>
                <p><strong>Price:</strong> ৳${plant.price}</p>
            `;
            plantModal.style.display = 'block';
        }
    } catch (error) {
        console.error('Error fetching plant details:', error);
    } finally {
        toggleSpinner(false);
    }
};

modalCloseButton.onclick = () => {
    plantModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === plantModal) {
        plantModal.style.display = 'none';
    }
};


document.addEventListener('DOMContentLoaded', fetchData);