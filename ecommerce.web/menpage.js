document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
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
    
    // Fix dropdown staying open when moving cursor to it
    const accountDropdown = document.querySelector('.account-dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (accountDropdown && dropdownContent) {
        let dropdownHover = false;
        
        accountDropdown.addEventListener('mouseenter', function() {
            dropdownContent.style.display = 'block';
            setTimeout(() => {
                dropdownContent.style.opacity = '1';
                dropdownContent.style.visibility = 'visible';
                dropdownContent.style.transform = 'translateY(0)';
            }, 10);
        });
        
        accountDropdown.addEventListener('mouseleave', function() {
            setTimeout(() => {
                if (!dropdownHover) {
                    dropdownContent.style.opacity = '0';
                    dropdownContent.style.visibility = 'hidden';
                    dropdownContent.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        dropdownContent.style.display = 'none';
                    }, 300);
                }
            }, 100);
        });
        
        dropdownContent.addEventListener('mouseenter', function() {
            dropdownHover = true;
        });
        
        dropdownContent.addEventListener('mouseleave', function() {
            dropdownHover = false;
            dropdownContent.style.opacity = '0';
            dropdownContent.style.visibility = 'hidden';
            dropdownContent.style.transform = 'translateY(10px)';
            setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 300);
        });
    }
});