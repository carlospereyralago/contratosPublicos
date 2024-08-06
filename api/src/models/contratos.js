module.exports = function (sequelize, DataTypes) { // esta funcionalidad se autoejecuta cuando llamo el archivo y me dice que puede ser llamada (la funcion) por otro archivo
  const Contratos = sequelize.define('Contratos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rgan_contractaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_darrer_anunci_plataforma: {
        type: DataTypes.DATE,
        allowNull: true
      },
      expedient: {
        type: DataTypes.STRING,
        allowNull: true
      },
      t_tol: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      tipus_contracte: {
        type: DataTypes.STRING,
        allowNull: true
      },
      procediment_contractaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pressupost_expedient: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
      },
      pressupost_expedient_sense: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
      },
      modificacions_import: {
        type: DataTypes.STRING,
        allowNull: true
      },
      modificacions_termini: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pr_rroga_d_un_altre_expedient: {
        type: DataTypes.STRING,
        allowNull: true
      },
      resultat_adjudicaci: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_acord_adjudicaci: {
        type: DataTypes.DATE,
        allowNull: true
      },
      data_formalitzaci: {
        type: DataTypes.DATE,
        allowNull: true
      },
      cif_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: true
      },
      nom_adjudicatari: {
        type: DataTypes.STRING,
        allowNull: true
      },
      import_adjudicaci: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
      },
      import_adjudicaci_sense_iva: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
      },
      ofertes_rebudes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      tipus_tramitaci_: {
        type: DataTypes.STRING,
        allowNull: true
      },
      financiaci_ue: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      DataTypes,
      tableName: 'contratos', // esto me dice que está interactuando con la tabla 'users'
      timestamps: true, // esto pone la fecha del momento en que se crea o se modifica un dato
      paranoid: true, // esto me asegura que me muestre los datos de la tabla con delete null
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Contratos.associate = function (models) {

  }

  return Contratos // aqui le aclaro si el modelo esta relacionado con otros modelos
}
