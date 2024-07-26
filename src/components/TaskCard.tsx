import { Box, Flex, Badge, Text } from "@chakra-ui/react";
import { ItemTypes } from "../utils/ItemTypes";
import { useDrag } from "react-dnd";

type TaskCardProps = {
  title: string;
  category: string;
  description: string;
};

const TaskCard = ({ title, category, description }: TaskCardProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  });
  return (
    <Box
      ref={drag}
      opacity={!isDragging ? 0.5 : 1}
      bg='orange.300'
      p={3}
      boxShadow={"sm"}
      mt='3'
    >
      <Flex direction='row' justify={"space-between"} mb={3}>
        <Text>{title}</Text>
        <Badge colorScheme='cyan'>{category}</Badge>
      </Flex>
      <Text>{description}</Text>
    </Box>
  );
};

export default TaskCard;
