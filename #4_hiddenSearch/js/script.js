
import { API_URL, btnSearch, searchElm, searchInput, searchResultElm} from './constants.js';
import {getProducts, findProductsFollowKeyword, renderProductResults} from './products.js';

window.addEventListener('click', e => {
    const btnSearch = e.target.closest('.btn-search');
    const inputElm = e.target.closest('.search-input');

    if (!btnSearch && !inputElm) {
        searchElm.classList.remove('active');
        resetSearchResults();
    }
});

(async () => {
        let products = null;

        btnSearch.addEventListener('click',async () => {
            searchElm.classList.add('active');
            if (!products) {
                products = await getProducts(API_URL);
            }
            searchInput.focus();
        });

        searchInput.addEventListener('input', async (e)=> {
            const keyword = e.target.value.trim().toLowerCase();
            if (!products || keyword == '') {
                resetSearchResults();
                return;
            }

            const filteredProducts = findProductsFollowKeyword(products,keyword);

            if (filteredProducts.length > 0) {
                searchElm.classList.add('has-result');
                searchResultElm.innerHTML = renderProductResults(filteredProducts);
            } else {
                searchResultElm.innerHTML = '<p>Nothing like that.</p>'
            }

        });
})();

function resetSearchResults() {
    searchElm.classList.remove('has-result');
    searchResultElm.innerHTML = ''
}