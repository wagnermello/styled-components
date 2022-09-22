import { StyledButton } from "./Components/Button.style";
import { AppContainer } from "./Components/Container.style";
import { GlobalStyles } from "./Components/GlobalStyles.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledButton
        buttonLabel="Click Here"
        backgroundColor="violet"
      ></StyledButton>
    </>
  );
}

export default App;
