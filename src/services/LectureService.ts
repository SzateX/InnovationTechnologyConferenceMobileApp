import {Connection, Repository} from 'typeorm';
import {DbService} from '@/services/DbService';
import {Lecture} from '@/entity/Lecture';
import {Picture} from '@/entity/Picture';
import {nSQL} from 'nano-sql';

export class LectureService {
    public async getLecturesAfterDate(date: Date): Promise<any[]> {
        return await nSQL('Lecture').query('select')
            .orm(['place'])
            .where(['beginTime', '>', date.toISOString()])
            .orderBy({beginTime: 'asc'})
            .limit(2)
            .exec();//
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
        const obj = new Lecture();
        await obj.update(json);
        await nSQL('Lecture').query('upsert', obj).exec();
    }
    private async updateModelWithChange(change: any) {
        await this.createModelWithChange(change);
    }
    private async deleteModelWithChange(change: any) {
        const json = JSON.parse(change.content);
        await nSQL('Lecture').query('delete').where(['id', '=', json.id]).exec();
    }
}
