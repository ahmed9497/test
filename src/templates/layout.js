import React from 'react'
import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Video from '@mui/icons-material/VideoFile';
import Movie from '@mui/icons-material/Movie';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../components/sidebar';
import { NavLink} from "react-router-dom";
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import dayjs from 'dayjs';



const drawerWidth = 80;
const nav = [
    {
        path: '/',
        title: 'Home',
        icon: <Home fontSize='large' />

    },
    {
        path: 'series',
        title: 'TV Series',
        icon: <Video fontSize='large' />

    },
    {
        path: 'movies',
        title: 'Movies',
        icon: <Movie fontSize='large' />

    }
];
const useStyles = makeStyles({
    appbar: {
        backgroundColor: "#ebebeb !important",
        boxShadow: 'none !important',
        // borderBottom:'2px solid #e2e2e2',
        color: 'black !important'
        // height:250
    },




})


const Layout = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box pt={6}>


            {nav.map((text, index) => (

                <NavLink key={index} to={text.path} className={({ isActive }) => isActive ? 'active-link' : 'link'}>
                    <Box display={'flex'} py={2} flexDirection={'column'} alignItems={'center'} position={'relative'}>
                        <span>{text.icon}</span>
                        <span className='icon-txt'>{text.title}</span>
                    </Box>

                </NavLink>

            ))}

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', background: '#ebebeb', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                classes={{ root: classes.appbar }}
            >
                <Toolbar
                    classes={{ background: 'red' }}
                >


                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid
                        justifyContent="space-between" // Add it here :)
                        container
                    // spacing={24}
                    >


                        <Grid item>
                            <Typography variant="h4" type="title" >
                                Watch This
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography type="title" color={'secondary'}>
                                {dayjs().format('DD MMM, HH:MM')}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Box display={'flex'} justifyContent={'center'}alignItems={'center'}>
                            <Typography variant="body2" mr={2} type="title" >
                                Name John Doe
                            </Typography>
                           <PersonOutlineIcon/>
                           </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* sidebar navigation */}
            <Sidebar drawerWidth={drawerWidth} mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle} container={container} drawer={drawer} />


            {/* main content */}
            <Outlet />

        </Box>
    )
}

export default Layout