const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    res.send({
      massage: 'All products fetched successfully',
      products: [
        {
        _id: 1,
        name: 'product 1',
        price: 3445,
      },
      {
        _id: 2,
        name: 'product 2',
        price: 6666,
      }
    ],
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {getAllProducts};
