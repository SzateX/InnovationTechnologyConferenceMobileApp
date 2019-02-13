import { createConnection, getConnection, } from 'typeorm';
import { Change } from '@/entity/Change';
import { Company } from '@/entity/Company';
import { Lecture } from '@/entity/Lecture';
import { News } from '@/entity/News';
import { PartnerStatus } from '@/entity/PartnerStatus';
import { Picture } from '@/entity/Picture';
import { Place } from '@/entity/Place';
import { Speaker } from '@/entity/Speaker';
import { AlreadyHasActiveConnectionError } from 'typeorm/error/AlreadyHasActiveConnectionError';
export var DbService;
(function (DbService) {
    DbService.options = {
        type: 'cordova',
        database: 'test',
        location: 'default',
        entities: [
            Change,
            Company,
            Lecture,
            News,
            PartnerStatus,
            Picture,
            Place,
            Speaker,
        ],
        logging: true,
        synchronize: true,
    };
    // const manager: ConnectionManager = getConnectionManager();
    async function getOrCreateConnection() {
        // if (manager.connections.length) {
        //     return manager.get();
        // }
        // return manager.create(options);
        try {
            return await createConnection(DbService.options);
        }
        catch (e) {
            if (e instanceof AlreadyHasActiveConnectionError) {
                return await getConnection();
            }
            throw e;
        }
    }
    DbService.getOrCreateConnection = getOrCreateConnection;
})(DbService || (DbService = {}));
//# sourceMappingURL=DbService.js.map