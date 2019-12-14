// const mongoose = require('mongoose');
// const Product = mongoose.model('products');

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    

    products = [
        { 
            name: "Somethiiii", 
            description: "ssss"
        }
    ];





    return res.status(200).send(products);
  });

  app.post(`/api/product`, async (req, res) => {
    // let product = await Product.create(req.body);
    
    product = req.body;

    return res.status(201).send({
      error: false,
      product
    })

  })

  app.put(`/api/product/:id`, async (req, res) => {
    // const {id} = req.params;

    // let product = await Product.findByIdAndUpdate(id, req.body);

    product = {"abc":"a"};

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    // const {id} = req.params;

    // let product = await Product.findByIdAndDelete(id);

    product = {"del":"d"};

    return res.status(202).send({
      error: false,
      product
    })

  })
  
}