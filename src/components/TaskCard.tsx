import { Box, Flex, Badge, Text } from "@chakra-ui/react";

type TaskCardProps = {
  title: string;
  category: string;
  description: string;
};

const TaskCard = ({ title, category, description }: TaskCardProps) => {
  return (
    <Box bg='orange.300' p={3} boxShadow={"sm"} mt='3'>
      <Flex direction='row' justify={"space-between"} mb={3}>
        <Text>{title}</Text>
        <Badge colorScheme='cyan'>{category}</Badge>
      </Flex>
      <Text>{description}</Text>
    </Box>
  );
};

export default TaskCard;
