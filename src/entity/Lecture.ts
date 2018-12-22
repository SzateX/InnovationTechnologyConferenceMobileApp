import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne, JoinTable, getConnection, JoinColumn } from 'typeorm';
import { Place } from './Place';
import { Speaker } from './Speaker';
import {DbService} from '@/services/DbService';

@Entity('Lecture')
export class Lecture {
    @PrimaryColumn()
    public id: number;

    @Column()
    public beginTime: Date;

    @Column()
    public endTime: Date;

    @Column({nullable: true})
    public description: string;

    @Column()
    public title: string;

    @Column({type: 'int', nullable: true})
    public placeId: number;

    @ManyToOne((type) => Place, (p) => p.lectures)
    @JoinColumn({name: 'placeId'})
    public place: Place;

    @ManyToMany((type) => Speaker, (speaker) => speaker.lectures)
    @JoinTable()
    public speakers: Speaker[];
    public async update(json: any) {
        this.id = json.id;
        this.beginTime = new Date(json.begin_time);
        this.endTime = new Date(json.end_time);
        this.description = json.description;
        this.title = json.title;
        this.placeId = json.place_id;
        const connection = await DbService.getOrCreateConnection();
        const repository = connection.getRepository(Speaker);
        this.speakers = await repository.findByIds(json.speakers);
    }
}
