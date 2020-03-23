/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'matrix_data',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      base_id: {
        type: DataTypes.CHAR(50),
        allowNull: true
      },
      rows: {
        type: DataTypes.CHAR(50),
        allowNull: true
      },
      cols: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      vals: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    },
    {
      tableName: 'matrix_data'
    }
  )
}