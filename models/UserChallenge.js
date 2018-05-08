module.exports = function(sequelize, DataTypes) {
  const UserChallenge = sequelize.define("UserChallenge", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return UserChallenge;
};