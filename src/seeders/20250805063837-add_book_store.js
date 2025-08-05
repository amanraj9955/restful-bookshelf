"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: "To Kill a Mockingbird", 
          author: "Harper Lee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Great Gatsby", 
          author: "F. Scott Fitzgerald",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Pride and Prejudice", 
          author: "Jane Austen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Hobbit", 
          author: "J.R.R. Tolkien",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Brave New World", 
          author: "Aldous Huxley",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  },
};
