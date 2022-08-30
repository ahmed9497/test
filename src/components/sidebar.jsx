import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    paper: {
        backgroundColor: "#fcbc02 !important",
        // height:250
    },
    drawerPaper: {
        backgroundColor:'#3b3b3b !important'
        
    },
    

})


const Sidebar = ({drawerWidth,mobileOpen,handleDrawerToggle,drawer,container}) => {
    const classes = useStyles();
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
           
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                classes={{ paper: classes.drawerPaper }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {background:'gray', boxSizing: 'border-box', width: drawerWidth },
                }}
               
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    )
}

export default Sidebar