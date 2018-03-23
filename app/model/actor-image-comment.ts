import { Application } from 'egg';
import { AttributsField } from '../../declear/sequelize';
export interface ActorImageCommentAttributes {
    id: number;
    comment: string;
    userId: number;
    status: number;
    descrip: number;
    createdUserId: number;
    createdAt: number;
    updatedAt: number;
}
export default (app: Application) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorImageCommentAttrDefine: AttributsField<ActorImageCommentAttributes> = {
        id: {
            type: INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
          },
          comment: {
            type: STRING(255),
            allowNull: false,
          },
          userId: {
            type: INTEGER.UNSIGNED,
            field: 'user_id',
            allowNull: false,
          },
          status: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
          },
          descrip: {
            type: STRING(255),
            defaultValue: '',
          },
          createdUserId: {
            field: 'update_user_id',
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
          },
          createdAt: {
            field: 'create_time',
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
          },
          updatedAt: {
            type: INTEGER.UNSIGNED,
            field: 'update_time',
            defaultValue: 0
          },
    };
    const ActorImageComment = app.model.define('ActorImageComment', actorImageCommentAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'actor_image_comment'
    });
    ActorImageComment.associate = function() {

    };
    return ActorImageComment;
}