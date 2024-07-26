import {
  ColorModeProvider,
  CSSReset,
  Flex,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import "./App.css";
import Tasks from "./pages/Tasks/Tasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <DndProvider backend={HTML5Backend}>
            <Flex direction='column' align='center' justify='center'>
              <CSSReset />
              <Flex justify='center' align='center'>
                <Tasks />
              </Flex>
            </Flex>
          </DndProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
