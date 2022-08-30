import { Fragment, useState } from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const useStyles = makeStyles({
    paper: {
        backgroundColor: "#fcbc02 !important",
        // height:250
    },
    root: {
        color: 'white',
        fontWeight: 'bold !important',
       
    },
    subText: {
        color: 'white',
        fontSize: '19px !important'
    },
    hover:{
        '&:hover':{
            cursor:'pointer !important'
        }
    },
    rating:{
        fontWeight:'bold !important',
        fontSize:'13px !important'
    },
    txt:{
        textOverflow:'ellipsis',
        overflow:'hidden',
        whiteSpace:'nowrap',
        fontSize:18,
        fontWeight:'bold !important'
    }

})
const MySeries = ({webSeries}) => {
    const classes = useStyles();
  
    const [active, setActive] = useState(0);
    // total episodes count
    const getEpisodes = (seasons) => {
        let sum = 0;
        sum = seasons.reduce((prev, cur) => {
            return prev + cur.episodes
        }, 0)       
        return sum;
    }
    return (
        <Box>
            <Grid container spacing={3}>

                {webSeries && webSeries.map((item, index) => (
                    <Fragment>
                        {active === index ?
                            <Grid key={index} item xs={12} md={5}>
                                <Paper elevation={16} classes={{ root: classes.paper }}>
                                    <Grid container justifyContent="space-between">
                                        <Grid item xs={12} md={7} style={{ position: 'relative' }}>
                                            <Box padding={2}>
                                                <Typography variant='h5' classes={{ root: classes.root }}>{item?.Title}</Typography>
                                                <Typography classes={{ root: classes.subText }}>{item?.totalSeasons} Seasons</Typography>
                                                <Typography classes={{ root: classes.subText }}>{getEpisodes(item?.seasons)} Episodes</Typography>

                                                <Box className="bottom-txt" sx={{mt:0}} >
                                                    <Typography classes={{ root: classes.subText }}>iMDB Rating:{item?.imdbRating}/10</Typography>
                                                    <Typography classes={{ root: classes.subText }}>Go to iMDB Page</Typography>

                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            <Box padding={2}>

                                                <div className='img-box' style={{
                                                    backgroundImage:`url(${item?.Poster})`,
                                                    backgroundSize:'cover',
                                                    backgroundPosition:'center'
                                                }}>
                                                   
                                                </div>

                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            :
                            <Grid key={index} item xs={6} md={1.8}>
                                <Paper elevation={0} classes={{root:classes.hover}} onClick={() => setActive(index)}>
                                    <Box padding={1} height={250}>

                                        <Box style={{ height: 172 }}>
                                            <img height={'100%'} width={'100%'}
                                                 src={item?.Poster}
                                                alt={"img"}
                                                loading="lazy"
                                            />
                                        </Box>
                                        <Box paddingTop={1}>
                                            <Typography  classes={{root:classes.txt}}>{item?.Title}</Typography>
                                            <Typography  classes={{root:classes.rating}}>iMDB Rating:{item?.imdbRating}/10</Typography>

                                        </Box>

                                    </Box>
                                </Paper>
                            </Grid>
                        }
                    </Fragment>
                ))}

            </Grid>

            {/* Seasons */}

            <Grid container spacing={3} paddingTop={10}>
                {webSeries && webSeries[active]?.seasons?.map((season, index) => (

                    <Grid key={index} item xs={12} md={2}>
                        <Paper rounded elevation={0}>
                            <Box padding={1} height={200}>
                                <Box display={'flex'} justifyContent={'space-between'}>
                                    <Typography variant='h6'>{season.label}</Typography>
                                    <Chip label="iMDB" />
                                </Box>
                                <Box paddingTop={1}>

                                    <Typography variant='body2'>Rating:</Typography>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Box width={100} display={'flex'} >
                                            <CircularProgressbar value={(season.imdb_rating) * 10} text={`${season.imdb_rating}%`}
                                                styles={{
                                                    // Customize the root svg element
                                                    root: {},
                                                    // Customize the path, i.e. the "completed progress"
                                                    path: {
                                                        // Path color
                                                        stroke: `#fcbc02`,
                                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                        strokeLinecap: 'butt',
                                                        // Customize transition animation
                                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                                        // Rotate the path
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    // Customize the circle behind the path, i.e. the "total progress"
                                                    trail: {
                                                        // Trail color
                                                        stroke: '#f9f9f9',
                                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                        strokeLinecap: 'butt',
                                                        // Rotate the trail
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    // Customize the text
                                                    text: {
                                                        // Text color
                                                        fill: '#f88',
                                                        // Text size
                                                        fontSize: '16px',
                                                    },
                                                    // Customize background - only used when the `background` prop is true
                                                    background: {
                                                        fill: '#3e98c7',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}

export default MySeries