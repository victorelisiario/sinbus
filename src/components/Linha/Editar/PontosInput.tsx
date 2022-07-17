import { Box, Flex, Stack, TagLeftIcon } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface PontosInputProps {
  nome: string;
}

export function PontosInput({ nome }: PontosInputProps) {
  return (
    <Flex
      borderRadius='6'
      bgColor="sinbus.600"
      px='3'
      py='1'
      align='center'
      justify='start'
      color='white'
      justifySelf='start'

      _hover={{ bg: 'sinbus.500' }}
      _focus={{ boxShadow: "none" }}
    >
      <TagLeftIcon as={AiOutlinePlus} />
      {nome}
    </Flex>

  )
}