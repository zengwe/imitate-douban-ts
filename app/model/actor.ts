import { Application } from 'egg';
import { AttributsField } from '../../declear/sequelize';
export interface ActorAttributes {
    id: number;
    name: string;
    header: string;
    otherName: string;
    nickName: string;
    profession: string;
    brief: string;
    gender: number;
    birthdate: number;
    createdAt: number;
    updatedAt: number;
}
export default (app: Application) => {
    const { STRING, INTEGER, TEXT } = app.Sequelize;
    const actorAttrDefine: AttributsField<ActorAttributes> = {
        id: {
            type: INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING(100),
            allowNull: false,
            defaultValue: '',
        },
        header: {
            type: STRING(100),
            defaultValue: '',
        },
        otherName: {
            field: 'other_name',
            type: STRING(100),
            defaultValue: '',
        },
        nickName: {
            field: 'nick_name',
            type: STRING(100),
            defaultValue: '',
        },
        profession: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        brief: {
            type: TEXT,
        },
        gender: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        birthdate: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        createdAt: {
            field: 'created_at',
            type: INTEGER.UNSIGNED
        },
        updatedAt: {
            field: 'updated_at',
            type: INTEGER.UNSIGNED
        }
    }
    const Actor = app.model.define('Actor', actorAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_actor',
    });
    Actor.associate = function () {

    }
    return Actor;
}