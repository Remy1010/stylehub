const products = [
  {
    id: 1,
    name: "eleven",
    price: 30000,
    category: "men",
    image: "images/download (15).jfif"
  },
  {
    id: 2,
    name: "Men's Black Formal Suit",
    price: 100000,
    category: "men",
    image: "images/Amazon Men's Black Suit _ Links.jfif"
  },
  {
    id: 3,
    name: "Women's Office Blazer Suit",
    price: 29000,
    category: "women",
    image: "images/CAROLINE Design Collection Women's Elegant Stylish Fashion Office Blazer Jacket & Pants Suit Set - Black Suit Set _ M.jfif"
  },
  {
    id: 4,
    name: "Luxury Skate Shoes",
    price: 20000,
    category: "shoes",
    image: "images/Chaussures de Skate Homme 2026 Nouveau Design de Luxe Étudiant Semelle Épaisse Mode Confortable Chaussures de Sport Loisir Marche pour Homme cm marron.jfif"
  },
  {
    id: 5,
    name: "Women's Tracksuit Set",
    price: 55000,
    category: "women",
    image: "images/Comfortable Women's Tracksuit - Lyra.jfif"
  },
  {
    id: 6,
    name: "Kids Summer Dress with Bag",
    price: 25000,
    category: "kids",
    image: "images/Elladie kids Young Girl' Solid Color Collar Puff Sleeve Cardigan Summer Cute Dress With Mini Bag  Back To School  School Clothes Girls Dress With Pearls Dark Green Dress For Kids _ SHEIN USA.jfif"
  },
  {
    id: 7,
    name: "Off-Shoulder Maxi Dress",
    price: 32000,
    category: "women",
    image: "images/Off-Shoulder Long Sleeve Bodycon Maxi Dress - White _ 2XL.jfif"
  },
  {
    id: 8,
    name: "New Balance 530 Sneakers",
    price: 29000,
    category: "shoes",
    image: "images/Step into Retro Style with New Balance 530 Sneakers.jfif"
  },
  {
    id: 9,
    name: "Teen Girls Button Dress",
    price: 26000,
    category: "kids",
    image: "images/Teen Girls' Solid Color Half Placket Button Closure Dress With Waist Tie.jfif"
  },
  {
    id: 10,
    name: "Men's Casual Outfit",
    price: 60000,
    category: "men",
    image: "images/casual outfit ✨️.jfif"
  },
  {
    id: 11,
    name: "Classic Denim Jeans",
    price: 19000,
    category: "men",
    image: "images/denim jeans.jpg"
  },
  {
    id: 12,
    name: "Fashion Dress Collection",
    price: 39000,
    category: "women",
    image: "images/download (1).jfif"
  },
  {
    id: 13,
    name: "Kids Summer Wear",
    price: 37000,
    category: "kids",
    image: "images/download (2).jfif"
  },
  {
    id: 14,
    name: "Elegant Evening Wear",
    price: 323000,
    category: "women",
    image: "images/download (3).jfif"
  },
  {
    id: 15,
    name: "Men's Classic Style",
    price: 42000,
    category: "men",
    image: "images/download (4).jfif"
  },
  {
    id: 16,
    name: "Kids Party Dress",
    price: 32000,
    category: "kids",
    image: "images/download (5).jfif"
  },
  {
    id: 17,
    name: "Premium Women's Fashion",
    price: 32000,
    category: "women",
    image: "images/download (6).jfif"
  },
  {
    id: 18,
    name: "Stylish Men's Collection",
    price: 33000,
    category: "men",
    image: "images/download (7).jfif"
  },
  {
    id: 19,
    name: "Trendy Women's Outfit",
    price: 22000,
    category: "women",
    image: "images/download (8).jfif"
  },
  {
    id: 20,
    name: "Fashion Look 10",
    price: 29000,
    category: "men",
    image: "images/photo10.jpg"
  },
  {
    id: 21,
    name: "Fashion Look 4",
    price: 18000,
    category: "women",
    image: "images/photo4.jpg"
  },
  {
    id: 22,
    name: "Kids Green Dress with Bag",
    price: 30000,
    category: "kids",
    image: "images/Elladie kids Young Girl' Solid Color Collar Puff Sleeve Cardigan Summer Cute Dress With Mini Bag  Back To School  School Clothes Girls Dress With Pearls Dark Green Dress For Kids _ SHEIN USA (1).jfif"
  },
  {
    id: 23,
    name: "Men's Cross Print Hooded Sweatshirt",
    price: 18000,
    category: "men",
    image: "images/Men Cross Print Zip Up Drawstring Thermal Hooded Sweatshirt.jfif"
  },
  {
    id: 24,
    name: "Men's Business Leather Loafers",
    price: 42000,
    category: "shoes",
    image: "images/Men's Slip-On Loafers, Business Casual Leather Shoes, British Style Oxfords, Moccasin Boat Shoes, Lacquered Leather.jfif"
  },
  {
    id: 25,
    name: "Minimal Black Loafers",
    price: 44000,
    category: "shoes",
    image: "images/Minimal Black Loafers for Men (Clean Everyday Style) (1).jfif"
  },
  {
    id: 26,
    name: "Elegant Women's Collection",
    price: 40000,
    category: "women",
    image: "images/download (9).jfif"
  },
  {
    id: 27,
    name: "Premium Fashion Style",
    price: 28000,
    category: "women",
    image: "images/download (10).jfif"
  },
  {
    id: 28,
    name: "Modern Casual Wear",
    price: 43000,
    category: "men",
    image: "images/download (11).jfif"
  },
  {
    id: 29,
    name: "Stylish Urban Outfit",
    price: 41000,
    category: "women",
    image: "images/download (12).jfif"
  },
  {
    id: 30,
    name: "Kids Fashion Dress",
    price: 20000,
    category: "kids",
    image: "images/download (13).jfif"
  },
  {
    id: 31,
    name: "Trendy Summer Collection",
    price: 18000,
    category: "women",
    image: "images/download (14).jfif"
  }
];

