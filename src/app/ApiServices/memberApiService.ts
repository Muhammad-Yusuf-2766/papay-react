import axios from "axios";
import assert from "assert";
import { serviceApi } from "../../lib/config"
import { Definer } from "../../lib/definer";
import { Member } from "../../types/user";
import { data } from 'dom7';
import { MemberLiken } from "../../types/others";

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
            assert.ok(result?.data.state !== 'fail', result?.data?.message)

            const member: Member = result.data.data
            localStorage.setItem("member_data", JSON.stringify(member))
            return member
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error
        }
    }
 
    public async signUpRequest(signup_data: any) {
        try {
            const result = await axios.post(this.path + "/signup", signup_data, {withCredentials: true})
            console.log("State:", result.data.state);
            assert.ok(result?.data, Definer.general_err1)
            assert.ok(result?.data.state !== 'failed', result?.data?.message)

            const member: Member = result.data.data
            localStorage.setItem("member_data", JSON.stringify(member))
            return member
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error
        }
    }

    public async logOutRequest() {
        try {
            const result = await axios.get(this.path+"/logout", {withCredentials: true})

            assert.ok(result?.data, Definer.general_err1)
            assert.ok(result?.data?.state !== 'fail', result?.data?.message)

            const logOutResult = result.data.state
            return logOutResult === 'success'
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error
        }
    }
    
    public async memberLikeTarget(data: any) {
        try {
            const url = "/member-liken"
            const result = await axios.post(this.path+url, data, {withCredentials: true})
            assert.ok(result?.data, Definer.general_err1)
            assert.ok(result?.data?.state !== 'fail', result?.data?.message)

            console.log("State=== ", result.data.data);
            const like_result: MemberLiken = result.data.data
            return like_result
            
        } catch (error: any) {
            console.log(`ERROR::: memberLikeTarget ${error.message}`);
            throw error
        }
    }

}

export default MemberApiService