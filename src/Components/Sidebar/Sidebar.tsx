import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import React from 'react';
import { HeaderType } from '../Header/Header';

const Sidebar = (props: HeaderType) => {
  const drawerWidth = 300;

  const handleDrawerToggle = () => {
    props.setIsSideBarOpen(!props.IsSideBarOpen);
  };

  // const drawer = (
  //   <div>
  //     <List>
  //       <ListItem button key={'123'}>
  //         <ListItemText primary={'123s'} />
  //       </ListItem>
  //     </List>
  //   </div>
  // );
  return (
    <div>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          open={props.IsSideBarOpen}
          variant='temporary'
          anchor='left'
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {props.children}
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
