import { Favorite } from "@mui/icons-material";
import { AspectRatio,  Card, CardOverflow, CssVarsProvider, IconButton, Link, Typography } from "@mui/joy";
import { Box, Container, Stack,Button } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from '@mui/icons-material/Call';
import VisibilityIcon from '@mui/icons-material/Visibility';


export function BestRestaurants () {    
    return (
        <div className="best_restaurant_frame">
            <img src="icons/Setka_icon.svg" alt="" style={{position:'absolute', left:'6%', transform:'rotate(90degree)'}} />

            <Container sx={{paddingTop:'153px'}}>
                <Stack flexDirection={'column'} alignItems={'center'}>
                    <Box className='category_title'>Zo’r Restaurantlar</Box>
                    <Stack flexDirection={'row'} sx={{ ml:"37px", mt:"43px"}}>
                        <CssVarsProvider> {/*  CssVarsProvider bizga MUI ni ichida MUI/joy ni style larini ishlata olishligimiz uchun kerak  */}

                            {/*============  Card 1 ======== */}
                           <Card 
                             variant="outlined"
                             sx={{ 
                               minHeight: 430, 
                               minWidth:325, 
                               mr:'35px', 
                               cursor:'pointer', 
                             }}
                            >
                              <CardOverflow>
                                <AspectRatio ratio={'1'}>
                                  <img src="restaurant/Top_restaurant_3.jpg" alt="Restaurant_img" />
                                </AspectRatio>
                                <IconButton 
                                  aria-label="Like minimal photography"
                                  size="md"
                                  variant="solid"
                                  color="neutral"
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

                            {/*============  Card 2 ======== */}
                           <Card 
                             variant="outlined"
                             sx={{ 
                               minHeight: 430, 
                               minWidth:325, 
                               mr:'35px', 
                               cursor:'pointer', 
                             }}
                            >
                              <CardOverflow>
                                <AspectRatio ratio={'1'}>
                                  <img src="restaurant/Top_restaurant_4.jpg" alt="Restaurant_img" />
                                </AspectRatio>
                                <IconButton 
                                  aria-label="Like minimal photography"
                                  size="md"
                                  variant="solid"
                                  color="neutral"
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

                            {/*============  Card 3 ======== */}
                           <Card 
                             variant="outlined"
                             sx={{ 
                               minHeight: 430, 
                               minWidth:325, 
                               mr:'35px', 
                               cursor:'pointer', 
                             }}
                            >
                              <CardOverflow>
                                <AspectRatio ratio={'1'}>
                                  <img src="restaurant/Top_restaurant_2.webp" alt="Restaurant_img" />
                                </AspectRatio>
                                <IconButton 
                                  aria-label="Like minimal photography"
                                  size="md"
                                  variant="solid"
                                  color="neutral"
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

                            {/*============  Card 4 ======== */}
                           <Card 
                             variant="outlined"
                             sx={{ 
                               minHeight: 430, 
                               minWidth:325, 
                               mr:'35px', 
                               cursor:'pointer', 
                             }}
                            >
                              <CardOverflow>
                                <AspectRatio ratio={'1'}>
                                  <img src="restaurant/default_image.jpg" alt="Restaurant_img" />
                                </AspectRatio>
                                <IconButton 
                                  aria-label="Like minimal photography"
                                  size="md"
                                  variant="solid"
                                  color="neutral"
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

                        </CssVarsProvider>
                        
                    </Stack>
                    <Stack 
                    flexDirection={'row'} 
                    justifyContent={'flex-end'}  
                    style={{width:"100%", marginTop:"20px"}}>
                      <Button style={{background:"#1976d2",color:'white'}}>Barchasini Ko'rish</Button>
                    </Stack>
                </Stack>
             
            </Container>
        </div>
    )
}