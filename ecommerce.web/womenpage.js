document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;
            
            // Show confirmation
            alert(`Added to cart: ${productName} - ${price}`);
            
            // Here you would typically update cart count
            // For a standalone page, you might want to implement cart storage
        });
    });
    
    // Add any women's section specific JavaScript here
});
// Add to cart functionality for all sections
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const price = productCard.querySelector('.price').textContent;
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        
        // Add animation
        cartCount.classList.add('pulse');
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 500);
        
        // Show confirmation
        alert(`Added to cart: ${productName} - ${price}`);
    });
});