'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('entradas_estoques', [
      {
        quantidade: 25,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 1
      },
      {
        quantidade: 50,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 2
      },
      {
        quantidade: 40,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 3
      },
      {
        quantidade: 50,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 4
      },
      {
        quantidade: 60,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 5
      },
      {
        quantidade: 80,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 6
      },
      {
        quantidade: 100,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 7
      },
      {
        quantidade: 80,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 8
      },
      {
        quantidade: 90,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 9
      },
      {
        quantidade: 150,
        data_entrada: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 10
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('entradas_estoques', null, {});
  }
};