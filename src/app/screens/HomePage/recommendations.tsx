import { Avatar, Box, Container, Stack } from "@mui/material";
import React from "react";

export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">Tavsiya qilingan maqolalar</Box>
          <Stack className="article_main" flexDirection={"row"} justifyContent={'space-between'}>
            <Stack className="article_container">
              <Box className="article_category">Ko'p ko'rilgan</Box>

               {/* =========  Article_1 ========== */}
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage: `url(https://media.istockphoto.com/id/635912088/photo/pumpkin-salad.jpg?s=612x612&w=0&k=20&c=uRdmvjO16WsPFPV7GTWbxq6NUQuPBkv4gRJdtfZodzY=)`,
                  }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_img.png"
                        sx={{ width: "45px", height: "45px" }}
                      />
                      <span className="author_username">Abdulloh</span>
                    </div>
                    <span className="article_title">
                      Eng mazali va foydali ovqat
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

                  {/* =========  Article_2 ========== */}
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWWSDItiI6Q6NyKWVVITWoVtPqVZ0bpiyw3HOZeh0XYu62BIyRpgvmhNf-l0HLpdOTro&usqp=CAU)`,
                  }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_img.png"
                        sx={{ width: "45px", height: "45px" }}
                      />
                      <span className="author_username">Bobur</span>
                    </div>
                    <span className="article_title">
                    Ashley sizga yanada yaqin
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Box className="article_category">Ko'p yoqtirilgan</Box>

                  {/* =========  Article_3 ========== */}
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage: `url(https://media.istockphoto.com/id/510658399/photo/whole-roasted-chicken.jpg?s=612x612&w=0&k=20&c=70WAOuUv6Cja0_MspHDoEEXZA9LlHqAj6QMtx7FZEPA=)`,
                  }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_img.png"
                        sx={{ width: "45px", height: "45px" }}
                      />
                      <span className="author_username">Ali</span>
                    </div>
                    <span className="article_title">
                    houzing
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              {/* =========  Article_4 ========== */}
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage: `url(https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                  }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_img.png"
                        sx={{ width: "45px", height: "45px" }}
                      />
                      <span className="author_username">Jasur</span>
                    </div>
                    <span className="article_title">
                    Bizni papay toptirdi
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>

            <Stack className="article_container">
              <Box className='article_category'>Mashxurlar</Box>
              <Box className='article_news'>
                <h1 style={{color: 'orange'}}>TViewer</h1>
              </Box>
              <Box className='article_news'>
                <h1 style={{color: 'orange'}}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
