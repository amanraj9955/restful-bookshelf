const { Books } = require('../models/index');

class BookRepository {
  async create(data) {
    try {
      return await Books.create(data);
    } catch (error) {
      console.error('Error in creating a book:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await Books.findAll();
    } catch (error) {
      console.error('Error in finding all books:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await Books.findByPk(id);
    } catch (error) {
      console.error('Error in  finding book by ID:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const book = await Books.findByPk(id);
      if (!book) return null;
      await book.update(data);
      return book;
    } catch (error) {
      console.error('Error in  updating a book:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const book = await Books.findByPk(id);
      if (!book) return null;
      await book.destroy();
      return true;
    } catch (error) {
      console.error('Error in  deleting a book:', error);
      throw error;
    }
  }
}

module.exports = BookRepository;
