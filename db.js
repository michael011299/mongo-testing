const mongoose = require('mongoose');

module.exports = {
  connectToDb: async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://mwhitham:k9tFvXQ0J5eReW6w@cluster0.nyybfk7.mongodb.net/test',
      );
      console.log('Connected to db');
    } catch (err) {
      console.log('Failed to connect:', err);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.disconnect();
      console.log('DISCONNECTED');
    } catch (err) {
      console.error('Failed to disconnect:', err);
    }
  },
};
