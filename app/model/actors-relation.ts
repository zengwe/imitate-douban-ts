import { Application } from 'egg';
import { DefineAttributeColumnOptions } from '../../declear/sequelize';
export interface ActorsRelationAttributes {
    id: DefineAttributeColumnOptions | number;
    actorId: DefineAttributeColumnOptions | number;
    otherActorId: DefineAttributeColumnOptions | number;
    is_family: DefineAttributeColumnOptions | number;
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
        actorId: {
            field: 'actor_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        otherActorId: {
            field: 'other_actor_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        is_family: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0
        },
        relationship: {
            type: STRING(100),
            allowNull: false,
            comment: '',
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
        tableName: 'z_actors_relation'
    });
    ActorsRelation.associate = function () {

    };
    return ActorsRelation;
}