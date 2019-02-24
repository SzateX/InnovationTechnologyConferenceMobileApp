import axios from 'axios';

export class RestService {
    public async getDataFromApi(lastIdChange: number): Promise<any> {
        const response = await axios.get('http://int.pti.org.pl/restapi/change/?id=&id__gt=' + lastIdChange);
        return response.data;
    }
}
