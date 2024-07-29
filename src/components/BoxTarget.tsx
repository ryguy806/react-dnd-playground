import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { CardContext } from "../pages/Tasks/Tasks";
import { Item } from "../utils/types";

type BoxTargetProps = {
  children: React.ReactNode;
  targetName: string;
};

const BoxTarget = ({ children, targetName }: BoxTargetProps) => {
  const { changeStatus } = useContext(CardContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Item) => changeStatus(item.id, targetName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Box
      ref={drop}
      height={500}
      rounded={"md"}
      w='100%'
      bg={isOver ? "red.200" : "red.500"}
    >
      {children}
    </Box>
  );
};

export default BoxTarget;
