import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config"
import { Definer } from "../../lib/definer";
import { Member } from "../../types/user";

class MemberApiService {
    private readonly path: string
    constructor() {
        this.path = serviceApi
    }

    public async loginRequest(login_data: any) {
        try {
            const result = await axios.post(this.path + "/login", login_data, {withCredentials: true})
            console.log("State:", result.data.state);
            assert.ok(result?.data, Definer.general_err1)
            assert.ok(result?.data.state != 'fail', result?.data?.message)

            const member: Member = result.data.data
            localStorage.setItem("member_data", JSON.stringify(member))
            return member
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error
        }
    }
 

}

export default MemberApiService