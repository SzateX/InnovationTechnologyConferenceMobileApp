import {DbService} from '@/services/DbService';
import {Connection, Repository} from 'typeorm';
import {Change} from '@/entity/Change';
import {PlaceService} from '@/services/PlaceService';
import {PictureService} from '@/services/PictureService';
import {PartnerStatusService} from '@/services/PartnerStatusService';
import {CompanyService} from '@/services/CompanyService';
import {SpeakerService} from '@/services/SpeakerService';
import {LectureService} from '@/services/LectureService';
import {NewsService} from '@/services/NewsService';
import {nSQL} from 'nano-sql';

export class ChangeService {
    public async getLastChangeId(): Promise<number> {
        /*const connection: Connection = await DbService.getOrCreateConnection();
        const changeRepository: Repository<Change> = connection.getRepository(Change);
        const numberOfChanges: number = await changeRepository.count();
        if (numberOfChanges) {
            const change: Change|undefined = await changeRepository.findOne({order: {id: 'DESC'}});
            if (change) {
                return change.id;
            }
        }
        return 0;*/
       const result = await nSQL('Change').query('select', ['MAX(id) AS maxId']).exec();
       if (result[0].maxId) {
           return result[0].maxId;
       }
       return 0;
    }
    public async parseChangesFromJsonArray(changes: any) {
        //const connection: Connection = await DbService.getOrCreateConnection();
        //const changeRepository: Repository<Change> = connection.getRepository(Change);
        for (const change of changes) {
            switch (change.model) {
                case 'Place':
                    await new PlaceService().performActionOnChange(change);
                    break;
                case 'Picture':
                    await new PictureService().performActionOnChange(change);
                    break;
                case 'PartnerStatus':
                    await new PartnerStatusService().performActionOnChange(change);
                    break;
                case 'Company':
                    await new CompanyService().performActionOnChange(change);
                    break;
                case 'Speaker':
                    await new SpeakerService().performActionOnChange(change);
                    break;
                case 'Lecture':
                    await new LectureService().performActionOnChange(change);
                    break;
                case 'News':
                    await new NewsService().performActionOnChange(change);
                    break;
            }
            await nSQL('Change').query('upsert', new Change(change)).exec();
            //await changeRepository.save(new Change(change));
        }
    }
}
