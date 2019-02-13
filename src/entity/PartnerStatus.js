// @Entity('PartnerStatus')
export class PartnerStatus {
    // @OneToMany((type) => Company, (company) => company.status)
    // public companies: Company[];
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
        this.priority = json.priority;
    }
    update(json) {
        this.id = json.id;
        this.name = json.name;
        this.priority = json.priority;
    }
}
//# sourceMappingURL=PartnerStatus.js.map