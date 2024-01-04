import axios from "axios"
import { serviceApi } from "../../lib/config"
import { CartItem } from "../../types/others"
import { Definer } from "../../lib/definer"
import assert from "assert"
import { data } from 'dom7';

class OrderApiService {
    private readonly path: string

    constructor() {
        this.path = serviceApi
    }

    async   createOrder(data: CartItem[]) {
        try {
            const url = '/orders/create'
            const result = await axios.post(this.path+url, data, {withCredentials: true})

            assert.ok(result?.data, Definer.general_err1)
            assert.ok(result?.data.state !== 'fail', result?.data?.message)
            console.log("State:", result.data.state);

            const order: any = result.data.data
            console.log("Order::", order);
            return true

        } catch (error: any) {
            console.log("Error: createOrder", error);
            throw error
        }
    }
}

export default OrderApiService