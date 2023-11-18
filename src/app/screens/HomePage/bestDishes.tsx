import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function BestDishes () {
    return (
        <div className="best_dishes_frame">
            <Container>
                <Stack flexDirection={"column"} alignItems={'center'}>
                  <Box className='category_title'>Trenddagi Ovqatlar</Box>
                  <Stack sx={{mt:'43px'}} flexDirection={"row"}>

                    {/* ========= Trendagi-ovqat-box 2 ============= */}
                    <Box className='dish_box'>
                        <Stack className='dish_img' sx={{backgroundImage: `url('https://burak.foodappers.com/menu/img/food/menu_item_754069.jpg')`}}
                        >
                            <div  className="dish_sale">normal size</div> 
                            <div className="view_btn">
                                Batafsil Ko'rish
                                <img src="icons/Arrow-right.svg" style={{marginLeft: '9px'}} alt="" />    
                            </div>  
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOn/>
                                11
                            </span>
                        </Stack>
                    </Box>

                    {/* ========= Trendagi-ovqat-box 2 ============= */}
                    <Box className='dish_box'>
                        <Stack className='dish_img' sx={{backgroundImage: `url('https://www.aworldtotravel.com/wp-content/uploads/2018/10/pizza-italian-food-best-countries-for-food-around-the-world-a-world-to-travel.jpg')`}}
                        >
                            <div  className="dish_sale">normal size</div> 
                            <div className="view_btn">
                                Batafsil Ko'rish
                                <img src="icons/Arrow-right.svg" style={{marginLeft: '9px'}} alt="" />    
                            </div>  
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOn/>
                                11
                            </span>
                        </Stack>
                    </Box>

                    {/* ========= Trendagi-ovqat-box 3 ============= */}
                    <Box className='dish_box'>
                        <Stack className='dish_img' sx={{backgroundImage: `url('https://dubainight-production.s3.me-south-1.amazonaws.com/legacy/editor/10/fichiers/images/Screen+Shot+2021-05-05+at+2_13_02+PM.png')`}}
                        >
                            <div  className="dish_sale">normal size</div> 
                            <div className="view_btn">
                                Batafsil Ko'rish
                                <img src="icons/Arrow-right.svg" style={{marginLeft: '9px'}} alt="" />    
                            </div>  
                        </Stack>
                        <Stack className="dish_desc">
                            <span className="dish_title_text">Chicken Mayo</span>
                            <span className="dish_desc_text">
                                <MonetizationOn/>
                                11
                            </span>
                        </Stack>
                    </Box>
                  </Stack>
                </Stack>               
            </Container>
        </div>
    )
}