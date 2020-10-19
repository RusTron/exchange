import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Container, Grid } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    visitImage: {
      flexGrow: 1,
    },
    headerView: {
      height: '400px',
      backgroundSize: '100% 600px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    },
    innerBlock: {
      height: '300px',
      backgroundPosition: 'center',
      margin: '0 0 0 300px',
    },
    convertButton: {
      background: "#dce775",
      '&:hover': {
        background: "#d4e157"
      }
    }
  }));

export const Home = () => {

  const classes = useStyles();

  return (
    <div className={classes.visitImage}>
      <Paper 
        className={classes.headerView}
        style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/07/23/12/05/stock-exchange-3556719_1280.jpg)'}}
      >
        <div className={classes.innerBlock}></div>
        <Container>
          <Grid container>
            <Grid item md={6}>
            <Button className={classes.convertButton} variant="contained" >
              Try to Convert
            </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}
