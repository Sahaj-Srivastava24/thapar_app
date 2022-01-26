import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const Item = styled(Paper)({
  padding: '2rem 3rem',
  borderRadius: '2.5rem',
});

const ActiveComplaint = styled(Paper)({
  display: 'flex',
  backgroundColor: '#F0F0F3',
  padding: '1.3rem 1rem',
  borderRadius: '1.5rem',
});

const Heading = styled(Typography)({
  fontFamily: 'inherit',
  color: '#575757',
  fontWeight: 'bold',
  fontSize: '1.7rem',
  lineHeight: '1.7rem',
  letterSpacing: '0.08rem',
  paddingBottom: '1rem',
});

const ComplaintHeading = styled(Typography)({
  color: '#575757',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
  letterSpacing: '0.07rem',
  paddingBottom: '0.6rem',
});
const ComplaintSubHeading = styled(Typography)({
  color: '#575757',
  fontFamily: 'inherit',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1rem',
  letterSpacing: '0.05rem',
});

function Complaints() {
  return (
    <Item elevation={0}>
      <Heading variant="h4">Complaints..? Let us know.</Heading>
      <ActiveComplaint>
        <AccountCircleIcon
          style={{ color: '#575757', height: '23px', width: '23px' }}
        />
        <div style={{ padding: ' 0 1rem 0 0.5rem' }}>
          <ComplaintHeading variant="h3">Chetna Mahajan</ComplaintHeading>
          <ComplaintSubHeading variant="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in
            id pariatur illum omnis incidunt nisi molestias repellat ad dolore
            ducimus quis, cumque neque mollitia rem voluptatum aut, repudiandae
            iusto.
          </ComplaintSubHeading>
          <div style={{ margin: '1rem 0 0 0 ' }}>
            <FavoriteRoundedIcon style={{ color: 'red' }} />
            <span style={{ fontWeight: 'bold', padding: '0 0.3rem' }}>13</span>
          </div>
        </div>
      </ActiveComplaint>
    </Item>
  );
}

export default Complaints;
