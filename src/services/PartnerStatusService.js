import { PartnerStatus } from '@/entity/PartnerStatus';
import { nSQL } from 'nano-sql';
export class PartnerStatusService {
    async performActionOnChange(change) {
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
    async getStatuses() {
        let result = await nSQL('PartnerStatus').query('select')
            .orm([{
                key: 'companies',
            }])
            .orderBy({ priority: 'asc' })
            .exec();
        console.log(result);
        for (let status of result) {
            console.log(status);
            for (let company of status.companies) {
                company['picture'] = (await nSQL('Picture').query('select').where(["id", "=", company.picture]).exec())[0];
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
    async createModelWithChange(change) {
        const json = JSON.parse(change.content);
        const obj = new PartnerStatus(json);
        await nSQL('PartnerStatus').query('upsert', obj).exec();
    }
    async updateModelWithChange(change) {
        await this.createModelWithChange(change);
    }
    async deleteModelWithChange(change) {
        const json = JSON.parse(change.content);
        await nSQL('PartnerStatus').query('delete').where(['id', '=', json.id]).exec();
    }
}
//# sourceMappingURL=PartnerStatusService.js.map