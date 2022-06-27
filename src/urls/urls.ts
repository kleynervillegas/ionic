export const URLS = {
    getOne: 'http://localhost:8000/api/auth/products/:id',
    created: 'http://localhost:8000/api/auth/products',
    getAllProducts: 'http://localhost:8000/api/auth/products',
    getDetailsProduct: 'http://localhost:8000/api/products/detailsproduct/:id',
    deleteProduct: 'http://localhost:8000/api/auth/products/:id',
    updateProduct: 'http://localhost:8000/api/auth/products/edit',
};
export const urlsAuthentication = {
    validateAuthentication: 'http://localhost:8000/api/login',
    createUser: 'http://localhost:8000/api/registre',
};

export const urlsCars = {
    createCars: 'http://localhost:8000/api/auth/car',
   gteCarsUser: 'http://localhost:8000/api/auth/car/getCarUser',
};
export const urlsNotify = {
    createNotify: 'http://localhost:8000/api/auth/notify',
    getNotifyUser: 'http://localhost:8000/api/auth/notify/getNotifyUser/:id',
};


// export const URLS = {
//     getOne: 'https://4650-190-202-2-197.ngrok.io/api/products/:id',
//     created: 'https://4650-190-202-2-197.ngrok.io/api/products',
//     getAllProducts: 'https://4650-190-202-2-197.ngrok.io/api/products',
//     getDetailsProduct: 'https://4650-190-202-2-197.ngrok.io/api/products/detailsproduct/:id',
// };
