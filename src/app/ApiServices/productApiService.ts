import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/definer";
import { Restaurant } from "../../types/user";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";

class ProductApiService {
    private readonly path: string;

    constructor() {
        this.path = serviceApi
    }

    async getTargetProducts(data: ProductSearchObj) {
        try {
            const url = '/products'
            const result = await axios.post(this.path+url, data, {withCredentials: true})
            assert.ok(result, Definer.general_err1)

            console.log('State:', result.data.state);
            const products: Product[] = result.data.data
            return products
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error
        }
    }

}

export default ProductApiService