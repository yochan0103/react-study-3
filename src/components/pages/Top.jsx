import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryBuntton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();
  const {} = useContext;

  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryBuntton onClick={onClickAdmin}>管理者ユーザー</SecondaryBuntton>
      <br />
      <br />
      <SecondaryBuntton onClick={onClickGeneral}>一般ユーザー</SecondaryBuntton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
