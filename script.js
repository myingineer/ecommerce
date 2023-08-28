// Getting the number at the top of the cart
const numOnCart = document.querySelector('.num');

// Getting the add btn
const addBtn = document.querySelector('.addbtn');

// Getting the subtract btn
const subtractBtn = document.querySelector('.minusbtn');

// Getting the add to cart btn
const addToCart = document.querySelector('.add-to-cart');

// Getting the number increase inside the cart
const insideCartNumber = document.querySelector('.number');

// Getting the increament display in between the add and minus btn
const increaseDisplay = document.querySelector('.increament');

// Getting the total amount inside the cart
const totalAmount = document.querySelector('.total-amount');

// Getting the delete button inside the cart
const deleteBtn = document.querySelector('.delete');

// Getting the content inside the cart
const cartContent = document.querySelector('.content-in-cart');

// Your cart is empty text
const empty = document.querySelector('.empty');

// Getting the main image on the landing page display
const mainImage = document.querySelector('.main-image-display');

// Getting all the images for the main page display
const allImages = document.querySelectorAll('.small-image');

// Getting the cart icon
const cartBtn = document.querySelector('.dropdown-icon');

// Cart container button
const cart = document.querySelector('.dropdown-content');

// Checkout button inside the cart
const checkOutBtn = document.querySelector('.checkout');

// Light box container
const lightbox = document.querySelector('.lightbox-container');

// Close button inside the light box
const closeBtn = document.querySelector('.close-btn');

// Big display for the light box
const bigLightbox = document.querySelector('.big-lightbox');

// Small images under the light box
const lightboxThumbnails = document.querySelectorAll('.small-thumbnails');

// Getting the left and right button inside the lightbox
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

// Getting the open menu button
const openMenuButton = document.querySelector('.ham');

// Getting the close menu button
const closeMenuButton = document.querySelector('.close-menu');

// open Menu for phone
openMenuButton.addEventListener('click', () => {
    openMenu();
});

// Close menu for phone
closeMenuButton.addEventListener('click', () => {
    closeMenu();
});


// Function to open the menu
function openMenu() {
    let menu = document.querySelector('.mobile-menu');
    menu.classList.add('display');
}

// Function to close the menu
function closeMenu() {
    let menu = document.querySelector('.mobile-menu');
    menu.classList.remove('display');
}



// Making the right button on the image work
rightButton.addEventListener('click', () => {
    if (bigLightbox.innerHTML === `<img src="./images/image-product-1.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-2.jpg" alt="" class="big-lightbox-image">`;
    } else if (bigLightbox.innerHTML === `<img src="./images/image-product-2.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-3.jpg" alt="" class="big-lightbox-image">`;
    } else if (bigLightbox.innerHTML === `<img src="./images/image-product-3.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-4.jpg" alt="" class="big-lightbox-image">`;
    } else {
        bigLightbox.innerHTML = `<img src="./images/image-product-1.jpg" alt="" class="big-lightbox-image">`;
    };
});


// Making the left button on the image work
leftButton.addEventListener('click', () => {
    if (bigLightbox.innerHTML === `<img src="./images/image-product-1.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-4.jpg" alt="" class="big-lightbox-image">`;
    } else if (bigLightbox.innerHTML === `<img src="./images/image-product-2.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-1.jpg" alt="" class="big-lightbox-image">`;
    } else if (bigLightbox.innerHTML === `<img src="./images/image-product-3.jpg" alt="" class="big-lightbox-image">`) {
        bigLightbox.innerHTML = `<img src="./images/image-product-2.jpg" alt="" class="big-lightbox-image">`;
    } else {
        bigLightbox.innerHTML = `<img src="./images/image-product-3.jpg" alt="" class="big-lightbox-image">`;
    };
});

// Making the lightbox show
mainImage.addEventListener('click', () => {
    lightbox.classList.add('show');
});

// Removing the light box
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
});


// Displaying the big image accordingly
lightboxThumbnails.forEach(image => {
    image.addEventListener('click', () => {
        if (image.id === 'un') {
            bigLightbox.innerHTML = `<img src="./images/image-product-1.jpg" alt="" class="big-lightbox-image">`;
        } else if (image.id === 'deux') {
            bigLightbox.innerHTML = `<img src="./images/image-product-2.jpg" alt="" class="big-lightbox-image">`;
        } else if (image.id === 'trois') {
            bigLightbox.innerHTML = `<img src="./images/image-product-3.jpg" alt="" class="big-lightbox-image">`;
        } else if (image.id === 'quarte') {
            bigLightbox.innerHTML = `<img src="./images/image-product-4.jpg" alt="" class="big-lightbox-image">`;
        };
    });
});

// Assigning Global Variables
let number = 0;
let total = 0;

// Resuseable function
function finishedOrder() {
    number = 0;
    increaseDisplay.innerText = 0;
    numOnCart.style.display = 'none';
    empty.style.display = 'block';
    cartContent.style.display = 'none';
}

// Looping throught the images to display them accordingly
allImages.forEach(image => {
    image.addEventListener('click', () => {
        if (image.id === 'one') {
            mainImage.innerHTML = `<img src="./images/image-product-1.jpg" alt="" class="main-image" id="one">`
        } else if (image.id === 'two') {
            mainImage.innerHTML = `<img src="./images/image-product-2.jpg" alt="" class="main-image" id="two">`
        } else if (image.id === 'three') {
            mainImage.innerHTML = `<img src="./images/image-product-3.jpg" alt="" class="main-image" id="three">`
        } else if (image.id === 'four') {
            mainImage.innerHTML = `<img src="./images/image-product-4.jpg" alt="" class="main-image" id="four">`
        }
    });
});


// Making the cart button work
cartBtn.addEventListener('click', () => {
    if (cart.style.display === '') {
        cart.style.display = 'block';
        document.body.addEventListener('click', (e) => {
            if (!cartBtn.contains(e.target) && e.target !== checkOutBtn && e.target !== deleteBtn) {
                cart.style.display = '';
            };
        });
    } else {
        cart.style.display = '';
    };  
});


// Making sure the cart is empty from scratch
if (number === 0) {
    empty.style.display = 'block';
};

// Add button
addBtn.addEventListener('click', () => {
    number++;
    increaseDisplay.innerText = number;
    if (number > 0) {
        cartContent.style.display = 'block';
        empty.style.display = 'none';
    };
});


// Checkout button
checkOutBtn.addEventListener('click', () => {
    finishedOrder();
    empty.innerText = 'Your Order Has Been Placed Successfully ❤️';
    setTimeout(() => {
        empty.innerText = 'Your Cart is Empty';
    }, 2000);
});

// Subtract button
subtractBtn.addEventListener('click', () => {
    number--;
    if (number < 0) {
        number = 0;
    } else if (number === 0) {
        empty.style.display = 'block';
        cartContent.style.display = 'none';
        numOnCart.style.display = 'none';
    }
    increaseDisplay.innerText = number;
});

// Addt to Cart Button
addToCart.addEventListener('click', () => {
    if (number !== 0) {
        numOnCart.style.display = 'block';
        numOnCart.innerText = number;
        insideCartNumber.innerText = number;
        totalAmount.innerText = number * 125;
    };
});


// Delete button inside the cart
deleteBtn.addEventListener('click', () => {
    finishedOrder();
});

