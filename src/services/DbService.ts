import {
    getConnectionManager,
    ConnectionManager,
    ConnectionOptions,
    Connection,
    createConnection,
    getConnection
} from 'typeorm';
import {Change} from '@/entity/Change';
import {Company} from '@/entity/Company';
import {Lecture} from '@/entity/Lecture';
import {News} from '@/entity/News';
import {PartnerStatus} from '@/entity/PartnerStatus';
import {Picture} from '@/entity/Picture';
import {Place} from '@/entity/Place';
import {Speaker} from '@/entity/Speaker';
import {AlreadyHasActiveConnectionError} from 'typeorm/error/AlreadyHasActiveConnectionError';
export namespace DbService {
    export const options: ConnectionOptions = {
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

    export async function getOrCreateConnection(): Promise<Connection> {
        // if (manager.connections.length) {
        //     return manager.get();
        // }
        // return manager.create(options);
        try {
            return await createConnection(options);
        } catch (e) {
            if (e instanceof AlreadyHasActiveConnectionError) {
                return await getConnection();
            }
            throw e;
        }
    }

}
