import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/definer";
import { Restaurant } from "../../types/user";

class RestaurantApiService {
    private readonly path: string;

    constructor() {
        this.path = serviceApi
    }

    async getToprestaurants() {
        try {
            const url = '/restaurants?order=top&page=1&limit=4',
             result = await axios.get(this.path+url);
            assert.ok(result, Definer.general_err1)

            console.log('State:', result.data.state);
            const top_restaurants: Restaurant[] = result.data.data;
            return top_restaurants

        } catch (error: any) {
            console.log(`ERROR::: getToprestaurants ${error.message}`);
            throw error
        }
    }
}

export default RestaurantApiService