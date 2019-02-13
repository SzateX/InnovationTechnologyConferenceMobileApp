import { Place } from '@/entity/Place';
import { nSQL } from 'nano-sql';
export class PlaceService {
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
    async createModelWithChange(change) {
        const json = JSON.parse(change.content);
        const obj = new Place(json);
        await nSQL('Place').query('upsert', obj).exec();
    }
    async updateModelWithChange(change) {
        await this.createModelWithChange(change);
    }
    async deleteModelWithChange(change) {
        const json = JSON.parse(change.content);
        await nSQL('Place').query('delete').where(['id', '=', json.id]).exec();
    }
}
//# sourceMappingURL=PlaceService.js.map