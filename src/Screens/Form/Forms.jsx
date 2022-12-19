import React, { useEffect, useLayoutEffect, useState } from "react";
import Heading from "../Components/Heading";
import TextField from "@mui/material/TextField";
import "./Forms.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Forms = (props) => {
  const houseId = props.mainData.house_id;
  const address = props.mainData.address;
  const zone = props.mainData.zone;
  const area = props.mainData.area;
  const locality = props.mainData.location;

  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [marks, setMarks] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/read")
      .then((response) => response.json())
      .then((e) => setQuestions(e[1].body));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/read")
      .then((response) => response.json())
      .then((e) => setOptions(e[0].body));
  }, []);


  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log("Hooo gya");
  }

  return (
    <div>
      <Heading />
      <form className="survey_form" onSubmit={handleOnSubmit}>
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

        {questions.map((item) => (
          <div className="questions_box" key={item.id}>
            <h3>
              {item.id}. {item.question}
            </h3>
            {item.choice}
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Weitage/Score
              </FormLabel>
              {options.map((e) => (
                <div>
                  <label>
                    <input
                      type="radio"
                      value={e.marks}
                      name={e.id}
                      key={e.id}
                      onChange={() =>
                        setAnswers((answer) => ({
                          ...answer,
                          [item.id]: e.marks,
                        }))
                      }
                    />
                    {e.label}
                  </label>
                </div>
              ))}
            </FormControl>
            <TextField
              id="outlined-read-only-input"
              label="Marks"
              value={marks}
              InputProps={{
                readOnly: true,
              }}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
          </div>
        ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Forms;
