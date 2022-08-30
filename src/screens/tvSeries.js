import React, { useEffect } from 'react'
import { Tab, Tabs, Typography, Box, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MySeries from '../components/mySeries';
import Popular from '../components/popular';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../utils/db.json';


const drawerWidth = 60;
const useStyles = makeStyles({

    tabroot: {

        "& .Mui-selected": {
            color: 'black !important',
            background: '#fcbc02 !important',
            minHeight: '38px',
            height: '38px',
            borderRadius: 4
        }
    }
})
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const TvSeries = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const [arrange, setArrange] = React.useState('');    
    const [webSeries, setWebseries] = React.useState([]);
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        
        setWebseries(data.webseries);
        setMovies(data.movies);
    }, [])

    const handleChange = (event, newValue) => {
        setArrange('')
        setValue(newValue);
    };
    const sorting = (event) => {
      
    //   For Popular series sorting
        if(value === 1){
           switch (event.target.value) {
            // a-z
            case 1:{
                const sortedMovies = movies ;
                sortedMovies.sort((a,b)=>(a.Title.localeCompare(b.Title)));
                setMovies([...sortedMovies]);

                break;
            }
                // z-a
            case 2: {
                const sortedMovies = movies ;
                sortedMovies.sort((a,b)=>(b.Title.localeCompare(a.Title)));
                setMovies([...sortedMovies]);

                break;
            }
            // Rating(low to high)
            case 3:{
                const sortedMovies = movies ;
                sortedMovies.sort((a,b)=>(a.imdbRating.localeCompare(b.imdbRating)));
                setMovies([...sortedMovies]);
                break;
            }
            // Rating(high to low)
            case 4:{
                const sortedMovies = movies ;
                sortedMovies.sort((a,b)=>(b.imdbRating.localeCompare(a.imdbRating)));
                setMovies([...sortedMovies]);
                break;
            }
            default:
                break;
           }
      }
    //   For My series sorting

      else{
        switch (event.target.value) {
            // a-z
            case 1:{
                const sortedSeries = webSeries ;
                sortedSeries.sort((a,b)=>(a.Title.localeCompare(b.Title)));
                setWebseries([...sortedSeries]);

                break;
            }
                // z-a
            case 2: {
                const sortedSeries = webSeries ;
                sortedSeries.sort((a,b)=>(b.Title.localeCompare(a.Title)));
                setWebseries([...sortedSeries]);

                break;
            }
            // Rating(low to high)
            case 3:{
                const sortedSeries = webSeries ;
                sortedSeries.sort((a,b)=>(a.imdbRating.localeCompare(b.imdbRating)));
                setWebseries([...sortedSeries]);
                break;
            }
            // Rating(high to low)
            case 4:{
                const sortedSeries = webSeries ;
                sortedSeries.sort((a,b)=>(b.imdbRating.localeCompare(a.imdbRating)));
                setMovies([...sortedSeries]);
                break;
            }
            default:
                break;
           }
      }

      setArrange(event.target.value)


    };


    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Box sx={{ borderTop: '2px solid lightgray', pt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            },
                        }}
                        aria-label="secondary tabs example"
                        classes={{ root: classes.tabroot }}
                    >
                        <Tab value={0} label={'My Series'} />
                        <Tab value={1} label={'Popular'} />

                    </Tabs>
                    <Box display={'flex'} alignItems={'center'}>
                        <Typography variant="p" mr={2}>Sort By:</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Sorting</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={arrange}
                            label="Sorting"
                            onChange={sorting}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Alphabet(a-z)</MenuItem>
                            <MenuItem value={2}>Alphabet(z-a)</MenuItem>
                            <MenuItem value={3}>Rating(low to high)</MenuItem>
                            <MenuItem value={4}>Rating(high to low)</MenuItem>
                            
                        </Select>
                    </FormControl>
                    </Box>
                </Box>
                <TabPanel value={value} index={0}>
                    <MySeries webSeries={webSeries}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Popular movies={movies}/>
                </TabPanel>
            </Box>
        </Box>
    )
}

export default TvSeries