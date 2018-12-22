import {Connection, Repository} from 'typeorm';
import {DbService} from '@/services/DbService';
import {PartnerStatus} from '@/entity/PartnerStatus';

export class PartnerStatusService {
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
        const connection: Connection = await DbService.getOrCreateConnection();
        const repository: Repository<PartnerStatus> = await connection.getRepository(PartnerStatus);
        const json = JSON.parse(change.content);
        const obj = new PartnerStatus(json);
        await repository.save(obj);
    }
    private async updateModelWithChange(change: any) {
        const connection: Connection = await DbService.getOrCreateConnection();
        const repository: Repository<PartnerStatus> = await connection.getRepository(PartnerStatus);
        const json = JSON.parse(change.content);
        const obj = await repository.findOne(json.id);
        if (obj) {
            obj.update(json);
            await repository.save(obj);
        }
    }
    private async deleteModelWithChange(change: any) {
        const connection: Connection = await DbService.getOrCreateConnection();
        const repository: Repository<PartnerStatus> = await connection.getRepository(PartnerStatus);
        const json = JSON.parse(change.content);
        const obj = await repository.findOne(json.id);
        if (obj) {
            await repository.remove(obj);
        }
    }
}
