let user, products, cart, product_images;

user = {
    id: 1,
    name: "Nauman Samejo",
    password: "Something",
    email: "nomansamejo@gmail.com",
    address: "Ghazali 1"
};

products = [
    {
        id: 1,
        title: "A Cool Shirt",
        description: "Something something",
        price: 10,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 14),
        type: "Shirt"
    },
    {
        id: 2,
        title: "A Hot Shirt",
        description: "Something something",
        price: 10,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 12),
        type: "Shirt"
    },
    {
        id: 3,
        title: "A Pant",
        description: "Something something",
        price: 10,  
        size: "XL",
        rating: 4,
        date_added: new Date(2019, 2, 4),
        type: "Pant"
    }

];

product_images = [
    {
        product_id: 1,
        src: "../images/img.jpg"
    },
    {
        product_id: 1,
        src: "../images/img.jpg"
    },
    {
        product_id: 1,
        src: "../images/img.jpg"
    },
    {
        product_id: 2,
        src: "../images/img.jpg"
    },
    {
        product_id: 2,
        src: "../images/img.jpg"
    },
    {
        product_id: 2,
        src: "../images/img.jpg"
    },
    {
        product_id: 3,
        src: "../images/img.jpg"
    }
];


cart = {
    user_id: 1,
    product_id: 5,
    quantity: 2
};


bank_account = {
    user_id: 1,
    bank: "HBL",
    account_number: "123456"
};

orders = [
    {
        product_id: 1,
        user_id: 1,
        status: "Pending Confirmation",
        completed_on: null,
        added_on: new Date()
    }
];