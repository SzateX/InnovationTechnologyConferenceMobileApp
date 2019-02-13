// @Entity('Company')
export class Company {
    // @OneToMany((type) => Speaker, (speaker) => speaker.company)
    // public speakers: Speaker[];
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
        this.status = json.status_id;
        this.picture = json.picture_id;
    }
    update(json) {
        this.id = json.id;
        this.name = json.name;
        this.status = json.status_id;
        this.picture = json.picture_id;
    }
}
//# sourceMappingURL=Company.js.map