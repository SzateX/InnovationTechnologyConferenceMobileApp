import { Speaker } from '@/entity/Speaker';
import { nSQL } from 'nano-sql';
export class SpeakerService {
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
        const obj = new Speaker(json);
        await nSQL('Speaker').query('upsert', obj).exec();
    }
    async updateModelWithChange(change) {
        await this.createModelWithChange(change);
    }
    async deleteModelWithChange(change) {
        const json = JSON.parse(change.content);
        await nSQL('Speaker').query('delete').where(['id', '=', json.id]).exec();
    }
}
//# sourceMappingURL=SpeakerService.js.map