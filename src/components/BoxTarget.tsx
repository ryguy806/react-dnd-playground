import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { Box } from "@chakra-ui/react";

const BoxTarget = () => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Box ref={drop} minHeight={"200px"} bg={isOver ? "red.200" : "red.500"}>
      BoxTarget
    </Box>
  );
};

export default BoxTarget;
