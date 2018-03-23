"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const userAttrDefine = {
        id: {
            type: INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: STRING(100),
        },
        age: {
            type: INTEGER.UNSIGNED
        },
        password: {
            type: INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let User = app.model.define('User', userAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_user'
    });
    User.associate = function () {
    };
    return User;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDeEMsTUFBTSxjQUFjLEdBQW1DO1FBQ25ELEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ3BCO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3pCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO0tBQ0osQ0FBQTtJQUNELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUU7UUFDaEQsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLElBQUk7UUFDckIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRztJQUVqQixDQUFDLENBQUE7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9