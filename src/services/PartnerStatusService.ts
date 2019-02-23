import {DbService} from '@/services/DbService';
import {PartnerStatus} from '@/entity/PartnerStatus';
import {Picture} from '@/entity/Picture';
import {nSQL} from 'nano-sql';

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

    public async getStatuses(): Promise<any[]> {
        const result = await nSQL('PartnerStatus').query('select')
            .orm([{
                key: 'companies',
            }])
            .orderBy({priority: 'asc'})
            .exec();
        console.log(result);
        for (const status of result) {
            console.log(status);
            for (const company of status.companies) {
                company.picture = (await nSQL('Picture')
                    .query('select').where(['id', '=', company.picture]).exec())[0];
            }
        }
        return result;
        // @ts-ignore
        /*return await nSQL('PartnerStatus').query('select')
            .graph({
                key: 'companies',
                with: {table: 'Company'},
                on: ['PartnerStatus.id', '=', 'Comapny.status'],
                graph: {
                    key: 'picture',
                    with: {table: 'Picture'},
                    on: ['Picture.id', '=', 'Company.picture'],
                },
                orderBy: ['priority ASC'],
            }).exec();*/
        /* return await nSQL('PartnerStatus').query('select')
            .orm([{
                key: 'companies',
            }])
            .orderBy({priority: 'asc'})
            .exec(); */
    }

    private async createModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        const obj = new PartnerStatus(json);
        await nSQL('PartnerStatus').query('upsert', obj).exec();
    }

    private async updateModelWithChange(change: any) {
        await this.createModelWithChange(change);
    }

    private async deleteModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        await nSQL('PartnerStatus').query('delete').where(['id', '=', json.id]).exec();
    }
}
