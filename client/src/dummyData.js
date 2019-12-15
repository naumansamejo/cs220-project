
export const user = {
    id: 1,
    name: "Nauman Samejo",
    password: "Something",
    email: "nomansamejo@gmail.com",
    address: "Ghazali 1"
};

export const products = [
    {
        id: 1,
        title: "Cotton Flannel Shirt",
        description: "Shirt in woven, patterned fabric with an easy-iron finish. Turn-down collar, classic button placket, and darts and yoke at back. Long sleeves and narrow cuffs with adjustable buttoning. Rounded hem. Slim Fit – narrow shoulders and tapered waist for a tailored silhouette.",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 14),
        type: "Shirt",
        fit: "Slim fit",
        category: "men"
    },
    {
        id: 2,
        title: "Slim Fit Stretch Shirt",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 12),
        type: "Shirt",
        category: "men"
    },
    
    {
        id: 3,
        title: "Regular Fit Oxford Shirt",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 12),
        type: "Shirt",
        category: "men"
    },
    {
        id: 4,
        title: "A Cool Shirt",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 12),
        type: "Shirt",
        category: "kids"
    },

    {
        id: 5,
        title: "A Shirt",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant",
        category: "men"
    },
    {
        id: 6,
        title: "Something Great",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant",
        category: "women"
    },
    



    // Copies:
    {
        id: 6,
        title: "Something Great",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant",
        category: "men"
    },
    {
        id: 6,
        title: "Foo Bar",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant",
        category: "men"
    },
    {
        id: 6,
        title: "Just A Joke",
        description: "Something something",
        price: 1299,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant",
        category: "men"
    }


];

export const product_images = [
    {
        product_id: 1,
        src: "1.jpg"
    },
    {
        product_id: 1,
        src: "3.jpg"
    },
    
    {
        product_id: 1,
        src: "2.jpg"
    },

    {
        product_id: 2,
        src: "5.jpg"
    },
    {
        product_id: 6,
        src: "8.jpg"
    },
    {
        product_id: 5,
        src: "7.jpg"
    },
    {
        product_id: 4,
        src: "8.jpg"
    },
    {
        product_id: 3,
        src: "9.jpg"
    }
];


export const cart = {
    user_id: 1,
    product_id: 5,
    quantity: 2
};


export const bank_account = {
    user_id: 1,
    bank: "HBL",
    account_number: "123456"
};

export const orders = [
    {
        product_id: 1,
        user_id: 1,
        status: "Pending Confirmation",
        completed_on: null,
        added_on: new Date()
    }
];