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
    };
    const Actor = app.model.define('Actor', actorAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_actor',
    });
    Actor.associate = function () {
    };
    return Actor;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBLGtCQUFlLENBQUMsR0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEQsTUFBTSxlQUFlLEdBQW9CO1FBQ3JDLEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ25CO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDUCxLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNqQixZQUFZLEVBQUUsRUFBRTtTQUNuQjtRQUNELFFBQVEsRUFBRTtZQUNOLEtBQUssRUFBRSxXQUFXO1lBQ2xCLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1NBQ25CO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLElBQUk7U0FDYjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixZQUFZLEVBQUUsQ0FBQztTQUNsQjtRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixZQUFZLEVBQUUsQ0FBQztTQUNsQjtRQUNELFNBQVMsRUFBRTtZQUNQLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtTQUN6QjtRQUNELFNBQVMsRUFBRTtZQUNQLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtTQUN6QjtLQUNKLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFO1FBQ3JELFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFNBQVMsRUFBRSxTQUFTO0tBQ3ZCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxTQUFTLEdBQUc7SUFFbEIsQ0FBQyxDQUFBO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUEifQ==