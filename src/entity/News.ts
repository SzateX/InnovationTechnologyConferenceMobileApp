import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Picture } from './Picture';

@Entity('News')
export class News {
    @PrimaryColumn()
    public id: number;

    @Column()
    public content: string;

    @Column()
    public title: string;

    @Column()
    public creationDate: Date;

    @Column()
    public publishDate: Date;

    @Column({type: 'int', nullable: true})
    public pictureId: number;

    @ManyToOne((type) => Picture, (p) => p.newses, {nullable: true})
    @JoinColumn({name: 'pictureId'})
    public picture: Picture;
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.creationDate = new Date(json.creation_date);
        this.publishDate = new Date(json.publish_date);
        this.content = json.content;
        this.title = json.title;
        this.pictureId = json.picture_id;
    }

    public update(json: any) {
        this.id = json.id;
        this.creationDate = new Date(json.creation_date);
        this.publishDate = new Date(json.publish_date);
        this.content = json.content;
        this.title = json.title;
        this.pictureId = json.picture_id;
    }
}
