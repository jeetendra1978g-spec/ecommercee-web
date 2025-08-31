// Enhanced Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card');
        const product = productCard.querySelector('h3').textContent;
        const price = productCard.querySelector('.price').textContent;
        const image = productCard.querySelector('img').src;

        // Update cart count with animation
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;

        // Add animation to cart icon
        const cartIcon = document.querySelector('.fa-shopping-cart');
        cartIcon.classList.add('cart-animate');
        setTimeout(() => {
            cartIcon.classList.remove('cart-animate');
        }, 500);

        // Show confirmation with product image
        showNotification(product, price, image);
    });
});
// Add to cart functionality for new products
document.addEventListener('DOMContentLoaded', function() {
  // This will work for all add-to-cart buttons, including new ones
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const price = productCard.querySelector('.price').textContent;
      const image = productCard.querySelector('img').src;
      
      // Update cart count
      const cartCount = document.querySelector('.cart-count');
      cartCount.textContent = parseInt(cartCount.textContent) + 1;
      
      // Add animation to cart icon
      const cartIcon = document.querySelector('.fa-shopping-cart');
      cartIcon.classList.add('cart-animate');
      setTimeout(() => {
        cartIcon.classList.remove('cart-animate');
      }, 500);
      
      // Show confirmation with product image
      showNotification(productName, price, image);
    });
  });
  
  // Notification function
  function showNotification(product, price, image) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    notification.innerHTML = `
      <div class="notification-content">
        <img src="${image}" alt="${product}">
        <div>
          <p><strong>${product}</strong> added to cart!</p>
          <p>${price}</p>
        </div>
        <button class="close-notification">&times;</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Close notification on button click
    notification.querySelector('.close-notification').addEventListener('click', () => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    });
    
    // Auto-close after 4 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.remove('show');
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 4000);
  }
});
//// Fixed Dropdown Hover Mechanism

    // Fixed dropdown behavior - using CSS only for hover, no JS needed
    // The dropdown will now work purely with CSS hover states

    // Mobile menu toggle for top header
    const createMobileTopHeader = function () {
        if (window.innerWidth <= 768) {
            const topHeaderToggle = document.createElement('div');
            topHeaderToggle.className = 'top-header-toggle';
            topHeaderToggle.innerHTML = '<i class="fas fa-ellipsis-h"></i>';

            const topHeaderLeft = document.querySelector('.top-header-left');
            if (topHeaderLeft && !document.querySelector('.top-header-toggle')) {
                const topHeader = document.querySelector('.top-header');
                topHeader.appendChild(topHeaderToggle);

                topHeaderToggle.addEventListener('click', function () {
                    topHeaderLeft.classList.toggle('show-mobile');
                });
            }
        } else {
            const topHeaderToggle = document.querySelector('.top-header-toggle');
            if (topHeaderToggle) {
                topHeaderToggle.remove();
            }
        }
    };

    // Initial check and add resize listener
    createMobileTopHeader();
    window.addEventListener('resize', createMobileTopHeader);

// Enhanced notification function with product image
function showNotification(product, price, image) {
    const notification = document.createElement('div');
    notification.className = 'notification';

    notification.innerHTML = `
        <div class="notification-content">
            <img src="${image}" alt="${product}">
            <div>
                <p><strong>${product}</strong> added to cart!</p>
                <p>${price}</p>
            </div>
            <button class="close-notification">&times;</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Close notification on button click
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });

    // Auto-close after 4 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 4000);
}

