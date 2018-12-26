import { Entity, PrimaryColumn, Column, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Picture } from './Picture';
import { Company } from './Company';
import { Lecture } from './Lecture';

// @Entity('Speaker')
export class Speaker {
    // @PrimaryColumn()
    public id: number;

    // @Column()
    public name: string;

    // @Column()
    public surname: string;

    // @Column({nullable: true})
    public description: string;

    // @Column({type: 'int', nullable: true})
    public picture: number;

    // @Column({type: 'int', nullable: true})
    public company: number;

    //@ManyToOne((type) => Picture, (picture) => picture.speakers, {nullable: true})
    //@JoinColumn({name: 'pictureId'})
    //public picture: Picture;

    //@ManyToOne((type) => Company, (company) => company.speakers, {nullable: true})
    //@JoinColumn({name: 'companyId'})
    //public company: Company;

    //@ManyToMany((type) => Lecture, (lecture) => lecture.speakers)
    //public lectures: Lecture[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
        this.surname = json.surname;
        this.description = json.description;
        this.picture = json.picture_id;
        this.company = json.company_id;
    }

    public update(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.surname = json.surname;
        this.description = json.description;
        this.picture = json.picture_id;
        this.company = json.company_id;
    }
}
