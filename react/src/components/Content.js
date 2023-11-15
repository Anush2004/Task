// Content.jsx
import React, { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Switch,FormGroup , Checkbox } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Content = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [colorOption, setColorOption] = useState('red');
  const [toggleValues, setToggleValues] = useState(Array(10).fill(false));

  const handleColorOptionChange = (event) => {
    setColorOption(event.target.value);
  };

  const handleToggleChange = (index) => {
    const newToggleValues = [...toggleValues];
    newToggleValues[index] = !newToggleValues[index];
    setToggleValues(newToggleValues);
  };

  return (
    <div className="m-1 text-left">
      <p>Where is the company logo?</p>
      <FormControl component="fieldset" className="mb-4">
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox icon={<CircleOutlinedIcon />} checkedIcon={<TaskAltIcon/>} style={{ borderRadius: '50%' }} />}
            label="Left"
            className='p-1'
          />
            <FormControlLabel   
            control={<Checkbox icon={<CircleOutlinedIcon /> } checkedIcon={<TaskAltIcon />} style={{ borderRadius: '50%' }} />}
            label="Right"
            className='p-1'
            />
            <FormControlLabel
            control={<Checkbox icon={<CircleOutlinedIcon />} checkedIcon={<TaskAltIcon />} style={{ borderRadius: '50%' }} />}
            label="Center"
            className='p-1'
            />
            <FormControlLabel
            control={<Checkbox icon={<CircleOutlinedIcon />} checkedIcon={<TaskAltIcon />} style={{ borderRadius: '50%' }} />}
            label="Top"
            className='p-1'
            />
        </FormGroup>
      </FormControl>
      <p>Preset Color</p>
      <FormControl component="fieldset" className="mb-4">
        <RadioGroup
            row
          aria-label="dot-color"
          name="dot-color"
          value={colorOption}
          onChange={handleColorOptionChange}
          className="flex flex-row"
        >
          <FormControlLabel value="blue" control={<Radio style={{ color: '#1976d2' }} />} label="Blue (#1976d2)" />
          <FormControlLabel value="red" control={<Radio style={{ color: '#ff0000' }} />} label="Red (#ff0000)" className='p-1' />
        </RadioGroup>
        <p className="mb-3">Preset Apply only: Header Background, Button, Radio Button & Switch</p>

  </FormControl>
   <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Header" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Footer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Drawer Overlay Mode (required Header or Footer)" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a left-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a right-side Drawer" />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a navigation tabs (requires Header) " />
      <FormControlLabel control={<Switch defaultChecked />} label="I want a Bottom Menu (requires Footer)" />
    </FormGroup>

    </div>
  );
};

export default Content;
