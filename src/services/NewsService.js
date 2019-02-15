import { News } from '@/entity/News';
import { nSQL } from 'nano-sql';
export class NewsService {
    async getNewsesForHomePage(date) {
        return await nSQL('News').query('select')
            .orm(['picture'])
            .where(['publishDate', '<', date.toISOString()])
            .orderBy({
            publishDate: 'desc',
        })
            .limit(1)
            .exec();
    }
    async getNewses() {
        return await nSQL('News').query('select')
            .orm(['picture'])
            .orderBy({
            publishDate: 'desc',
        })
            .exec();
    }
    async getNews(id) {
        const result = await nSQL('News').query('select')
            .orm(['picture'])
            .where(['id', '=', id])
            .exec();
        console.log(result);
        return result[0];
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
        const obj = new News(json);
        await nSQL('News').query('upsert', obj).exec();
    }
    async updateModelWithChange(change) {
        await this.createModelWithChange(change);
    }
    async deleteModelWithChange(change) {
        const json = JSON.parse(change.content);
        await nSQL('News').query('delete').where(['id', '=', json.id]).exec();
    }
}
//# sourceMappingURL=NewsService.js.map