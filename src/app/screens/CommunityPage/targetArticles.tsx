import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Box, Link, Stack } from "@mui/material";
import { DatePicker } from "@mui/lab";

export function TargetArticles(props: any) {
   const today = function moment() {
    return today 
   }

  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        return (
          <Link
            key={index}
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
                <span className="article_author_user">Abdulloh</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="article_title">Story</span>
                <p className="article_author_user">
                  Burak Turkiyaning eng mahoratli oshpazi.
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
                  />

                  <span>62 ta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon
                    style={{ color: "#979797" }}
                    sx={{ mr: "7px" }}
                  />
                  <span>341 ta</span>
                </div>
              </div>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
