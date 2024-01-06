import axios from "axios";
import { serviceApi } from "../../lib/config";
import { CartItem } from "../../types/others";
import { Definer } from "../../lib/definer";
import assert from "assert";
import { data } from "dom7";
import { Order } from "../../types/order";

class OrderApiService {
  private readonly path: string;

  constructor() {
    this.path = serviceApi;
  }

  async createOrder(data: CartItem[]) {
    try {
      const url = "/orders/create";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data?.message);
      console.log("State:", result.data.state);

      const order: any = result.data.data;
      console.log("Order::", order);
      return true;
    } catch (error: any) {
      console.log("Error: createOrder", error);
      throw error;
    }
  }

  async getMyOrders(order_status: string) {
    try {
      const url = `/orders?status=${order_status}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data?.message);
      console.log("State:", result.data.state);

      const orders: any = result.data.data;
      console.log("Orders::", orders);
      return orders;
    } catch (error: any) {
      console.log("Error: getMyOrders", error);
      throw error;
    }
  }

  async updateOrderStatus(data: any): Promise<Order> {
    try {
      const url = `/orders/edit`, 
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);
      console.log("state:::", result.data.state);

      const orders: Order = result.data.data;
      return orders;
    } catch (err: any) {
      console.log(`ERROR ::: updateStatusOfOrder ${err.message}`);

      throw err;
    }
  }
}

export default OrderApiService;
