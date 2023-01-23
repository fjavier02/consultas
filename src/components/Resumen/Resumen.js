import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


export default function Resumen(props) {

  return (
    <Grid item xs={12} md={3} sm={12} style={{ padding: '10px 16px' }}>
      <Avatar
        alt="Remy Sharp"
        src={props.doctorSelect.avatar}
        sx={{ width: 120, height: 120, margin: '0 auto' }}
      />
      <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center' }}>
        {props.doctorSelect.name}
      </Typography>
      <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'justify' }} >
        {props.doctorSelect.resume}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Habilidades
      </Typography>
      <List>
        {props.doctorStatusSelect ?
          props.doctorSelect.skill.map((skill, index) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={skill} />
                </ListItemButton>
              </ListItem>
            );
          })
          :
          ''
        }
      </List>
    </Grid>
  );
}
