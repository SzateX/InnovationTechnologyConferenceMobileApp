// @Entity('News')
export class News {
    // @ManyToOne((type) => Picture, (p) => p.newses, {nullable: true})
    // @JoinColumn({name: 'pictureId'})
    // public picture: Picture;
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.creationDate = new Date(json.creation_date);
        this.publishDate = new Date(json.publish_date);
        this.content = json.content;
        this.title = json.title;
        this.picture = json.picture_id;
    }
    update(json) {
        this.id = json.id;
        this.creationDate = new Date(json.creation_date);
        this.publishDate = new Date(json.publish_date);
        this.content = json.content;
        this.title = json.title;
        this.picture = json.picture_id;
    }
}
//# sourceMappingURL=News.js.map