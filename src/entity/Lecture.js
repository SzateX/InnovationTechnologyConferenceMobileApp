// @Entity('Lecture')
export class Lecture {
    async update(json) {
        this.id = json.id;
        this.beginTime = new Date(json.begin_time);
        this.endTime = new Date(json.end_time);
        this.description = json.description;
        this.title = json.title;
        this.place = json.place_id;
        this.speakers = json.speakers;
        // const connection = await DbService.getOrCreateConnection();
        // const repository = connection.getRepository(Speaker);
        // this.speakers = await repository.findByIds(json.speakers);
    }
}
//# sourceMappingURL=Lecture.js.map