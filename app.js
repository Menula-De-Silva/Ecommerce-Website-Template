 // Global Variables
 let products = [];
 let cart = [];
 let wishlist = [];
 let currentPage = 1;
 const ITEMS_PER_PAGE = 6;

 // Helper Functions
 function showNotification(message) {
     const notification = document.getElementById("notification");
     notification.textContent = message;
     notification.style.display = "block";
     setTimeout(() => notification.style.display = "none", 3000);
 }

 function renderProducts(productList) {
     const rows = productList.map(p => `
         <div class="col">
             <div class="card shadow-sm">
                 <img src="${p.image}" class="card-img-top" alt="${p.title}">
                 <div class="card-body">
                     <h5>${p.title}</h5>
                     <p>${p.description}</p>
                     <small>${p.price}$</small>
                     <button class="btn btn-primary mt-2 add-to-cart" data-id="${p.id}">Add to Cart</button>
                     <button class="btn btn-outline-secondary mt-2 add-to-wishlist" data-id="${p.id}">Add to Wishlist</button>
                 </div>
             </div>
         </div>
     `).join('');
     document.getElementById('row').innerHTML = rows;
 }

 // Fetch Data
 fetch("https://fakestoreapi.com/products")
     .then(res => res.json())
     .then(data => {
         products = data;
         renderProducts(products);
         showNotification("Products loaded successfully!");
     });

 // Event Listeners
 document.getElementById("scroll-to-top").addEventListener("click", () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
 });

 // Other Logic (e.g., Cart, Wishlist) would go here