import HttpClient from "@/service/HttpClient.js";


class RestaurantService extends HttpClient {
    constructor() {
        super();
    }

    async getData() {
        return await this.get('/quizzes');
    }

    async sendData(data) {
        return await this.post('/quizzes/win', data);
    }
}

const restaurantService = new RestaurantService();
export default restaurantService;
