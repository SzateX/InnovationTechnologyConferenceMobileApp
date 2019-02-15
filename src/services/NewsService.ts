import {DbService} from '@/services/DbService';
import {News} from '@/entity/News';
import {Picture} from '@/entity/Picture';
import {nSQL} from 'nano-sql';

export class NewsService {
    public async getNewsesForHomePage(date: Date): Promise<any[]> {
        return await nSQL('News').query('select')
            .orm(['picture'])
            .where(['publishDate', '<', date.toISOString()])
            .orderBy({
                publishDate: 'desc',
            })
            .limit(1)
            .exec();
    }

    public async getNewses(): Promise<any[]> {
        return await nSQL('News').query('select')
            .orm(['picture'])
            .orderBy({
                publishDate: 'desc',
            })
            .exec();
    }
    public async getNews(id: number): Promise<any> {
        const result = await nSQL('News').query('select')
            .orm(['picture'])
            .where(['id', '=', id])
            .exec();
        console.log(result);
        return result[0];
    }

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
        const obj = new News(json);
        await nSQL('News').query('upsert', obj).exec();
    }

    private async updateModelWithChange(change: any) {
        await this.createModelWithChange(change);
    }

    private async deleteModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        await nSQL('News').query('delete').where(['id', '=', json.id]).exec();
    }
}
