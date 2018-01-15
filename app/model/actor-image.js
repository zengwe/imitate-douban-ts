"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorImageAttrDefine = {
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
    };
    const ActorImage = app.model.define('ActorImage', actorImageAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'actor_image'
    });
    ActorImage.associate = function () {
    };
    return ActorImage;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3ItaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rvci1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBLGtCQUFlLENBQUMsR0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMxQyxNQUFNLG9CQUFvQixHQUF5QjtRQUMvQyxFQUFFLEVBQUU7WUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLElBQUk7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsU0FBUyxFQUFFLElBQUk7U0FDbEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1NBQ25CO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0osQ0FBQTtJQUNELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRTtRQUNwRSxVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsSUFBSTtRQUNyQixTQUFTLEVBQUUsYUFBYTtLQUMzQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsU0FBUyxHQUFHO0lBRXZCLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFBIn0=