import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }, 
  title: {
    display: 'none',
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  search: {
    position: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.only('xl')]:{
      width: '60%'
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '59%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      width: '20ch',
    },
  },
  
}));

export default function Appbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{background: '#1976d2'}}>
        <Container>
          <Toolbar>
          <Grid item xl={"4"} xs={"6"}>
            <Typography className={classes.title} variant="h5" noWrap>
              <CloudOutlinedIcon />
              Weather App
            </Typography>
          </Grid>
          <Grid item xl={"4"} xs={"6"}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search City"
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>  
          </Toolbar> 
        </Container> 
      </AppBar>
    </div>
  )
}
