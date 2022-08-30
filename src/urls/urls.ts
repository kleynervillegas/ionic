export const URLS = {
    getOne: 'http://localhost:8000/auth/products/:id',
    created: 'http://localhost:8000/publication/create',
    getAllProducts: 'http://localhost:8000/publication/getall/publications',
    getDetailsProduct: 'http://localhost:8000/publication/getone/publications/:id',
    deleteProduct: 'http://localhost:8000/publication/disabled/publications/:id',
    updateProduct: 'http://localhost:8000/auth/products/edit',
};
export const urlsAuthentication = {
    validateAuthentication: 'http://localhost:8000/login',
    createUser: 'http://localhost:8000/user/create',
};

export const urlsCars = {
    createCars: 'http://localhost:8000/car/create',
    gteCarsUser: 'http://localhost:8000/car/getall/car/User',
};
export const urlsNotify = {
    createNotify: 'http://localhost:8000/auth/notify',
    getNotifyUser: 'http://localhost:8000/notify/getall/notify/User',
};


// export const URLS = {
//     getOne: 'https://4650-190-202-2-197.ngrok.io/products/:id',
//     created: 'https://4650-190-202-2-197.ngrok.io/products',
//     getAllProducts: 'https://4650-190-202-2-197.ngrok.io/products',
//     getDetailsProduct: 'https://4650-190-202-2-197.ngrok.io/products/detailsproduct/:id',
// };
