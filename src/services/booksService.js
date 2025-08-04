const BookRepository = require('../repository/booksRepository');
const bookRepo = new BookRepository();

class BookService {
  async create(data) {
    try {
      return await bookRepo.create(data);
    } catch (error) {
      console.error('Service Error - create:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await bookRepo.findAll();
    } catch (error) {
      console.error('Service Error - findAll:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await bookRepo.findById(id);
    } catch (error) {
      console.error('Service Error - findById:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedBook = await bookRepo.update(id, data);
      if (!updatedBook) {
        throw new Error('Book not found');
      }
      return updatedBook;
    } catch (error) {
      console.error('Service Error - update:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await bookRepo.delete(id);
      if (!result) {
        throw new Error('Book not found');
      }
      return result;
    } catch (error) {
      console.error('Service Error - delete:', error);
      throw error;
    }
  }
}

module.exports = BookService;
