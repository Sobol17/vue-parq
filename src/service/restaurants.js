import HttpClient from "@/service/HttpClient.js";

class RestaurantService extends HttpClient {
    constructor() {
        super();
    }

    async getAllRestaurants() {
        return await this.get('/food/menu/restaurants');
    }

    async getCategoriesByRestaurantId(restaurantId, limit = 99) {
        return await this.get('/food/menu/dishes_group?restaurant=' + restaurantId + '&limit=' + limit);
    }

}

const restaurantService = new RestaurantService();
export default restaurantService;
