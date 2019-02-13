// @Entity('Place')
export class Place {
    // @OneToMany((type) => Lecture, (lecture) => lecture.place)
    // public lectures: Lecture[];
    constructor(json) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.buildingName = json.building_name;
        this.roomName = json.room_name;
    }
    update(json) {
        this.id = json.id;
        this.buildingName = json.building_name;
        this.roomName = json.room_name;
    }
}
//# sourceMappingURL=Place.js.map