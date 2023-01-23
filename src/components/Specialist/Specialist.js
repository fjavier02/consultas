import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Doctors, ListCardSpecialist } from "./../index";
import { Typography } from '@mui/material';


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
        <Typography>{specialistSelect}</Typography>
        <ListCardSpecialist ClassName="animate__animated animate__bounce" listespecialist={listespecialist} handleSpecialistSelectClick={handleSpecialistSelectClick} />
        <Doctors />
      </React.Fragment>
    </div>

  );
}