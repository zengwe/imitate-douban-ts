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
        roleId: {
            field: 'role_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        otherRoleId: {
            field: 'other_role_id',
            type: INTEGER.UNSIGNED,
            allowNull: false,
        },
        relationship: {
            type: INTEGER.UNSIGNED,
            allowNull: false,
            comment: '关系0好友1情侣2夫妻3父子4母子5',
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
        },
    };
    const ActorsRelation = app.model.define('ActorsRelation', actorsRelationAttrDefine, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'actors_relation'
    });
    ActorsRelation.associate = function () {
    };
    return ActorsRelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3JzLXJlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0b3JzLXJlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0Esa0JBQWUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzFDLE1BQU0sd0JBQXdCLEdBQTZCO1FBQ3ZELEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNELFdBQVcsRUFBRTtZQUNULEtBQUssRUFBRSxlQUFlO1lBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsb0JBQW9CO1NBQ2hDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFLE1BQU07U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsWUFBWSxFQUFFLENBQUM7U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsWUFBWSxFQUFFLENBQUM7U0FDbEI7S0FDSixDQUFBO0lBQ0QsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUU7UUFDaEYsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLElBQUk7UUFDckIsU0FBUyxFQUFFLGlCQUFpQjtLQUMvQixDQUFDLENBQUM7SUFDSCxjQUFjLENBQUMsU0FBUyxHQUFHO0lBRTNCLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDMUIsQ0FBQyxDQUFBIn0=