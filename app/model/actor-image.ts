import { Application } from 'egg';
import { AttributsField } from '../../declear/sequelize';
export interface ActorImageAttributes {
    id: number;
    actorId: number;
    path: string;
    descrip: string;
    status: number;
    createdUserId: number;        
    createdAt: number;
    updatedAt: number;
}
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorImageAttrDefine: AttributsField<ActorImageAttributes> = {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        actorId: {
            type: INTEGER.UNSIGNED,
            allowNull: null
        },
        path: {
            type: STRING(255),
            allowNull: false,
            defaultValue: '',
        },
        descrip: {
            type: STRING(255),
            defaultValue: '',
        },
        status: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0
        },
        createdUserId: {
            type: INTEGER.UNSIGNED
        },
        createdAt: {
            field: 'created_at',
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        updatedAt: {
            field: 'updated_at',
            type: INTEGER.UNSIGNED,
            defaultValue: 0
        },
    }
    const ActorImage = app.model.define('ActorImage', actorImageAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'actor_image'
    });
    ActorImage.associate = function () {

    };
    return ActorImage;
}