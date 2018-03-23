"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const actorsRelationAttrDefine = {
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
    };
    const ActorsRelation = app.model.define('ActorsRelation', actorsRelationAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'z_actors_relation'
    });
    ActorsRelation.associate = function () {
    };
    return ActorsRelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3JzLXJlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0b3JzLXJlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBWUEsa0JBQWUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzFDLE1BQU0sd0JBQXdCLEdBQTZDO1FBQ3ZFLEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNMLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLEVBQUU7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxNQUFNO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3RCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0osQ0FBQTtJQUNELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFO1FBQ2hGLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFNBQVMsRUFBRSxtQkFBbUI7S0FDakMsQ0FBQyxDQUFDO0lBQ0gsY0FBYyxDQUFDLFNBQVMsR0FBRztJQUUzQixDQUFDLENBQUM7SUFDRixNQUFNLENBQUMsY0FBYyxDQUFDO0FBQzFCLENBQUMsQ0FBQSJ9