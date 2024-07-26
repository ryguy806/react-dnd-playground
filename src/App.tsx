import {
  ColorModeProvider,
  CSSReset,
  Flex,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import "./App.css";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <Flex direction='column' align='center' justify='center'>
            <CSSReset />
            <Flex justify='center' align='center'>
              <Tasks />
            </Flex>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
