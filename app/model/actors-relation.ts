import { Application } from 'egg';
import { DefineAttributeColumnOptions } from '../../declear/sequelize';
export interface ActorsRelationAttributes {
    id: DefineAttributeColumnOptions | number;
    roleId: DefineAttributeColumnOptions | number;
    otherRoleId: DefineAttributeColumnOptions | number;
    relationship: DefineAttributeColumnOptions | string;
    descrip: DefineAttributeColumnOptions | string;
    createdAt: DefineAttributeColumnOptions | number;
    updatedAt: DefineAttributeColumnOptions | number;
}
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorsRelationAttrDefine: ActorsRelationAttributes = {
        id: {
            type: INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            field: 'role_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        otherRoleId: {
            field: 'other_role_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        relationship: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            comment: '关系0好友1情侣2夫妻3父子4母子5',
        },
        descrip: {
            type: STRING(100),
            defaultValue: '',
            comment: '关系描述',
        },
        createdAt: {
            field: 'create_time',
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        updatedAt: {
            field: 'update_time',
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
    }
    const ActorsRelation = app.model.define('ActorsRelation', actorsRelationAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'actors_relation'
    });
    ActorsRelation.associate = function () {

    };
    return ActorsRelation;
}