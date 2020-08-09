//to club different branch.json and sum up sold orders
function clubProducts(products) {
    let result = [];
    products.map((item) => {
        let index = result.findIndex((x) => x.name === item.name);
        if (index !== -1) {
            result[index].sold = result[index].sold + item.sold;
        } else {
            result.push(item);
        }
    });

    return result;
}

// filter logic
const getFilteredProducts = (filterStr,products) => {
    let filteredProducts = products.filter((item) => {
        if (typeof item.name === "string") {
            return item.name
                .toLowerCase()
                .includes(filterStr.toLowerCase());
        }
    });
    return filteredProducts;
};

// to add up total sales
function getTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.sold * item.unitPrice;
    }
    return total;
}

// fetch
async function getProducts(url) {
    let json = {};
    try {
        let response = await fetch(url);
        if (response.ok) {
            json = await response.json();
        }
    }
    catch (error) {
        console.log(error);
    }
    
    return json;
}

// NumberFormat
const formatNumber = (number) =>
    new Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(number);

export { clubProducts, formatNumber, getProducts, getTotal, getFilteredProducts };
