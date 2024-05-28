export const environment = {
    production: false,
    apiUrl: 'https://dummyjson.com/',
    product: {
        productApiUrl: 'products',
        searchApiUrl: '/products/search?q=phone',
        // limitApiUrl: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price',
        limitApiUrl: 'products?limit=10&skip=10&select=title,price',
        // sortApiUrl: 'https://dummyjson.com/products?sortBy=title&order=asc',
        sortApiUrl: 'products?sortBy=title&order=asc',
        // categoryApiUrl: 'https://dummyjson.com/products/categories',
        categoryApiUrl: 'products/categories',
        // categoryListApiUrl: 'https://dummyjson.com/products/category-list',
        categoryListApiUrl: 'products/category-list',
        // productByCategoryApiUrl: 'https://dummyjson.com/products/category/smartphones',
        productByCategoryApiUrl: 'products/category/smartphones',

        headers: { 'Content-Type': 'application/json' },
    },
    secretkey: '6eF6jDChWBQxK21YFNFH7K0z8HhABsUH',
};
