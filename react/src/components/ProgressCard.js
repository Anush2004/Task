import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/system';
import Content from './Content';

const StyledCard = styled(Card)({
  maxWidth: 700,
  margin: 'auto',
  
  marginTop: theme => theme.spacing(10),
});

const StyledProgress = styled(LinearProgress)({
  marginTop: theme => theme.spacing(2),
});

const StyledIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: "15px",
  marginRight: "15px",
});

const StyledIcon = styled('div')({
  fontSize: 40,
});

const StyledDivider = styled(Divider)({
  marginTop: theme => theme.spacing(2),
  marginBottom: theme => theme.spacing(2),
  backgroundColor: theme => theme.palette.divider,
  marginBottom: "10px",

});

const StyledContent = styled(CardContent)({
  padding: theme => theme.spacing(2),
  textAlign: 'left',
  padding : "35px",
});

const StyledButton = styled(Button)({
  marginTop: theme => theme.spacing(2),
  marginBottom: '10px',
  marginLeft: '10px',
    marginRight: '10px',

  
});

const ProgressCard = () => {
  return (
    <StyledCard>
      <StyledIcons>
        <StyledIcon>
          <CheckCircleIcon color="primary" />
        </StyledIcon>
        <StyledDivider orientation="vertical" />
        <StyledIcon>
          <HourglassEmptyIcon color="action" />
        </StyledIcon>
        <StyledDivider orientation="vertical" />
        <StyledIcon>
          <ErrorIcon color="error" />
        </StyledIcon>
      </StyledIcons>
      <StyledDivider />
      <StyledContent>
        <Content />
      </StyledContent>
      <StyledDivider />
      <StyledButton variant="contained" color="primary" >
        Continue
      </StyledButton>
    </StyledCard>
  );
};

export default ProgressCard;
