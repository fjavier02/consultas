import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';


export default function ListCardSpecialist(props) {



  return (
    <Container maxWidth="100%">

      <h1 onClick={props.onTest}>Especialidades {props.name ? props.name : ''}</h1>
      <Grid container
        margin={'auto'}
        marginTop={'20px'}
        maxWidth={{ xs: '400px', sm: '720px', md: '1150px' }}
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {props.listespecialist.map((specialist) => {
          return (
            <Grid margin={'auto'} >
              <Card sx={{ maxWidth: 345 }} onClick={(event) => props.handleSpecialistSelectClick(event, specialist.name)}>
                <CardActionArea>
                  {/* img Width=345px  Height=140px */}
                  <CardMedia
                    component="img"
                    height="140"
                    image={specialist.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {specialist.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" height={'81px'} sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 4,
                    }}>
                      {specialist.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" >
                    Solicitar Consulta
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}