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
    };
    let User = app.model.define('User', userAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_user',
    });
    User.associate = function () {
    };
    return User;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQSxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDeEMsTUFBTSxjQUFjLEdBQW1CO1FBQ25DLEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ3BCO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3pCO0tBQ0osQ0FBQTtJQUNELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUU7UUFDaEQsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLElBQUk7UUFDckIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRztJQUVqQixDQUFDLENBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9