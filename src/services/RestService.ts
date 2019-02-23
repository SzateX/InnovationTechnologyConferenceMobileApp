import axios from 'axios';

export class RestService {
    public async getDataFromApi(lastIdChange: number): Promise<any> {
        const response = await axios.get('http://192.168.1.17:5000/restapi/change/?id=&id__gt=' + lastIdChange);
        return response.data;
    }
}
