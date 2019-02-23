import axios from 'axios';
export class RestService {
    async getDataFromApi(lastIdChange) {
        const response = await axios.get('http://192.168.1.17:5000/restapi/change/?id=&id__gt=' + lastIdChange);
        return response.data;
    }
}
//# sourceMappingURL=RestService.js.map