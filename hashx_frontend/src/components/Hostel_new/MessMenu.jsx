import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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

const MealTitle = styled(Typography)({
  color: '#575757',
  fontWeight: 'bold',
  lineHeight: '1.7rem',
  // paddingBottom: '1rem',
  fontSize: '1.3rem',
});

const StyledAccordion = styled(Accordion)({
  margin: '1rem 0',
});

const StyledAccordionSummary = styled(AccordionSummary)({
  backgroundColor: '#E1E1E1',
  height: '3rem',
  border: 'none',
  borderRadius: '1rem 1rem 0 0',
  // paddingTop: '1rem',
});

const StyledAccordionDetails = styled(AccordionDetails)({
  backgroundColor: 'rgba(196, 196, 196, 0.2)',
  // height: '3rem',
  border: 'none',
  borderRadius: '0 0 1rem 1rem',
  // paddingTop: '1rem',
});

const SubHeadings = styled(Typography)({});

function MessMenu() {
  const [expandedState, setExpandedState] = React.useState(0);
  const changeExpandedState = (accor) => (event, newExpanded) => {
    setExpandedState(newExpanded ? accor : false);
  };
  return (
    <Item elevation={2}>
      <Heading variant="h4">Mess Menu</Heading>
      <StyledAccordion
        disableGutters
        elevation={0}
        expanded={expandedState === '1'}
        onChange={changeExpandedState('1')}
      >
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ display: 'none', borderRadius: '1rem 1rem 0 0' }}
        >
          <MealTitle>Breakfast</MealTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        disableGutters
        elevation={0}
        expanded={expandedState === '2'}
        onChange={changeExpandedState('2')}
      >
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MealTitle>Lunch</MealTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        disableGutters
        elevation={0}
        expanded={expandedState === '3'}
        onChange={changeExpandedState('3')}
      >
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <MealTitle>Dinner</MealTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </Item>
  );
}

export default MessMenu;
