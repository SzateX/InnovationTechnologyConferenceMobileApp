import { Lecture } from '@/entity/Lecture';
import { nSQL } from 'nano-sql';
export class LectureService {
    async getLecturesAfterDateHomePage(date) {
        return await nSQL('Lecture').query('select')
            .orm(['place'])
            .where(['beginTime', '>', date.toISOString()])
            .orderBy({ beginTime: 'asc' })
            .limit(2)
            .exec();
    }
    async getLectures() {
        return await nSQL('Lecture').query('select')
            .orm(['place'])
            .orderBy({ beginTime: 'asc' })
            .exec();
    }
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
        const obj = new Lecture();
        await obj.update(json);
        await nSQL('Lecture').query('upsert', obj).exec();
    }
    async updateModelWithChange(change) {
        await this.createModelWithChange(change);
    }
    async deleteModelWithChange(change) {
        const json = JSON.parse(change.content);
        await nSQL('Lecture').query('delete').where(['id', '=', json.id]).exec();
    }
}
//# sourceMappingURL=LectureService.js.map