const productGrid = document.getElementById("productGrid");
const detailName = document.getElementById("detailName");
const detailPrice = document.getElementById("detailPrice");
const detailImage = document.getElementById("detailImage");
const cartName = document.getElementById("cartName");
const cartImage = document.getElementById("cartImage");
const cartUnitPrice = document.getElementById("cartUnitPrice");
const cartTotal = document.getElementById("cartTotal");
const qtyValue = document.getElementById("qtyValue");
const searchInput = document.getElementById("searchInput");
const detailAddToCart = document.getElementById("detailAddToCart");
const categoryButtons = document.querySelectorAll(".category-card");
const sizeButtons = document.querySelectorAll(".size-btn");

let selectedProduct = products[0];
let selectedCategory = "all";
let qty = 1;

function currency(value) {
  return `${value.toLocaleString()} RWF`;
}

function renderProducts() {
  const query = searchInput?.value?.trim().toLowerCase() || "";
  const filtered = products.filter((product) => {
    // Show all products when "all" is selected, otherwise filter by category
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    // If there's a search query, check if product name matches
    const queryMatch = query === "" || product.name.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
  
  // Debug: console.log('Filtered products:', filtered.length, filtered);

  if (!productGrid) return;

  productGrid.innerHTML = filtered
    .map((product) => {
      const randomRating = (4 + Math.random()).toFixed(1);
      const randomReviews = Math.floor(Math.random() * 200) + 10;
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x400?text=${encodeURIComponent(product.name)}'">
            <div class="product-overlay">
              <div class="product-actions">
                <button class="product-action-btn like-btn" data-id="${product.id}" title="Save for later">
                  🤍
                </button>
                <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick view">
                  👁️
                </button>
                <button class="product-action-btn share-btn" data-id="${product.id}" title="Share">
                  📤
                </button>
              </div>
              <button class="quick-add-btn" data-id="${product.id}">⚡ Quick Add</button>
            </div>
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${currency(product.price)}</p>
            <div class="product-meta">
              <div class="product-rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span>(${randomReviews})</span>
              </div>
              <span class="product-category-tag">${product.category}</span>
            </div>
            <button class="btn btn-dark" data-id="${product.id}">Add to Cart</button>
          </div>
        </article>
      `;
    })
    .join("");

  // Add event listeners for new interactive elements
  addProductCardListeners();
  
  if (filtered.length === 0) {
    productGrid.innerHTML = '<p style="text-align: center; padding: 40px;">No products found.</p>';
  }
}

function syncDetailAndCart(product) {
  selectedProduct = product;
  if (detailName) detailName.textContent = product.name;
  if (detailPrice) detailPrice.textContent = currency(product.price);
  if (detailImage) {
    detailImage.src = product.image;
    detailImage.onerror = function() { this.style.background = '#ffcccc'; this.alt = 'Image failed to load'; };
  }
  if (cartName) cartName.textContent = product.name;
  if (cartUnitPrice) cartUnitPrice.textContent = `${currency(product.price)} each`;
  if (cartImage) {
    cartImage.src = product.image;
    cartImage.onerror = function() { this.style.background = '#ffcccc'; };
  }
  updateTotal();
}

function updateTotal() {
  if (cartTotal) cartTotal.textContent = currency(selectedProduct.price * qty);
  if (qtyValue) qtyValue.textContent = qty;
}

productGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (!button) {
    return;
  }
  const id = Number(button.dataset.id);
  const product = products.find((item) => item.id === id);
  if (product) {
    // Add to cart directly from product grid
    addToCart(product, 1);
    // Also update the detail view
    qty = 1;
    syncDetailAndCart(product);
  }
});

detailAddToCart?.addEventListener("click", () => {
  // Actually add the selected product to cart
  addToCart(selectedProduct, qty);
  // Reset quantity for next add
  qty = 1;
  updateTotal();
});

document.getElementById("increaseQty")?.addEventListener("click", () => {
  qty += 1;
  updateTotal();
});

document.getElementById("decreaseQty")?.addEventListener("click", () => {
  qty = Math.max(1, qty - 1);
  updateTotal();
});

searchInput?.addEventListener("input", renderProducts);

categoryButtons?.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderProducts();
  });
});

sizeButtons?.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});


function showToast(message, icon = '🛒') {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;
  
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, var(--gradient-1, #667eea), var(--gradient-2, #764ba2));
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(150%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  

  setTimeout(() => {
    toast.style.transform = 'translateX(150%)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}


let cart = JSON.parse(localStorage.getItem('fashionCart')) || [];

function saveCart() {
  localStorage.setItem('fashionCart', JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
  // Check if user is logged in
  const userEmail = localStorage.getItem('userEmail');
  if (!userEmail) {
    showToast('Please login first to add items to cart!', '🔒');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }
  
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCart();
  showToast(`Added ${product.name} to cart!`, '✓');
  updateCartCount();
}

function updateCartCount() {
  const cartBtn = document.querySelector('[aria-label="Cart"]');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBtn) {
    cartBtn.innerHTML = totalItems > 0 ? `🛒<span class="cart-badge">${totalItems}</span>` : '🛒';
  }
}


// Cart Modal Functions
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartGrandTotal = document.getElementById('cartGrandTotal');
const closeCart = document.getElementById('closeCart');

function openCart() {
  if (cartModal) {
    cartModal.classList.add('active');
    renderCartItems();
  }
}

function closeCartModal() {
  if (cartModal) {
    cartModal.classList.remove('active');
  }
}

function renderCartItems() {
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
        <p style="font-size: 14px; margin-top: 8px;">Add some products!</p>
      </div>
    `;
    cartGrandTotal.textContent = '0 RWF';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.style.background='#ffcccc'">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${currency(item.price)}</p>
        <div class="cart-item-qty">
          <button onclick="updateCartItemQty(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItemQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeCartItem(${item.id})">Remove</button>
    </div>
  `).join('');
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartGrandTotal.textContent = currency(total);
}

function updateCartItemQty(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeCartItem(id);
    } else {
      saveCart();
      renderCartItems();
      updateCartCount();
    }
  }
}

function removeCartItem(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCartItems();
  updateCartCount();
  showToast('Item removed from cart', '🗑️');
}

// Close cart when clicking outside
cartModal?.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    closeCartModal();
  }
});

closeCart?.addEventListener('click', closeCartModal);

// Check if user is logged in
function checkAuthState() {
  const userEmail = localStorage.getItem('userEmail');
  const navActions = document.querySelector('.nav-actions');
  
  if (userEmail && navActions) {
    // User is logged in - show welcome and logout
    navActions.innerHTML = `
      <span class="user-welcome">👋 ${userEmail.split('@')[0]}</span>
      <button class="btn btn-outline" id="logoutBtn">Logout</button>
      <button class="icon-btn" aria-label="Cart">🛒</button>
    `;
    
    // Add logout handler
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userData');
      showToast('Logged out successfully!', '👋');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
  
  // Add cart click handler
  document.querySelector('[aria-label="Cart"]')?.addEventListener('click', openCart);
}

document.addEventListener('DOMContentLoaded', () => {
  checkAuthState();
  renderProducts();
  // Only sync detail view if detail elements exist on the page
  if (detailName && detailPrice && detailImage) {
    syncDetailAndCart(selectedProduct);
  }
  updateCartCount();
  
  
  const style = document.createElement('style');
  style.textContent = `
    .cart-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: var(--gradient-2, #764ba2);
      color: white;
      font-size: 11px;
      font-weight: 700;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-btn {
      position: relative;
    }
  `;
  document.head.appendChild(style);
});


// Checkout button handler
document.querySelector('.checkout-btn')?.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast('Your cart is empty!', '⚠');
  } else {
    showToast('Checkout feature coming soon!', 'ℹ');
  }
});

// Shop Now button handler
document.querySelector('.hero .btn-dark')?.addEventListener('click', () => {
  document.getElementById('productGrid')?.scrollIntoView({ behavior: 'smooth' });
});
