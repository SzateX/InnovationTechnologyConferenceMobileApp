import axios from 'axios';
export class RestService {
    async getDataFromApi(lastIdChange) {
        const response = await axios.get('http://int.pti.org.pl/restapi/change/?id=&id__gt=' + lastIdChange);
        return response.data;
    }
}
//# sourceMappingURL=RestService.js.map