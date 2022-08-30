export const URLS = {
    getOne: 'http://localhost:8000/auth/products/:id',
    created: 'http://localhost:8000/auth/products',
    getAllProducts: 'http://localhost:8000/publication/getall/publications',
    getDetailsProduct: 'http://localhost:8000/products/detailsproduct/:id',
    deleteProduct: 'http://localhost:8000/auth/products/:id',
    updateProduct: 'http://localhost:8000/auth/products/edit',
};
export const urlsAuthentication = {
    validateAuthentication: 'http://localhost:8000/login',
    createUser: 'http://localhost:8000/user/create',
};

export const urlsCars = {
    createCars: 'http://localhost:8000/auth/car',
   gteCarsUser: 'http://localhost:8000/auth/car/getCarUser',
};
export const urlsNotify = {
    createNotify: 'http://localhost:8000/auth/notify',
    getNotifyUser: 'http://localhost:8000/auth/notify/getNotifyUser/:id',
};


// export const URLS = {
//     getOne: 'https://4650-190-202-2-197.ngrok.io/products/:id',
//     created: 'https://4650-190-202-2-197.ngrok.io/products',
//     getAllProducts: 'https://4650-190-202-2-197.ngrok.io/products',
//     getDetailsProduct: 'https://4650-190-202-2-197.ngrok.io/products/detailsproduct/:id',
// };
