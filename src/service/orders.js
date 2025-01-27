import HttpClient from "@/service/HttpClient.js";

class OrderService extends HttpClient {
    constructor() {
        super();
    }

    async getCustomerOrders() {
        return await this.get('/food/orders');
    }

    async getCustomerOrderById(orderId) {
        return await this.get('/food/orders/' + orderId);
    }

    async makeOrder(request) {
        return await this.put('/food/orders/', request);
    }
}

const orderService = new OrderService();
export default orderService;
