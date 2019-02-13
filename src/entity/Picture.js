// @Entity('Picture')
export class Picture {
    // @OneToMany((type) => Company, (company) => company.picture)
    // public companies: Company[];
    // @OneToMany((type) => Speaker, (speaker) => speaker.picture)
    // public speakers: Speaker[];
    // @OneToMany((type) => News, (news) => news.picture)
    // public newses: News[];
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.source = json.source;
    }
    update(json) {
        this.id = json.id;
        this.source = json.source;
    }
}
//# sourceMappingURL=Picture.js.map