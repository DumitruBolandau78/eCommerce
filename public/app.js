'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const filterTitle = document.querySelectorAll('.explore-wrapper .category .category-item');
    const filterProducts = document.querySelectorAll('.explore-wrapper .product-cards .card');

    filterTitle.forEach(category => {
        category.addEventListener('click', () => {
            filterTitle.forEach(item => {
                item.classList.remove('active');
            });

            category.classList.add('active');
            
            if(category.classList.contains('jackets')){
                getFilteredProducts('jackets');
            }

            if(category.classList.contains('hoodies')){
                getFilteredProducts('hoodies');
            }

            if(category.classList.contains('t-shirts')){
                getFilteredProducts('t-shirts');
            }

            if(category.classList.contains('all-products')){
                filterProducts.forEach(prod => {
                    prod.style.display = 'block';
                });
            }

        });
    });

    function getFilteredProducts(category){
        filterProducts.forEach(prod => {
            if(prod.classList.contains(category)){
                prod.style.display = 'block';
            } else {
                prod.style.display = 'none';
            }
        });
    }
});