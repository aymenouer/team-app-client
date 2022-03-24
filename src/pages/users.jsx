import React, { useState } from "react";
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import UserCard from "./../containers/user-card";
import { ArrowLeftRight, Grid, Search, List } from "react-bootstrap-icons";
import UserView from "../containers/user-view";
/** USERS gql query to retreive all USERS with loadpage */
export const USERS = gql`
  query getUsers {
    usersForHome {
      email
      name {
        first
        last
      }
      picture {
        medium
      }
      location {
        country
      }
      phone
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(USERS);
  const [grid, setGrid] = useState(true);
  const [sort, setSort] = useState(false);
  const [more, setMore] = useState(6);
  const [search, setSearch] = useState("");

  return (
    <>
      <Layout grid={grid}>
        <Tools>
          <Left>
            <ArrowLeftRight
              style={{
                transform: "rotate(90deg)",
                fontSize: "30px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSort(!sort);
              }}
            />
            <ToolsContainer>
              <Search style={{ fontSize: "30px" }} />
              <Input onChange={(e) => setSearch(e.currentTarget.value)} />
            </ToolsContainer>
          </Left>
          <Right>
            {!grid ? (
              <Grid
                onClick={() => {
                  setGrid(!grid);
                }}
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            ) : (
              <List
                onClick={() => {
                  setGrid(!grid);
                }}
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            )}
          </Right>
        </Tools>

        <QueryResult error={error} size={more} loading={loading} data={data}>
          {data?.usersForHome
            ?.slice(0, more)
            .sort(function (a, b) {
              if (!sort) {
                if (a.name.first < b.name.first) {
                  return -1;
                }
                if (a.name.first > b.name.first) {
                  return 1;
                }
                return 0;
              } else {
                if (a.name.first > b.name.first) {
                  return -1;
                }
                if (a.name.first < b.name.first) {
                  return 1;
                }
                return 0;
              }
            })
            .map(
              (user, index) =>
                user.name.first.toLowerCase().includes(search.toLowerCase()) &&
                (grid ? (
                  <UserCard key={index} index={index} user={user} />
                ) : (
                  <UserView key={index} index={index} user={user} />
                ))
            )}
        </QueryResult>

        <Tools center>
          <Button hidden={more >= 50} onClick={() => setMore(more + 10)}>
            Show More
          </Button>
        </Tools>
      </Layout>
    </>
  );
};
const Tools = styled.div((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: props.center ? "center" : "space-between",
  position: "relative",
  marginBottom: props.center ? 0 : 10,
}));
const Left = styled.div({
  display: "flex",
  flexDirection: "row",
});
const Right = styled.div({});

const ToolsContainer = styled.div({
  position: "absolute",
  borderBottom: "5px solid",
  top: 0,
  left: 40,
});
const Input = styled.input({
  border: "none",
  outline: "none",
  backgroundColor: "#E5E5E5",
});
const Button = styled.button({
  position: "absolute",
  color: "white",
  textAlign: "center",
  backgroundColor: "#f44336",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  border: "none",
  borderRadius: 10,
  fontSize: 30,
  cursor: "pointer",
});
export default Users;
