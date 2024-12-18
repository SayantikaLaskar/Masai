export default function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.innerHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="wishlist.html">Wishlist</a></li>
      <li><a href="cart.html">Cart</a></li>
    </ul>
  `;
  return navbar;
}
