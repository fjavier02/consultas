import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Doctors } from "../index";


export default function Specialist(props) {
  const [specialistSelect, setSpecialistSelect] = React.useState('');

  const handleSpecialistSelectClick = (event, specialist) => {
    setSpecialistSelect(specialist);
  };
  const [listespecialist, setlistespecialist] = React.useState([
    {
      'name': 'Traumatologia',
      'description': 'Especialidad médica que trata lesiones y enfermedades del sistema musculoesquelético.',
      'img': 'https://i.imgur.com/ekVHqMR.jpg'
    },
    {
      'name': 'Pediatria',
      'description': 'Especialidad médica que se encarga del cuidado de la salud de los niños y adolescentes. Los pediatras son médicos especializados en el diagnóstico y tratamiento de enfermedades y problemas de salud en niños y adolescentes, desde la infancia hasta la edad adulta temprana.',
      'img': 'https://i.imgur.com/cidaDHO.jpg'
    },
    {
      'name': 'Ginecologia',
      'description': 'Especialidad médica que se encarga del cuidado de la salud reproductiva y sexual de las mujeres. Los ginecólogos son médicos especializados en el diagnóstico y tratamiento de enfermedades y problemas de salud relacionados con los órganos reproductivos femeninos, así como en el embarazo y el parto. También pueden ofrecer asesoramiento y orientación sobre temas relacionados con la salud sexual y reproductiva.',
      'img': 'https://i.imgur.com/od5J7nv.jpg'
    },
    {
      'name': 'Neurologia',
      'description': 'Especialidad médica que se encarga del diagnóstico y tratamiento de enfermedades y trastornos del sistema nervioso central y periférico. Los neurológos son médicos especializados en el funcionamiento del cerebro, la médula espinal y los nervios del cuerpo. Pueden tratar afecciones como el ictus, el esclerosis múltiple, el Parkinson y otras enfermedades neurológicas.',
      'img': 'https://i.imgur.com/Nxn4a7t.jpg'
    },
  ]);


  return (
    <div ClassName="margin-top">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="100%">

          <h1 onClick={props.onTest}>Especialidades {props.name ? props.name : ''}</h1>
          <Grid container
            margin={'auto'}
            marginTop={'20px'}
            maxWidth={{ xs: '400px', sm: '720px', md: '1150px' }}
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {listespecialist.map((specialist) => {
              return (
                <Grid margin={'auto'} >
                  <Card sx={{ maxWidth: 345 }}>
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
                      <Button size="small" color="primary" onClick={(event) => handleSpecialistSelectClick( event, specialist.name)}>
                        Solicitar Consulta
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Doctors />
      </React.Fragment>
    </div>

  );
}