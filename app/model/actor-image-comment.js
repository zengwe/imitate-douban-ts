"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorImageCommentAttrDefine = {
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
    ActorImageComment.associate = function () {
    };
    return ActorImageComment;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3ItaW1hZ2UtY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdG9yLWltYWdlLWNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDMUMsTUFBTSwyQkFBMkIsR0FBZ0M7UUFDN0QsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsWUFBWSxFQUFFLENBQUM7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQixZQUFZLEVBQUUsRUFBRTtTQUNqQjtRQUNELGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFlBQVksRUFBRSxDQUFDO1NBQ2hCO0tBQ04sQ0FBQztJQUNGLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUU7UUFDekYsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLElBQUk7UUFDckIsU0FBUyxFQUFFLHFCQUFxQjtLQUNuQyxDQUFDLENBQUM7SUFDSCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUc7SUFFOUIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0FBQzdCLENBQUMsQ0FBQSJ9