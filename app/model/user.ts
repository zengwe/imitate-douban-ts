import { Application } from 'egg';
//import { Model } from '../../declear/sequelize';
//import { Model } from './sequelize';
//export declare let User: Model<any,any>;
import { DefineAttributeColumnOptions } from '../../declear/sequelize';
export interface UserAttributes {
    id:  DefineAttributeColumnOptions | number;
    username: DefineAttributeColumnOptions | string;
    age: DefineAttributeColumnOptions | number;
}
export default (app: Application) => {
    const {STRING, INTEGER} = app.Sequelize;
    const userAttrDefine: UserAttributes = {
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
    }
    let User = app.model.define('User', userAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_user',
    });
    User.associate = function() {

    }
    return User;
};