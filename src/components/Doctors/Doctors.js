import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Schedule, Calendar, Resumen, ListDoctors } from "./../index";

export default function Doctors(props) {
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [doctorSelect, setDoctorSelect] = React.useState({});
  const [doctorStatusSelect, setDoctorStatusSelect] = React.useState(0);
  const [selectedIndexSchedule, setSelectedIndexSchedule] = React.useState();


  const [listDoctors, setlistDoctors] = React.useState([
    {
      'name': 'Francisco Lopez',
      'avatar': 'https://avatars.githubusercontent.com/u/72283054?v=4',
      'description': 'Especialista en Traumatologia',
      'working': 1,
      'resume': 'Profesional dedicado con vasta experiencia brindando a los pacientes tratamientos innovadores. Comprometidos a servir como un apoyo continuo a través de la evaluación del diagnóstico y la implementación del tratamiento. Experiencia en la colaboración con otros proveedores de servicios relacionados para garantizar que los pacientes reciban un apoyo completo.',
      'schedule': ['07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm'],
      'days': [1,2,3,4],
      'skill': ['habilidad 1', 'habilidad 2', 'habilidad 3', 'habilidad 4']
    },
    {
      'name': 'Yordy Sevilla',
      'description': 'Especialista en Traumatologia',
      'working': 1,
      'resume': 'Profesional dedicado con vasta experiencia brindando a los pacientes tratamientos innovadores. Comprometidos a servir como un apoyo continuo a través de la evaluación del diagnóstico y la implementación del tratamiento. Experiencia en la colaboración con otros proveedores de servicios relacionados para garantizar que los pacientes reciban un apoyo completo.',
      'schedule': ['10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm'],
      'days': [1,2,3,4,5],
      'skill': ['habilidad 1', 'habilidad 2', 'habilidad 3']
    },
    {
      'name': 'Gledys Hernandez',
      'description': 'Especialista en Traumatologia',
      'working': 1,
      'resume': 'Profesional dedicado con vasta experiencia brindando a los pacientes tratamientos innovadores. Comprometidos a servir como un apoyo continuo a través de la evaluación del diagnóstico y la implementación del tratamiento. Experiencia en la colaboración con otros proveedores de servicios relacionados para garantizar que los pacientes reciban un apoyo completo.',
      'schedule': ['12:00 am','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm'],
      'days': [2,4],
      'skill': ['habilidad 1', 'habilidad 2']
    },
  ]);
  // const [selectedDoctor, setselectedDoctor] = [];
  // const [date, setDate] = React.useState(dayjs('2022-04-07'));

  const handleListItemClick = (event, index, doctor) => {
    setSelectedIndex(index);
    setDoctorSelect(doctor);
    setDoctorStatusSelect(1);
  };
  const handleListScheduleClick = (event, index) => {
    setSelectedIndexSchedule(index);
  };
  
  
  return (
    <Box sx={{ width: '100%' }} style={{ paddingTop: '32px' }}>
      <Button size="small" color="primary">
          <ArrowBackIcon />
          <Typography disablePadding gutterBottom variant="button" component="div">
            Volver
          </Typography>
        </Button>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <ListDoctors selectedIndex={selectedIndex} listDoctors={listDoctors} handleListItemClick={handleListItemClick} />
        
        <Resumen doctorSelect={doctorSelect}  doctorStatusSelect={doctorStatusSelect} />
        <Grid item xs={12} md={5} sm={12}>
          <Calendar />
          <Schedule doctorStatusSelect={doctorStatusSelect} doctorSelect={doctorSelect} onListScheduleClick={handleListScheduleClick} />
        </Grid>

      </Grid>
    </Box>
  );
}
