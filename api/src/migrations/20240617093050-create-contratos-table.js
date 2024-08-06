'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contratos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_darrer_anunci_plataforma: {
        type: Sequelize.DATE,
        allowNull: true
      },
      expedient: {
        type: Sequelize.STRING,
        allowNull: true
      },
      t_tol: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tipus_contracte: {
        type: Sequelize.STRING,
        allowNull: true
      },
      procediment_contractaci: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pressupost_expedient: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true
      },
      pressupost_expedient_sense: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true
      },
      modificacions_import: {
        type: Sequelize.STRING,
        allowNull: true
      },
      modificacions_termini: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pr_rroga_d_un_altre_expedient: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resultat_adjudicaci: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_acord_adjudicaci: {
        type: Sequelize.DATE,
        allowNull: true
      },
      data_formalitzaci: {
        type: Sequelize.DATE,
        allowNull: true
      },
      cif_adjudicatari: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nom_adjudicatari: {
        type: Sequelize.STRING,
        allowNull: true
      },
      import_adjudicaci: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true
      },
      import_adjudicaci_sense_iva: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true
      },
      ofertes_rebudes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      tipus_tramitaci_: {
        type: Sequelize.STRING,
        allowNull: true
      },
      financiaci_ue: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contratos')
  }
}
