import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = styled(Paper)({
  padding: '2rem 3rem',
  borderRadius: '2.5rem',
});

const Heading = styled(Typography)({
  color: '#575757',
  fontWeight: 'bold',
  fontSize: '1.7rem',
  lineHeight: '1.7rem',
  letterSpacing: '0.08rem',
  paddingBottom: '1rem',
});

const StyledListItem = styled(Typography)({
  fontSize: '1rem',
  letterSpacing: '0.05rem',
  color: '#575757',
  fontWeight: 'bold',
});

const AnnouncementListItem = ({ children }) => (
  <div style={{ margin: '0.5rem 0' }}>
    <FiberManualRecordIcon style={{ fontSize: 'small' }} />
    <StyledListItem variant="span">{children}</StyledListItem>
  </div>
);

const SubHeadings = styled(Typography)({});

function Announcement() {
  return (
    <Item elevation={2}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading variant="h4">Announcement</Heading>
        <ExpandMoreIcon style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <div style={{ margin: '1rem' }}>
        <AnnouncementListItem>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus
          reprehenderit, nemo tempore voluptatum nulla provident doloribus,{' '}
        </AnnouncementListItem>
        <AnnouncementListItem>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus
          reprehenderit, nemo tempore voluptatum nulla provident doloribus,{' '}
        </AnnouncementListItem>
        <AnnouncementListItem>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus
          reprehenderit, nemo tempore voluptatum nulla provident doloribus,{' '}
        </AnnouncementListItem>
        <AnnouncementListItem>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minus
          reprehenderit, nemo tempore voluptatum nulla provident doloribus,{' '}
        </AnnouncementListItem>
      </div>
    </Item>
  );
}

export default Announcement;
