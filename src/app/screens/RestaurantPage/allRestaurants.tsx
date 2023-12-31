import { Box, Button, Container, Pagination, PaginationItem, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import  IconButton  from "@mui/joy/IconButton";
import React, { useEffect } from "react";
import { AspectRatio, Card, CardOverflow, CssVarsProvider, Link, Typography } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from '@mui/icons-material/Call';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
// ============  REDUX ============//
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetRestaurants } from "../../screens/RestaurantPage/selector";
import { Restaurant } from "../../../types/user";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setTargetRestaurants
} from "../../screens/RestaurantPage/slice";

const order_list =Array.from(Array(8).keys());

//===== Redux Slice ===== //
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) => dispach(setTargetRestaurants(data)),
});

//===== Redux Selector ===== //
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants,
  })
);

export function AllRestaurants() {
    //===== Initialization ===== //
    const {setTargetRestaurants} = actionDispatch(useDispatch())
    const {targetRestaurants} = useSelector(targetRestaurantsRetriever)

    useEffect(() => {
      // ToDo: retrieve_Target_Restaurants data
    }, [])

    return <div className="all_restaurants">
        <Container>
            <Stack className="column" alignItems={"center"}>
                <Box className="fill_search_box">
                    <Box className='fill_box'>
                        <a href="#">Zo'r</a>
                        <a href="#">Mashxur</a>
                        <a href="#">Trenddagi</a>
                        <a href="#">Yangi</a>
                    </Box>
                    <Box className='search_big_box'>
                        <form className="search_form" action="" method="">
                            <input 
                              className="searchInput"
                              type="search"
                              name="resSearch"
                              placeholder="Qidiruv"      
                            />
                            <Button
                              className="button_search"
                              variant="contained"
                              endIcon={<SearchIcon/>}
                            >
                                Izlash
                            </Button>
                        </form>
                    </Box>
                </Box>

            <Stack className="all_res_box">
                <CssVarsProvider>
                     {order_list.map(ele => {
                        return (
                             <Card
                             variant="outlined"
                             sx={{ 
                               minHeight: 410, 
                               minWidth:290, 
                               mx:'17px', 
                               my:'20px', 
                             }}
                            >
                              <CardOverflow>
                                <AspectRatio ratio={'1'}>
                                  <img src="/restaurant/burak restaurant.jpg" alt="Restaurant_img" />
                                </AspectRatio>
                                <IconButton 
                                  aria-label="Like minimal photography"
                                  size="md"
                                  variant="solid"
                                  color="neutral"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                  }}
                                  sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    right: '1rem',
                                    bottom: 45,
                                    transform: "translateY(165%)",
                                    color: "rgb(0, 0, 0, .4)"
                                  }}
                                  >
                                    <Favorite style={{fill:'white'}}/>
                                </IconButton> 
                              </CardOverflow> 
                              <Typography level="h2" sx={{fontSize:"md", mt: 2}}>
                                 Burak CZN restaurant
                               </Typography> 
                               <Typography level="body-md" sx={{mb:2}}>
                                <Link
                                  href=''
                                  startDecorator={<LocationOnRoundedIcon/>}
                                  textColor={'neutral.700'}
                                >
                                    Istanbul, bahcesaray 4-45
                                </Link>
                               </Typography>
                               <Typography level="body-md" sx={{mb:2}}>
                                <Link
                                  href=''
                                  startDecorator={<CallIcon/>}
                                  textColor={'neutral.700'}
                                >
                                     + 90 312 213 2965
                                </Link>
                               </Typography>
                               <CardOverflow
                               sx={{
                                display: 'flex',
                                flexDirection:'row',
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--card-padding)",
                                borderColor: "neutral.outlinedBorder",
                                borderTop: "1px solid"
                               }}
                             >
                                
                                <Typography 
                                  level="body-md"
                                  sx={{
                                    fontWeight: 'md',
                                    color: "neutral",
                                    display: "flex",
                                    alignItems: "center",
                                    ml:'15px'
                                  }}
                                >
                                    100{" "}
                                    <VisibilityIcon sx={{fontSize: 20, ml:'5px'}} />
                                </Typography>
                                <Box sx={{width: 2, bgcolor:'divider'}}/>
                                
                                <Typography
                                   sx={{
                                    fontWeight:'md',
                                    color: "neutral",
                                    alignItems: 'center',
                                    display:'flex'
                                   }}
                                >
                                    <div>50</div>
                                    <Favorite sx={{fontSize: 20, marginLeft:'5px'}} />
                                </Typography>
                             </CardOverflow>  
                            </Card>
                        )
                     })}
                          
                </CssVarsProvider>
            </Stack>

            <Stack className="bottom_box">
                <img  className="line_img" src="/icons/Setka_icon.svg" alt="" />
                <Pagination
                 count={3}
                 page={1}
                 renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous:ArrowBackIcon,
                        next: ArrowForwardIcon
                      }}
                      {...item}
                      color="secondary"
                      />
                 )}          
                />
                <img className="line_img" src="/icons/setka_2.svg" alt="" />
            </Stack>
            </Stack>
        </Container>
    </div>
}