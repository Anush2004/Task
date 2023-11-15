import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Content from './Content';
import Avatar from '@mui/material/Avatar';

const ProgressCard = () => {
  return (
    <Card style={{ maxWidth: 750, margin: 'auto', marginTop: 40 ,textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '30px 20px' }}>
        <div style={{ fontSize: 40, position: 'relative' }}>
          <Avatar style={{position: 'relative', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#1976d2' }}>
          <EditIcon style={{ color: 'primary' }} />
          </Avatar>
          <LinearProgress style={{ position: 'absolute', top: '50%', left: '100%', width: 310, transform: 'translateY(-50%)' }} variant="determinate" value={0} />
        </div>
        <div style={{ fontSize: 40, position: 'relative' }}>
        <Avatar style={{position: 'relative', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#1976d2' }}>
          <SettingsIcon style={{ color: 'action' }} />
          </Avatar>
          <LinearProgress style={{ position: 'absolute', top: '50%', left: '100%', width: 310, transform: 'translateY(-50%)' }} variant="determinate" value={0} />
        </div>
        <div style={{ fontSize: 40, position: 'relative' }}>
        <Avatar style={{position: 'relative', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#1976d2' }}>
          <PlayCircleOutlineIcon style={{ color: 'error' }} />
          </Avatar>
        </div>
      </div>
      <Divider style={{ marginTop: 25, marginBottom: -15, backgroundColor: 'gray' }} />
      <CardContent style={{ padding: 40, textAlign: 'left' }}>
        <Content />
      </CardContent>
      <Divider style={{ marginBottom: 10, backgroundColor: 'gray', width: '90%' ,marginLeft: 30 }} />
      <Button  size=  "large" variant="contained" color="primary" style={{ marginTop: 0, marginBottom: 20, marginLeft: 40, marginRight: 10, textAlign: 'left' ,fontSize: '18px' }}>
        Continue
      </Button>
    </Card>
  );
};

export default ProgressCard;
