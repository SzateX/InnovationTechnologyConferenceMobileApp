import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import { Lecture } from './Lecture';

// @Entity('Place')
export class Place {
    // @PrimaryColumn()
    public id: number;

    // @Column()
    public buildingName: string;

    // @Column({nullable: true})
    public roomName: string;

    // @OneToMany((type) => Lecture, (lecture) => lecture.place)
    // public lectures: Lecture[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.buildingName = json.building_name;
        this.roomName = json.room_name;
    }

    public update(json: any) {
        this.id = json.id;
        this.buildingName = json.building_name;
        this.roomName = json.room_name;
    }
}
