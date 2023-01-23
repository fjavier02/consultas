import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


export default function Schedule(props) {

  return (
    <Grid container  margin={'0 auto'} >
      <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', margin: '0.35rem auto' }}>
        Horarios disponibles
      </Typography>
      { props.doctorStatusSelect ? 
        props.doctorSelect.schedule.map((schedule, index) => {
        return (
          
          <ListItem
          key={index}
          secondaryAction={
            <Button size="small" variant="contained" color="primary">
              Solicitar Consulta
              <ArrowForwardIcon />
            </Button>
          }
          onClick={(event) => props.handleListScheduleClick(event, index)}
          component="div"
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary={schedule} />
          </ListItemButton>
        </ListItem>
        );
        })
        :
        ''
      }
    </Grid>
  );
}