// Add to favorites functionality
document.querySelectorAll('.product-card').forEach(card => {
    const heartIcon = document.createElement('div');
    heartIcon.className = 'favorite-icon';
    heartIcon.innerHTML = '<i class="far fa-heart"></i>';
    card.querySelector('.product-img').appendChild(heartIcon);

    heartIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        icon.classList.toggle('heart-animate');

        // Remove animation class after animation completes
        setTimeout(() => {
            icon.classList.remove('heart-animate');
        }, 800);
    });
});
// / Simple JavaScript to demonstrate search functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    // Add focus effect
    searchInput.addEventListener('focus', function () {
        searchBar.style.boxShadow = '0 8px 20px rgba(37, 117, 252, 0.25)';
    });

    searchInput.addEventListener('blur', function () {
        searchBar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });

    // Search functionality
    searchButton.addEventListener('click', function () {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
});
// Enhanced Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Update cart count
    function updateCartCount(count) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = count;

            // Add animation when cart count updates
            if (count > 0) {
                cartCount.classList.add('cart-pulse');
                setTimeout(() => {
                    cartCount.classList.remove('cart-pulse');
                }, 500);
            }
        }
    }

    // Initialize cart count
    updateCartCount(3);

    // Add items to cart (example function)
    function addToCart(productId, productName, price, imageUrl) {
        // This would typically interact with your cart system
        const currentCount = parseInt(document.querySelector('.cart-count').textContent);
        updateCartCount(currentCount + 1);

        // Show added to cart notification
        showCartNotification(productName);
    }

    // Show cart notification
    function showCartNotification(productName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>Added "${productName}" to cart</span>
    `;

        // Add styles for notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.background = 'rgba(106, 17, 203, 0.9)';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.gap = '10px';
        notification.style.zIndex = '10000';
        notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 10);

        // Animate out after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateY(100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Example of adding to cart (you would call this from your product buttons)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productImage = productCard.querySelector('img').src;

            // This would be a unique ID in a real implementation
            const productId = Math.random().toString(36).substr(2, 9);

            addToCart(productId, productName, productPrice, productImage);
        });
    });
});
// Add this to your existing JavaScript for logo interaction
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  
  if (logo) {
    // Add click event to logo
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = '/'; // Navigate to homepage
    });
    
    // Add subtle animation on page load
    setTimeout(() => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(-10px)';
      logo.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, 100);
    }, 500);
  }
});
// Add this to your existing JavaScript for logo interaction
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  
  if (logo) {
    // Add click event to logo
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = '/'; // Navigate to homepage
    });
    
    // Add subtle animation on page load
    setTimeout(() => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(-10px)';
      logo.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, 100);
    }, 500);
  }
  
  // Make sure header layout stays consistent
  function maintainHeaderLayout() {
    const headerContent = document.querySelector('.header-content');
    const searchContainer = document.querySelector('.search-container');
    
    if (window.innerWidth > 900) {
      // Desktop layout
      if (headerContent) {
        headerContent.style.flexDirection = 'row';
        headerContent.style.justifyContent = 'space-between';
      }
      if (searchContainer) {
        searchContainer.style.margin = '0 40px';
        searchContainer.style.maxWidth = '700px';
      }
    } else {
      // Mobile layout
      if (headerContent) {
        headerContent.style.flexDirection = 'column';
      }
      if (searchContainer) {
        searchContainer.style.margin = '15px 0';
        searchContainer.style.maxWidth = '100%';
      }
    }
  }
  
  // Check layout on load and resize
  maintainHeaderLayout();
  window.addEventListener('resize', maintainHeaderLayout);
});
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Make sure header layout stays consistent
  function maintainHeaderLayout() {
    const headerContent = document.querySelector('.header-content');
    const searchContainer = document.querySelector('.search-container');
    const logo = document.querySelector('.logo');
    const userActions = document.querySelector('.user-actions');
    
    if (window.innerWidth > 900) {
      // Desktop layout
      if (headerContent) {
        headerContent.style.flexDirection = 'row';
        headerContent.style.justifyContent = 'space-between';
      }
      if (searchContainer) {
        searchContainer.style.margin = '0 40px';
        searchContainer.style.maxWidth = '700px';
        searchContainer.style.flex = '1';
      }
      if (logo) {
        logo.style.minWidth = '180px';
      }
      if (userActions) {
        userActions.style.flexShrink = '0';
      }
    } else {
      // Mobile layout
      if (headerContent) {
        headerContent.style.flexDirection = 'column';
      }
      if (searchContainer) {
        searchContainer.style.margin = '15px 0';
        searchContainer.style.maxWidth = '100%';
      }
      if (logo) {
        logo.style.minWidth = 'auto';
      }
    }
  }
  
  // Check layout on load and resize
  maintainHeaderLayout();
  window.addEventListener('resize', maintainHeaderLayout);
});
// Add this to your existing JavaScript for logo interaction
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  
  if (logo) {
    // Add click event to logo
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = '/'; // Navigate to homepage
    });
    
    // Add subtle animation on page load
    setTimeout(() => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(-10px)';
      logo.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, 100);
    }, 500);
  }
});
