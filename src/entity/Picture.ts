import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import { Company } from './Company';
import { Speaker } from './Speaker';
import { News } from './News';

@Entity('Picture')
export class Picture {
    @PrimaryColumn()
    public id: number;

    @Column()
    public source: string;

    @OneToMany((type) => Company, (company) => company.picture)
    public companies: Company[];

    @OneToMany((type) => Speaker, (speaker) => speaker.picture)
    public speakers: Speaker[];

    @OneToMany((type) => News, (news) => news.picture)
    public newses: News[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.source = json.source;
    }

    public update(json: any) {
        this.id = json.id;
        this.source = json.source;
    }
}
