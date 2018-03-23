import { Application } from 'egg';
import { AttributsField } from '../../declear/sequelize';
export interface UserAttributes {
    id:  number;
    username: string;
    age: number;
    password: string;
}
export default (app: Application) => {
    const {STRING, INTEGER} = app.Sequelize;
    const userAttrDefine: AttributsField<UserAttributes> = {
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
    }
    let User = app.model.define('User', userAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_user'
    });
    User.associate = function() {

    }
    
    return User;
};