const Customers = require('../models/Customer');

exports.customers = async (req, res) => {
  try {
    // Retrieve all items from the database
    const customers = await Customers.find({});
    // Respond with the array of items
    res.status(200).json(customers);
  } catch (error) {
    // Handle errors during retrieval
    res.status(500).json({ message: 'Error retrieving items' });
  }
};







