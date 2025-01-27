import HttpClient from "@/service/HttpClient.js";

class RoomService extends HttpClient {
    constructor() {
        super();
    }

    async getDeliveryRooms() {
        return await this.get('/food/delivery-rooms');
    }

}

const roomService = new RoomService();
export default roomService;
