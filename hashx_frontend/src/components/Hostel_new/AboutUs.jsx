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
  letterSpacing: '0.08rem',
  paddingBottom: '1rem',
});

const Content = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#414141',
  // minHeight: '10rem',
});

function AboutUs() {
  return (
    <Item elevation={2}>
      <Heading variant="h4">About</Heading>
      <Content variant="h5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iure
        quod recusandae ducimus inventore quidem obcaecati debitis qui beatae
        corrupti! Sapiente quasi, deserunt cupiditate explicabo est maxime
        aliquid delectus ducimus?Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Explicabo iure quod recusandae ducimus inventore
        quidem obcaecati debitis qui beatae corrupti! Sapiente quasi, deserunt
        cupiditate explicabo est maxime aliquid delectus ducimus?Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Explicabo iure quod
        recusandae ducimus inventore quidem obcaecati debitis qui beatae
        corrupti! Sapiente quasi, deserunt cupiditate explicabo est maxime
        aliquid delectus ducimus?
      </Content>
    </Item>
  );
}

export default AboutUs;
