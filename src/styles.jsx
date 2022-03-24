import React from 'react';
import { Global } from '@emotion/core';
const breakpoints = [576, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};
export const colors = [

   "#A7B8A8",
 "#E1D3C7",
"#E8CDAD",
"#E1D3C7",
"#E8CDAD",
"#A7B8A8"
]

const GlobalStyles = () => (
  <Global
    styles={{
      [['html', 'body']]: {
        height: '100%',
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Karla', Lato, Work San",
        backgroundColor: "#E5E5E5",
        color: "black",
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      },
      '*': {
        boxSizing: 'border-box',
      },
      [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
        margin: 0,
        fontWeight: 600,
      },
      h1: {
        fontSize: 40,
        lineHeight: 1,
      },
      h3: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: '21px',
      },
      botton:{
        boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
        color:"red"
      }
     
   
    }}
  />
);

export default GlobalStyles;