import { Box, Divider, HStack, IconButton, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface EdicaoPontoProps {
  nome: string;
  ordem: number;
  pontos: any[];
  setPontos: (pontos) => void;
}

export function EdicaoPonto({ nome, ordem, pontos, setPontos }: EdicaoPontoProps) {

  function handleDeletePonto(num) {
    let novoPontos = [...pontos]
    let pontoArrumado = []

    for (let i = 0; i < novoPontos.length; i++) {
      if (novoPontos[i] != novoPontos[num]) {
        pontoArrumado.push(novoPontos[i]);
      }
    }

    console.log(pontoArrumado)
    setPontos(pontoArrumado)
  }

  return (
    <>
      <HStack spacing='2'>

        <Box
          as='button'
          type='button'
          ml="2"
          onClick={() => handleDeletePonto(ordem)}
        ><RiDeleteBin5Fill /></Box>

        <Text>{ordem}. {nome}</Text>

      </HStack>
      <Divider />
    </>
  )
}