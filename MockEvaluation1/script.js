document.getElementById('load-products').addEventListener('click', async () =>{
    const res=await fetch('https://fakestoreapi.com/products');
    const products=await res.json();
    const grid=document.getElementById('products-grid');

    grid.innerHTML='';
    products.forEach((product) =>{
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
            <p>Rating: ${product.rating.rate}</p>
            <button class="wishlist-btn">Wishlist Product</button>
            `;

            card.querySelector('.wishlist-btn').addEventListener('click', () => {
                let wishlist=JSON.parse(localStorage.getItem('wishlistedProducts')) || [];
                wishlist.push(product)
                localStorage.setItem('wishlistedProducts', JSON.stringify(wishlist));
            });

            grid.appendChild(card);
         })
 });