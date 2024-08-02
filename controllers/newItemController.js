const NewItems = require('../models/NewItem');

exports.newItems = async (req, res) => {
  try {
    // Retrieve all items from the database
    const newItems = await NewItems.find({});
    // Respond with the array of items
    res.status(200).json(newItems);
  } catch (error) {
    // Handle errors during retrieval
    res.status(500).json({ message: 'Error retrieving items' });
  }
};







