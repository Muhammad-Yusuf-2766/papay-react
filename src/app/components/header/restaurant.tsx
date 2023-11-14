import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavbarRestaurant (props: any) {
    return (
    <div className='format_restaurant home_navbar'>
       <Container>
        <Stack  flexDirection={'row'} className='navbar_config' justifyContent={'space-between'}>
          <Box>
            <img src='/icons/Papay.svg' alt='Papay_icon'/>
          </Box>
          <Stack 
          flexDirection={'row'} 
          justifyContent={'space-evenly'} 
          alignItems={'center'}
          className='navbar_links'
          >
           <Box className='hover_line' onClick={props.setPath} >
             <NavLink to={'/'} >Bosh Sahifa</NavLink>
           </Box>
           <Box className='hover_line' onClick={props.setPath}>
             <NavLink to={'/restaurant'} activeClassName='underline' >Oshxona</NavLink>
           </Box>
           <Box className='hover_line' onClick={props.setPath}>
             <NavLink to={'/community'} activeClassName='underline' >Jamiyat</NavLink>
           </Box>
           <Box className='hover_line' onClick={props.setPath}>
             <NavLink to={'/orders'} activeClassName='underline' >Buyurtma</NavLink>
           </Box>
           <Box className='hover_line' onClick={props.setPath}>
             <NavLink to={'/help'} activeClassName='underline' >Yordam</NavLink>
           </Box>

           <Box className='hover_line'>
             <IconButton
               aria-label='cart'
               id='basic-button'
               aria-controls={undefined}
               aria-haspopup='true'
               aria-expanded={undefined}
            //    onClick={handleClick}
             >
                <Badge badgeContent={3} color='secondary'>
                    <img src="/icons/shopping_basket.svg" alt="" />
                </Badge>
             </IconButton>
           </Box>

           <Box>
            <Button variant='contained' style={{color:'white', background:'#1976D2'}}>KIRISH</Button>
           </Box>

          </Stack>
        </Stack>
       </Container> 
    </div>)
}   