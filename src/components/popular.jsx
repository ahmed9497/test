import { Fragment, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';


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
const Popular = ({movies}) => {
    const classes = useStyles();
   
    const [active, setActive] = useState(0);

   
    return (
        <Box>
            <Grid container spacing={3}>

                {movies && movies.map((item, index) => (
                      <Fragment>
                      {active === index ?
                          <Grid key={index} item xs={12} md={5}>
                              <Paper elevation={16} classes={{ root: classes.paper }}>
                                  <Grid container justifyContent="space-between">
                                      <Grid item xs={12} md={7} style={{ position: 'relative' }}>
                                          <Box padding={2}>
                                              <Typography variant='h5' classes={{ root: classes.root }}>{item?.Title}</Typography>
                                              {/* <Typography classes={{ root: classes.subText }}>{item?.totalSeasons} Seasons</Typography>
                                              <Typography classes={{ root: classes.subText }}>{getEpisodes(item?.seasons)} Episodes</Typography> */}

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

         
        </Box>
    )
}

export default Popular