import axios from "axios";
import { serviceApi } from "../../lib/config";
import { BoArticle, SearchArticlesObj } from "../../types/boArticle";
import { Definer } from "../../lib/definer";
import assert from "assert";
import { data } from "dom7";

class CommunityApiService {
  private readonly path: string;

  constructor() {
    this.path = serviceApi;
  }

  public async getTargetArticles(data: SearchArticlesObj) {
    try {
      let url = `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
      if (data.order) url += `&order=${data.order}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data?.message);
      console.log("State:", result.data.state);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (error: any) {
        console.log(`ERROR::: getTargetArticles ${error.message}`);
        throw error
    }
  }
}

export default CommunityApiService;
