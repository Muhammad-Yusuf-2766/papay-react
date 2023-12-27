import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/definer";
import { Restaurant } from "../../types/user";
import { SearchObj } from "../../types/others";

class RestaurantApiService {
    private readonly path: string;

    constructor() {
        this.path = serviceApi
    }

    async getToprestaurants() {
        try {
            const url = '/restaurants?order=top&page=1&limit=4';
            const result = await axios.get(this.path + url, { withCredentials: true });
            assert.ok(result, Definer.general_err1);
    
            console.log('State:', result.data.state);
            const top_restaurants: Restaurant[] = result.data.data;
            return top_restaurants;
    
        } catch (error: any) {
            console.error('ERROR::: getToprestaurants', error.toJSON());
            throw error;
        }
    }
    
    

    async getRestaurants(data: SearchObj) {
        try {
            const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`,
             result = await axios.get(this.path+url, {withCredentials: true});
            assert.ok(result, Definer.general_err1)

            console.log('State:', result.data.state);
            const restaurants: Restaurant[] = result.data.data;
            return restaurants

        } catch (error: any) {
            console.log(`ERROR::: getRestaurants ${error.message}`);
            throw error
        }
    }
}

export default RestaurantApiService