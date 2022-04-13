const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Dish extends Model {}
Dish.init(
    {

        id:{

            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true


        },

        dish_name:{

            type:DataTypes.STRING,
            allowNull:false


        },

        discription:{


            type: DataTypes.STRING,
            allowNull: false

        },

        guestname:{

            type:DataTypes.STRING,
            allowNull:false



        },

        has_nuts:{

            type:DataTypes.BOOLEAN



        }





    },

    {

        sequelize,
        modelName: "dish",
        freezeTableName:true,
        underscored:true



    }


)

module.exports = Dish