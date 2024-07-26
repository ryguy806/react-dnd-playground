import { Box, Flex, Badge, Text } from "@chakra-ui/react";

const TaskCard = () => {
  return (
    <Box bg='orange.300' p={3} boxShadow={"sm"} mt='3'>
      <Flex direction='row' justify={"space-between"} mb={3}>
        <Text>Buy Tablet</Text>
        <Badge colorScheme='cyan'>Chore</Badge>
      </Flex>
      <Text>Get a new tablet because you broke the one you had.</Text>
    </Box>
  );
};

export default TaskCard;
