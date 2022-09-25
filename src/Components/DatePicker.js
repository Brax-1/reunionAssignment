import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { styled } from "@mui/material/styles";

const StyledDesktopDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
    width:'100%',
	input: {
		padding: "0",
        fontSize:"20px",
        fontWeight:"900",
        fontFamily: "Fira Sans, sans-serif",
	},
	fieldset: {
		border: "none",
	},
}));


export default function MaterialUIPickers({setTime}) {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    setTime(newValue['$d'].getTime())
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
        <StyledDesktopDatePicker
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
    </LocalizationProvider>
  );
}
