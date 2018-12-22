import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Change')
export class Change {
    @PrimaryColumn()
    public id: number;

    @Column()
    public model: string;

    @Column()
    public typeOfChange: string;

    @Column()
    public content: string;
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.content = json.content;
        this.model = json.model;
        this.typeOfChange = json.type_of_change;
    }

    public update(json: any) {
        this.id = json.id;
        this.content = json.content;
        this.model = json.model;
        this.typeOfChange = json.type_of_change;
    }
}
