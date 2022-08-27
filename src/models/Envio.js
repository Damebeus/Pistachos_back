const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("envio", {
    manzana: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    barrio: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    nombreCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 })
}