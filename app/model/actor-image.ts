import { Application } from 'egg';
import { DefineAttributeColumnOptions } from '../../declear/sequelize';
export interface ActorImageAttributes {
    id: DefineAttributeColumnOptions | number;
    actorId: DefineAttributeColumnOptions | number;
    path: DefineAttributeColumnOptions | string;
    descrip: DefineAttributeColumnOptions | string;
    status: DefineAttributeColumnOptions | number;
    createdUserId: DefineAttributeColumnOptions | number;        
    createdAt: DefineAttributeColumnOptions | number;
    updatedAt: DefineAttributeColumnOptions | number;
}
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorImageAttrDefine: ActorImageAttributes = {
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