import React from "react";
import styled from "styled-components";
import { SecondaryBuntton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
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
