import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import LayoutWrapper from '../components/Layout/Layout';
import AboutUs from '../components/Hostel_new/AboutUs';
import MessMenu from '../components/Hostel_new/MessMenu';
import PhotoGallery from '../components/Hostel_new/PhotoGallery';
import Complaints from '../components/Hostel_new/Complaints';
import Announcement from '../components/Hostel_new/Announcement';
import Contact from '../components/Hostel_new/Contact';

const MainGrid = styled(Grid)({
  margin: '4rem 2rem',
  paddingRight: '2rem',
});

const StyledGrid = styled(Grid)({});

function HostelNew() {
  return (
    <div>
      <LayoutWrapper navTitleText="Hostel O">
        <MainGrid container spacing={4}>
          <StyledGrid item xs={12} sm={12} md={7} lg={7}>
            <AboutUs />
          </StyledGrid>
          <StyledGrid item xs={12} sm={12} md={5} lg={5}>
            <MessMenu />
          </StyledGrid>
          <StyledGrid item xs={12} sm={12} md={12} lg={12}>
            <PhotoGallery />
          </StyledGrid>
          <StyledGrid item xs={12} sm={12} md={12} lg={12}>
            <Complaints />
          </StyledGrid>
          <StyledGrid item xs={12} sm={12} md={12} lg={12}>
            <Announcement />
          </StyledGrid>
          <StyledGrid item xs={12} sm={12} md={12} lg={12}>
            <Contact />
          </StyledGrid>
        </MainGrid>
      </LayoutWrapper>
    </div>
  );
}

export default HostelNew;
