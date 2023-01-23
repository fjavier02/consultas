import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { lightBlue } from '@mui/material/colors';


export default function ListDoctors(props) {

  return (
    <Grid item xs={12} md={4} sm={12}>
      <List component="nav" sx={{ width: '100%', bgcolor: 'background.paper' }}>

        {props.listDoctors.map((doctor, index) => {
          return (
            <ListItemButton
              disabled={0}
              selected={props.selectedIndex === index}
              onClick={(event) => props.handleListItemClick(event, index, doctor)}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: lightBlue[500] }}>
                  <LocalHospitalIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={doctor.name} secondary={doctor.description} />
            </ListItemButton>
          );
        })}
      </List>
    </Grid>
  );
}
