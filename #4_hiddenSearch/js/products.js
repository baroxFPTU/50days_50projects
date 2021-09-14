
const getProducts = function (URL) {
    return new Promise(async function(resolve, reject) {
        try {
            const products = await fetch(`${URL}/Products`);
            resolve(products.json());
        } catch (error) {
            reject(error);
        }
    })
}

const findProductsFollowKeyword = function(products,keyword) {
    const filterProducts = products.filter(product => (product.name.toLowerCase()).includes(keyword));
    return filterProducts;
}

const renderProductResults = function (data) {
    return data.map(item => `<p>${item.name}</p>`);
}

export { getProducts, findProductsFollowKeyword, renderProductResults };