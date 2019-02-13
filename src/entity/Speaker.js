// @Entity('Speaker')
export class Speaker {
    // @ManyToOne((type) => Picture, (picture) => picture.speakers, {nullable: true})
    // @JoinColumn({name: 'pictureId'})
    // public picture: Picture;
    // @ManyToOne((type) => Company, (company) => company.speakers, {nullable: true})
    // @JoinColumn({name: 'companyId'})
    // public company: Company;
    // @ManyToMany((type) => Lecture, (lecture) => lecture.speakers)
    // public lectures: Lecture[];
    constructor(json) {
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
    update(json) {
        this.id = json.id;
        this.name = json.name;
        this.surname = json.surname;
        this.description = json.description;
        this.picture = json.picture_id;
        this.company = json.company_id;
    }
}
//# sourceMappingURL=Speaker.js.map