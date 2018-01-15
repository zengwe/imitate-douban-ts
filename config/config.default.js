"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const sequelize_1 = require("./sequelize");
exports.default = (appInfo) => {
    let config = {
        keys: appInfo.name + '_1509346759916_154',
        middleware: [],
        security: {
            csrf: {
                enable: false,
                ignoreJSON: true,
            },
            domainWhiteList: ['http://127.0.0.1:7001'],
        },
        static: {
            prefix: '/public/',
            dir: path.join(appInfo.baseDir, 'static/public'),
            dynamic: true,
            preload: false,
            buffer: false,
            maxFiles: 1000,
        },
        // filePath: {
        //     staticPrefix: '/static',
        //     root: path.resolve('./'),
        //     companyLogo: '/static/public/logo/',
        //     projectImage: '/static/public/project/image/',
        //     userAvator: '/static/public/user/avator/',
        //     notPublicPath: '/static/notpublicpath/libraryfile/',
        //     activity: {
        //         attachment: 'static/activity/attachment/',
        //         report: 'static/activity/report/'
        //     },
        //     databank: {
        //         normal: 'static/databank/normal/'
        //     },
        //     inspectionAttachment: 'static/inspection/attachment'
        // },
        multipart: {
            autoFields: false,
            defaultCharset: 'utf8',
            fieldNameSize: 100,
            fieldSize: '100kb',
            fields: 10,
            fileSize: '10mb',
            files: 10,
            fileExtensions: [],
            whitelist: ['.pdf', '.png', '.xls', '.docx', 'xlsx', '.doc', '.ppt', '.pptx', '.jpeg', '.jpg', '.gif', '.zip'],
        },
        bodyParser: {
            enable: true,
            encoding: "utf8",
            formLimit: String(1024 * 64) + "kb",
            jsonLimit: String(1024 * 64) + "kb",
            strict: true,
            queryString: {
                arrayLimit: 100,
                depth: 5,
                parameterLimit: 1000
            },
            returnRawBody: true
        },
        sequelize: {
            dialect: 'mysql',
            database: 'sameali',
            host: '127.0.0.1',
            port: '3306',
            username: 'root',
            password: '826150s',
        },
        session: {
            maxAge: 48 * 3600 * 1000,
            key: 'EGG_SESS',
            httpOnly: true,
            encrypt: true,
        }
    };
    return Object.assign(config, sequelize_1.configPrivate);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUE2QjtBQUM3QiwyQ0FBMkM7QUFDM0Msa0JBQWUsQ0FBQyxPQUFxQixFQUFFLEVBQUU7SUFDckMsSUFBSSxNQUFNLEdBQUc7UUFDVCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxvQkFBb0I7UUFDekMsVUFBVSxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsVUFBVSxFQUFFLElBQUk7YUFDbkI7WUFDRCxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUM3QztRQUNELE1BQU0sRUFBRTtZQUNKLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO1lBQ2hELE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsY0FBYztRQUNkLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsMkNBQTJDO1FBQzNDLHFEQUFxRDtRQUNyRCxpREFBaUQ7UUFDakQsMkRBQTJEO1FBQzNELGtCQUFrQjtRQUNsQixxREFBcUQ7UUFDckQsNENBQTRDO1FBQzVDLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsNENBQTRDO1FBQzVDLFNBQVM7UUFDVCwyREFBMkQ7UUFDM0QsS0FBSztRQUNMLFNBQVMsRUFBRTtZQUNQLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxjQUFjLEVBQUUsRUFBRTtZQUNsQixTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztTQUNqSDtRQUNELFVBQVUsRUFBRTtZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNuQyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1lBQ1osV0FBVyxFQUFFO2dCQUNULFVBQVUsRUFBRSxHQUFHO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLGNBQWMsRUFBRSxJQUFJO2FBQ3ZCO1lBQ0QsYUFBYSxFQUFFLElBQUk7U0FDdEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxTQUFTO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtZQUN4QixHQUFHLEVBQUUsVUFBVTtZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDaEI7S0FDSixDQUFBO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLHlCQUFhLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMifQ==