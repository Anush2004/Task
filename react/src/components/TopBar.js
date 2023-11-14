import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProgressCard from './ProgressCard';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TopBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} className="bg-blue-300">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secondary' indicatorColor='secondary'>
          <Tab label="Tab 1" {...a11yProps(0)}  />
          <Tab label="Tab 2" {...a11yProps(1)} /> 
          <Tab label="Tab 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProgressCard/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Tab Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Tab Three
      </CustomTabPanel>
    </Box>
  );
}