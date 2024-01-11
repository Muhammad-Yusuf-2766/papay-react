import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Box, Link, Stack } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { BoArticle } from "../../../types/boArticle";
import { serviceApi } from "../../../lib/config";

export function TargetArticles(props: any) {
   const today = function moment() {
    return today 
   }

  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image ? `${serviceApi}/${article.art_image}` : "/public/community/default_img.png"
        return (
          <Link
            className="article_box"
            sx={{ textDecoration: "none" }}
            href={""}
          >
            <Box className="article_img_bg"></Box>
            <Box className="article_container">
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/auth/default_img.png"
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                  alt=""
                />
                <span className="article_author_user">{article.member_data.mb_nick}</span>
              </Box>
              <Box
                display={"flex"}    
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="article_title">{article.bo_id}</span>
                <p className="article_author_user">
                  {article.art_subject}
                </p>
              </Box>
            </Box>{" "}
            <Box className="article_icons">
              <div className="evalution_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                
                <span>{moment().format("YY-MM-DD HH:mm")}</span>

                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={false}
                    id={article?._id}
                  />

                  <span>{article.art_likes} ta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon
                    style={{ color: "#979797" }}
                    sx={{ mr: "7px" }}
                  />
                  <span>{article.art_views} ta</span>
                </div>
              </div>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
