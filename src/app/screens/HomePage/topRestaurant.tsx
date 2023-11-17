import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';


export function TopRestaurants () {
    return (
        <div className="top_restaurant_frame">
            <Container>
                <Stack 
                  flexDirection={'column'} 
                  alignItems={'center'} 
                  sx={{mt: '45px'}}
                >
                    <Box className='category_title'>
                        TOP Restaurantlar
                    </Box>
                    <Stack sx={{ml:'43px', mt:'43px'}} flexDirection={'row'} >
                        <CssVarsProvider> 

                            {/*============  Card 1 ======== */}
                           <Card
                                // variant="outlined" 
                                sx={{ 
                                  minHeight: 430, 
                                  minWidth:325, 
                                  mr:'35px', 
                                  cursor:'pointer', 
                                }}
                            >
                             <CardCover>
                               <img
                                 src="/restaurant/default_image.jpg"
                                 loading="lazy"
                                 alt=""
                               />
                             </CardCover>
                             <CardCover
                               sx={{
                                 background:
                                   'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),            linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                               }}
                             />
                             <CardContent sx={{ justifyContent: 'flex-end' }}>
                               <Typography level="h3" textColor="#fff">
                                 Burak CZN
                               </Typography>
                               <Typography
                                 startDecorator={<LocationOnRoundedIcon />}
                                 textColor="neutral.300"
                               >
                                 Turkey, Istanbul
                               </Typography>
                             </CardContent>
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
                                    transform: "translateY(40%)",
                                    color: "rgb(0, 0, 0, .4)"
                                  }}
                                  >
                                    <Favorite style={{fill:'white'}}/>
                                </IconButton>

                                <Typography 
                                  level="body-md"
                                  sx={{
                                    fontWeight: 'md',
                                    color: "neutral.300",
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
                                    color: "neutral.300",
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
                                sx={{ 
                                  minHeight: 430, 
                                  minWidth:325, 
                                  mr:'35px', 
                                  cursor:'pointer', 
                                }}
                            >
                             <CardCover>
                               <img
                                 src="/restaurant/default_image.jpg"
                                 loading="lazy"
                                 alt=""
                               />
                             </CardCover>
                             <CardCover
                               sx={{
                                 background:
                                   'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),            linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                               }}
                             />
                             <CardContent sx={{ justifyContent: 'flex-end' }}>
                               <Typography level="h3" textColor="#fff">
                                 Burak CZN
                               </Typography>
                               <Typography
                                 startDecorator={<LocationOnRoundedIcon />}
                                 textColor="neutral.300"
                               >
                                 Turkey, Istanbul
                               </Typography>
                             </CardContent>
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
                                    transform: "translateY(40%)",
                                    color: "rgb(0, 0, 0, .4)"
                                  }}
                                  >
                                    <Favorite style={{fill:'white'}}/>
                                </IconButton>

                                <Typography 
                                  level="body-md"
                                  sx={{
                                    fontWeight: 'md',
                                    color: "neutral.300",
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
                                    color: "neutral.300",
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
                                sx={{ 
                                  minHeight: 430, 
                                  minWidth:325, 
                                  mr:'35px', 
                                  cursor:'pointer', 
                                }}
                            >
                             <CardCover>
                               <img
                                 src="/restaurant/default_image.jpg"
                                 loading="lazy"
                                 alt=""
                               />
                             </CardCover>
                             <CardCover
                               sx={{
                                 background:
                                   'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),            linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                               }}
                             />
                             <CardContent sx={{ justifyContent: 'flex-end' }}>
                               <Typography level="h3" textColor="#fff">
                                 Burak CZN
                               </Typography>
                               <Typography
                                 startDecorator={<LocationOnRoundedIcon />}
                                 textColor="neutral.300"
                               >
                                 Turkey, Istanbul
                               </Typography>
                             </CardContent>
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
                                    transform: "translateY(40%)",
                                    color: "rgb(0, 0, 0, .4)"
                                  }}
                                  >
                                    <Favorite style={{fill:'white'}}/>
                                </IconButton>

                                <Typography 
                                  level="body-md"
                                  sx={{
                                    fontWeight: 'md',
                                    color: "neutral.300",
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
                                    color: "neutral.300",
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
                                sx={{ 
                                  minHeight: 430, 
                                  minWidth:325, 
                                  mr:'35px', 
                                  cursor:'pointer', 
                                }}
                            >
                             <CardCover>
                               <img
                                 src="/restaurant/default_image.jpg"
                                 loading="lazy"
                                 alt=""
                               />
                             </CardCover>
                             <CardCover
                               sx={{
                                 background:
                                   'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),            linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                               }}
                             />
                             <CardContent sx={{ justifyContent: 'flex-end' }}>
                               <Typography level="h3" textColor="#fff">
                                 Burak CZN
                               </Typography>
                               <Typography
                                 startDecorator={<LocationOnRoundedIcon />}
                                 textColor="neutral.300"
                               >
                                 Turkey, Istanbul
                               </Typography>
                             </CardContent>
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
                                    transform: "translateY(40%)",
                                    color: "rgb(0, 0, 0, .4)"
                                  }}
                                  >
                                    <Favorite style={{fill:'white'}}/>
                                </IconButton>

                                <Typography 
                                  level="body-md"
                                  sx={{
                                    fontWeight: 'md',
                                    color: "neutral.300",
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
                                    color: "neutral.300",
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
                </Stack>
            </Container>
        </div>
    )
}