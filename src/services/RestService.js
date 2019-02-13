import axios from 'axios';
export class RestService {
    async getDataFromApi(lastIdChange) {
        try {
            const response = await axios.get('http://192.168.1.4:5000/restapi/change/?id=&id__gt=' + lastIdChange);
            return response.data;
        }
        catch (e) {
            alert(e);
        }
    }
}
//# sourceMappingURL=RestService.js.map