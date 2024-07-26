import {
  Box,
  Divider,
  Grid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const Tasks = () => {
  const { colorMode } = useColorMode();
  const wipBG = { light: "teal.300", dark: "teal.600" };
  const doneBG = { light: "blue.300", dark: "blue.600" };
  return (
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
      </Box>
      <Box bg={doneBG[colorMode]} rounded={"md"} p={3} boxShadow={"md"}>
        <Stack spacing={3}>
          <Box>
            <Text fontSize={"2xl"} textAlign={"center"}>
              Done Tasks
            </Text>
            <Divider />
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Tasks;
