// @Entity('Change')
export class Change {
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.content = json.content;
        this.model = json.model;
        this.typeOfChange = json.type_of_change;
    }
    update(json) {
        this.id = json.id;
        this.content = json.content;
        this.model = json.model;
        this.typeOfChange = json.type_of_change;
    }
}
//# sourceMappingURL=Change.js.map