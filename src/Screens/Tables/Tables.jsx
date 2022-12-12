import React, { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import TextField from "@mui/material/TextField";
import "./Tables.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Tables = (props) => {
  const houseId = props.mainData.house_id;
  const address = props.mainData.address;
  const zone = props.mainData.zone;
  const area = props.mainData.area;
  const locality = props.mainData.location;

  const [data , setData] = useState()

  const newData = []

  useEffect(() => {
    console.log(newData);
  } , [newData])

  useEffect(() => {
    fetch("https://jusco.rudrayati.co.in/api/api/read.php")
    .then((response) => response.json())
    .then((e) => newData.push(e))
  } , [])

  return (
    <div>
      <Heading />
      <form className="survey_form">
        <TextField
          id="outlined-read-only-input"
          label="HouseId"
          className="survey_form_text"
          defaultValue={houseId}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Address"
          className="survey_form_text"
          defaultValue={address}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Zone"
          className="survey_form_text"
          defaultValue={zone}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Area"
          className="survey_form_text"
          defaultValue={area}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Locality"
          className="survey_form_text"
          defaultValue={locality}
          InputProps={{
            readOnly: true,
          }}
        />
        {/* <div clas>
          <p>1. App usage</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Weitage/Score</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="if no (0)"
              />
              <FormControlLabel value="1" control={<Radio />} label="if yes (1)" />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="if yes (2)"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="if yes (3)"
              />
            </RadioGroup>
          </FormControl>
        </div> */}
      </form>
    </div>
  );
};

export default Tables;
