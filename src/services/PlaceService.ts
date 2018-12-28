import {Connection, Repository} from 'typeorm';
import {DbService} from '@/services/DbService';
import {Place} from '@/entity/Place';
import {nSQL} from 'nano-sql';

export class PlaceService {
    public async performActionOnChange(change: any) {
        switch (change.type_of_change) {
            case 'create':
                await this.createModelWithChange(change);
                break;
            case 'update':
                await this.updateModelWithChange(change);
                break;
            case 'delete':
                await this.deleteModelWithChange(change);
                break;
        }
    }
    private async createModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        const obj = new Place(json);
        await nSQL('Place').query('upsert', obj).exec();
    }
    private async updateModelWithChange(change: any) {
        await this.createModelWithChange(change);
    }
    private async deleteModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        await nSQL('Place').query('delete').where(['id', '=', json.id]).exec();
    }
}
