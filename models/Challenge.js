module.exports = function(sequelize, DataTypes){
  
  var Challenge = sequelize.define("Challenge", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });

  Challenge.associate = function(models) {
    const User = models.User;
    Challenge.belongsToMany(User, {
      through: models.UserChallenge,
      foreignKey: {
        name: "challengeId",
      }
    });

  };

  return Challenge;

};