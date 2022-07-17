import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface EdicaoTagProps {
  content: string;
  setHorarios?: Dispatch<SetStateAction<string[]>>
  horarios: string[]
}


export function DeleteTag({ content, setHorarios, horarios }: EdicaoTagProps) {

  function handleDeleteHorario() {
    let novoHorarios = [...horarios]
    novoHorarios = novoHorarios.filter(item => item !== content)
    setHorarios(novoHorarios)
  }

  return (
    <Tag
      size="md"
      key="sm"
      borderRadius='full'
      variant='solid'
      colorScheme='sinbus'
      bgColor="sinbus.600"
      w="85px"
    >
      <TagLabel>{content}</TagLabel>
      <TagCloseButton onClick={handleDeleteHorario} />
    </Tag>
  )
}