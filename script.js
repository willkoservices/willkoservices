let cart = [];

function addToCart(serviceName, price) {
    cart.push({
        name: serviceName,
        price: price
    });
    updateCartDisplay();
}

// function updateCartDisplay() {
//     const cartItems = document.getElementById('cart-items');
//     const cartCount = document.getElementById('cart-count');
//     const cartTotal = document.getElementById('cart-total');
    
//     cartCount.textContent = cart.length;
    
//     let total = 0;
//     cartItems.innerHTML = '';
    
//     cart.forEach((item, index) => {
//         total += item.price;
//         cartItems.innerHTML += `
//             <div class="cart-item">
//                 <span>${item.name}</span>
//                 <span>QR ${item.price}</span>
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//     });
    
//     cartTotal.textContent = `Total: QR ${total.toFixed(2)}`;
// }

// function removeFromCart(index) {
//     cart.splice(index, 1);
//     updateCartDisplay();
// }

function redirectToWhatsApp(message) {
    // Add country code to phone number (Qatar +974)
    const phoneNumber = '97433667970';
    const encodedMessage = encodeURIComponent(message);
    
    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Create the appropriate WhatsApp URL
    const url = isMobile 
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(url, '_blank');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! We will contact you shortly.');
    cart = [];
    updateCartDisplay();
}