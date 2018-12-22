import {Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {PartnerStatus} from './PartnerStatus';
import { Picture } from './Picture';
import { Speaker } from './Speaker';

@Entity('Company')
export class Company {
    @PrimaryColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({nullable: true})
    public description: string;

    @Column({type: 'int', nullable: true})
    public statusId: number;

    @Column({type: 'int', nullable: true})
    public pictureId: number;

    @ManyToOne((type) => PartnerStatus, (partnerStatus) => partnerStatus.companies, {nullable: true})
    @JoinColumn({name: 'statusId'})
    public status: PartnerStatus;

    @ManyToOne((type) => Picture, (p) => p.companies, {nullable: true})
    @JoinColumn({name: 'pictureId'})
    public picture: Picture;

    @OneToMany((type) => Speaker, (speaker) => speaker.company)
    public speakers: Speaker[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
        this.statusId = json.status_id;
        this.pictureId = json.picture_id;
    }

    public update(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.statusId = json.status_id;
        this.pictureId = json.picture_id;
    }
}
