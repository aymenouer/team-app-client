import React from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";
import { Envelope,Telephone } from 'react-bootstrap-icons';

const UserCard = ({user,index}) => {


  return (
    <CardContainer >
      <CardContent>
        <CardTop colors={colors[index%6]}  >
<CardName >{user.name.first }</CardName>
        </CardTop>

        <CardImage  src={user.picture.medium} alt={user.name.first} />
     
      <CardBody colors={colors[index%6]} >

      <CardBodyContainer >
        <CardLocation>{user.location.country}</CardLocation>
        <CardIcons>

        <Envelope style={{fontSize:"30px",margin:"10px"}}/>
      <Telephone style={{fontSize:"30px",margin:"10px"}}/>
        </CardIcons>
            </CardBodyContainer>
     
      </CardBody>
     
    </CardContent>
    </CardContainer>
  );
};

export default UserCard;

/** Repo Card styled components */
const CardContainer = styled.div({
  borderRadius:"30px",
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  width: "44%",
  height: 280,
  [mq[0]]: {
    width: "90%",
    height: 480,
  },
  [mq[1]]: {
    width: "47%",
    height: 480,
  },
  [mq[2]]: {
    width: "31%",
    height: 480,
  },

  margin: 10,
  position: "relative",
  cursor: "pointer",
  textDecoration: "none",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center",
  height: "100%",
});
const CardTop = styled.div(props => ({
  display:"flex",
  alignItems:"center",
  height: "100%",
  width: "100%",
  backgroundColor: props.colors  ,
  borderRadius: "10% 10% 30% 0%",

}));
const CardName = styled.h3({
  textAlign: "center",
  [mq[0]]: {
    fontSize: '36px',
  lineHeight: '42px',
  },
  [mq[1]]: {
    fontSize: '36px',
  lineHeight: '42px',
  },
  [mq[2]]: {
    fontSize: '36px',
  lineHeight: '42px',
  },
  flex: 1,
 
});
const CardImage = styled.img({
  objectFit: "cover",
  borderRadius:"50%",
  position:'absolute',
  width: "50%",
  [mq[0]]: {
    width: "25%",
  },
  [mq[1]]: {
    width: "40%",
  },
  [mq[2]]: {
    width: "40%",
  },
});
const CardBody = styled.div(props => ({
  height: "90%",
  width: "100%",
  backgroundColor: props.colors  ,
   borderRadius: "0% 0% 10% 10%", 

}));
const CardBodyContainer = styled.div({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"white",
  borderRadius: "30% 0% 10% 10%", 
}
);
const CardLocation = styled.div({
  fontFamily:'Lato',
  fontWeight:400,
  fontSize: '12px',
  lineHeight: '14px',
  [mq[0]]: {
    fontSize: '24px',
  lineHeight: '28px',
  },
  [mq[1]]: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  [mq[2]]: {
    fontSize: '24px',
    lineHeight: '28px',
  },
});

const CardIcons = styled.div({
  display: "flex",
  flexDirection: "Row",
   
})

