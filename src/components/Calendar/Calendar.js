import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import dayjs from 'dayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



export default function Calendar(props) {
  const [date, setDate] = React.useState(dayjs());

  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6 || day === 3 || day === 5 ;
  };

  return (
    <Grid item xs={12}>
      <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center' }}>
        Fechas disponibles
      </Typography>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarPicker date={date} shouldDisableDate={isWeekend} disablePast={true} maxDate={dayjs().add(30, 'day')} onChange={(newDate) => setDate(newDate)} />
          </LocalizationProvider>
        </Container>
      </React.Fragment>
    </Grid>
  );
}