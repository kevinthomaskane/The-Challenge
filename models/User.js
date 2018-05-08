module.exports = function(sequelize, DataTypes){
  
  var User = sequelize.define("User", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    token: {
      type: DataTypes.STRING
    },

    image: {
      type: DataTypes.BLOB('long'),
      allowNull: true
    }

  });
  
  User.associate = function(models) {
    const Challenge = models.Challenge
    User.belongsToMany(Challenge, {
      through: models.UserChallenge,
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });

  };

  return User;

};