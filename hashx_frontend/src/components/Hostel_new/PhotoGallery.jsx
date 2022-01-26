import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

const Item = styled(Paper)({
  padding: '2rem 3rem',
  borderRadius: '2.5rem',
});

const Heading = styled(Typography)({
  color: '#575757',
  fontWeight: 'bold',
  fontSize: '1.7rem',
  lineHeight: '1.7rem',
  paddingBottom: '1rem',
});

const SubHeadings = styled(Typography)({});

function PhotoGallery() {
  return (
    <Item elevation={4}>
      <Heading variant="h4">PhotoGallery</Heading>
    </Item>
  );
}

export default PhotoGallery;
