import { Application } from 'egg';
import { AttributsField } from '../../declear/sequelize';
export interface ActorsRelationAttributes {
    id: number;
    actorId: number;
    otherActorId: number;
    is_family: number;
    relationship: string;
    descrip: string;
    createdAt: number;
    updatedAt: number;
}
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorsRelationAttrDefine: AttributsField<ActorsRelationAttributes> = {
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
        }
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