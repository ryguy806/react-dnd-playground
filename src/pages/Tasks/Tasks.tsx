import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import TaskCard from "../../components/TaskCard";
import { useState } from "react";
import BoxTarget from "../../components/BoxTarget";

const Tasks = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const wipBG = { light: "teal.300", dark: "teal.600" };
  const doneBG = { light: "blue.300", dark: "blue.600" };

  const [taskList, setTaskList] = useState([
    {
      id: (Math.random() * 100).toFixed(0),
      status: "wip",
      title: "Task 1",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: (Math.random() * 100).toFixed(0),
      status: "done",
      title: "Task 2",
      category: "Category 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: (Math.random() * 100).toFixed(0),
      status: "wip",
      title: "Task 3",
      category: "Category 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  return (
    <div>
      <div>
        <IconButton
          aria-label='color mode swithc'
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        >
          Change Color Mode
        </IconButton>
      </div>
      <Grid gap={6} templateColumns='repeat(2, 1fr)' w='80vw' h='93vh'>
        <Box bg={wipBG[colorMode]} rounded={"md"} p={3} boxShadow={"md"}>
          <Stack spacing={3}>
            <Box>
              <Text fontSize={"2xl"} textAlign={"center"}>
                WIP Tasks
              </Text>
              <Divider />
            </Box>
          </Stack>
          {taskList
            .filter((task) => task.status === "wip")
            .map((card) => (
              <div key={card.id}>
                <TaskCard
                  title={card.title}
                  category={card.category}
                  description={card.description}
                />
              </div>
            ))}
        </Box>
        <Box bg={doneBG[colorMode]} rounded={"md"} p={3} boxShadow={"md"}>
          <Stack spacing={3}>
            <Box>
              <Text fontSize={"2xl"} textAlign={"center"}>
                Done Tasks
              </Text>
              <Divider />
            </Box>
            <BoxTarget />
          </Stack>
          {taskList
            .filter((task) => task.status === "done")
            .map((card) => (
              <div key={card.id}>
                <TaskCard
                  title={card.title}
                  category={card.category}
                  description={card.description}
                />
              </div>
            ))}
        </Box>
      </Grid>
    </div>
  );
};

export default Tasks;
