const BookService = require('../services/booksService');
const bookService = new BookService();


const createBook = async (req, res) => {
  try {
    const book = await bookService.create(req.body);
    res.status(201).json({
      data: book,
      success: true,
      err: {},
      message: 'Successfully created a book'
    });
  } catch (err) {
    res.status(500).json({
      data: {},
      success: false,
      err: err.message,
      message: 'Failed to create book'
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.findAll();
    res.status(200).json({
      data: books,
      success: true,
      err: {},
      message: 'Fetched all books successfully'
    });
  } catch (err) {
    res.status(500).json({
      data: {},
      success: false,
      err: err.message,
      message: 'Failed to fetch books'
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookService.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        data: {},
        success: false,
        err: 'Book not found',
        message: 'No book exists with this ID'
      });
    }
    res.status(200).json({
      data: book,
      success: true,
      err: {},
      message: 'Fetched book successfully'
    });
  } catch (err) {
    res.status(500).json({
      data: {},
      success: false,
      err: err.message,
      message: 'Failed to fetch book'
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await bookService.update(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({
        data: {},
        success: false,
        err: 'Book not found',
        message: 'No book exists with this ID'
      });
    }
    res.status(200).json({
      data: book,
      success: true,
      err: {},
      message: 'Book updated successfully'
    });
  } catch (err) {
    res.status(500).json({
      data: {},
      success: false,
      err: err.message,
      message: 'Failed to update book'
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const success = await bookService.delete(req.params.id);
    if (!success) {
      return res.status(404).json({
        data: {},
        success: false,
        err: 'Book not found',
        message: 'No book exists with this ID'
      });
    }
    res.status(200).json({
      data: {},
      success: true,
      err: {},
      message: 'Book deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      data: {},
      success: false,
      err: err.message,
      message: 'Failed to delete book'
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
