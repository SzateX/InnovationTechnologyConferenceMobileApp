import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import {Company} from './Company';

// @Entity('PartnerStatus')
export class PartnerStatus {
    // @PrimaryColumn()
    public id: number;

    // @Column()
    public name: string;

    // @OneToMany((type) => Company, (company) => company.status)
    // public companies: Company[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
    }

    public update(json: any) {
        this.id = json.id;
        this.name = json.name;
    }
}
