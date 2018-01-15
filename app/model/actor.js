"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { STRING, INTEGER, TEXT } = app.Sequelize;
    const actorAttrDefine = {
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
        family: {
            type: TEXT,
        },
        gender: {
            type: INTEGER.UNSIGNED,
            defaultValue: 0,
        },
        birthdata: {
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
    };
    const Actor = app.model.define('Actor', actorAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_user',
    });
    Actor.associate = function () {
    };
    return Actor;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2hELE1BQU0sZUFBZSxHQUFvQjtRQUNyQyxFQUFFLEVBQUU7WUFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDdEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDbkI7UUFDRCxRQUFRLEVBQUU7WUFDTixLQUFLLEVBQUUsV0FBVztZQUNsQixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixZQUFZLEVBQUUsQ0FBQztTQUNsQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxJQUFJO1NBQ2I7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsSUFBSTtTQUNiO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQ3pCO0tBQ0osQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUU7UUFDckQsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLElBQUk7UUFDckIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLFNBQVMsR0FBRztJQUVsQixDQUFDLENBQUE7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQSJ9