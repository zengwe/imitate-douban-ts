"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    /**
     * @author zengwe
     * @
     */
    async index() {
        //let result = await this.app.model.User.create({id:1,username: 'sss',age: 12});
        //console.log(result.age);
        let result = await this.app.model.User.findAll();
        result[0];
        this.app.model.User.findAll({
            where: {
                username: {
                    [this.app.Sequelize.Op.ne]: 1
                }
            }
        });
        console.log(result);
        this.ctx.body = 'hellow world';
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBaUM7QUFFakMsb0JBQW9DLFNBQVEsZ0JBQVU7SUFDbEQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLEtBQUs7UUFDZCxnRkFBZ0Y7UUFDaEYsMEJBQTBCO1FBQzFCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsS0FBSyxFQUFFO2dCQUNILFFBQVEsRUFBRTtvQkFDTixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNoQzthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBcEJELGlDQW9CQyJ9