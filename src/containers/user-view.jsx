import React from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";
import { Envelope, Telephone } from "react-bootstrap-icons";

const UserView = ({ user, index }) => {
  return (
    <ViewContainer>
      <ViewContent>
        <ViewTop colors={colors[index % 6]}></ViewTop>
        <ViewImage src={user.picture.medium} alt={user.name.first} />

        <ViewBody colors={colors[index % 6]}>
          <ViewBodyContainer>
            <ViewBodyContentInfo>
              <h2>{user.name.first + " " + user.name.last}</h2>

              <ViewLocation>{user.location.country}</ViewLocation>
            </ViewBodyContentInfo>
          </ViewBodyContainer>
        </ViewBody>
        <ViewFooter>
          <Envelope style={{ fontSize: "30px", margin: "10px" }} />
          <Telephone style={{ fontSize: "30px", margin: "10px" }} />
        </ViewFooter>
      </ViewContent>
    </ViewContainer>
  );
};

export default UserView;

/** Repo Card styled components */
const ViewContainer = styled.div({
  borderRadius: "30%",
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "row",
  height: 80,
  margin: 10,
  [mq[0]]: {
    height: 110,
  },
  [mq[1]]: {
    height: 110,
  },
  [mq[2]]: {
    height: 110,
  },
  position: "relative",
  cursor: "pointer",
  textDecoration: "none",
});

const ViewContent = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
});
const ViewTop = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "20%",
  backgroundColor: props.colors,
  borderRadius: "30% 0% 0% 30%",
}));

const ViewImage = styled.img({
  objectFit: "cover",
  borderRadius: "50%",
  position: "absolute",
  left:"calc(20% - 50px)",
  width: "15%",
  [mq[0]]: {
    width: "14%",
    left:"calc(20% - 90px)",
  },
  [mq[1]]: {
    width: "10%",
    left:"calc(20% - 100px)",
  },
  [mq[2]]: {
    width: "8%",
    left:"calc(20% - 100px)",
  },
});
const ViewBody = styled.div((props) => ({
  height: "100%",
  width: "100%",
  backgroundColor: props.colors,
  borderRadius: "0% 0% 0% 0%",
}));
const ViewBodyContainer = styled.div({
  height: "100%",
  width: "100%",
  display: "flex",


  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "30% 0% 0% 0%",
});
const ViewBodyContentInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "30px",
  [mq[0]]: {
    marginLeft: "100px",
  },
  [mq[1]]: {
    marginLeft: "100px",
  },
  [mq[2]]: {
    marginLeft: "100px",
  },
});
const ViewLocation = styled.div({
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  [mq[0]]: {
    fontSize: "24px",
    lineHeight: "28px",
  },
  [mq[1]]: {
    fontSize: "24px",
    lineHeight: "28px",
  },
  [mq[2]]: {
    fontSize: "24px",
    lineHeight: "28px",
  },
});

const ViewFooter = styled.div({
  display: "flex",
  height: "100%",
  width: "20%",
  backgroundColor: "white",
  alignItems: "flex-end",
  [mq[0]]: {
    alignItems: "center",
  },
  [mq[1]]: {
    alignItems: "center",
  },
  [mq[2]]: {
    alignItems: "center",
  },
  borderRadius: "0% 30% 30% 0%",
});
