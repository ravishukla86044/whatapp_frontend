import styled from "styled-components";
import Spinner from "react-spinkit";

function Loading() {
  return (
    <AppLoading>
      <Spinner name="ball-spin-fade-loader" color="#0079D3" fadeIn="none" />
    </AppLoading>
  );
}

const AppLoading = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { Loading };
