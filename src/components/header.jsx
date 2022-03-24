import React from 'react';
import {  widths } from '../styles';
import styled from '@emotion/styled';


const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
    
                <h1>Meet the Team</h1>
           
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 30px',
  minHeight: 80,
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

