import { Flex, IconButton, Text } from "@chakra-ui/react"
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

interface pontoProps {
  id: string
  nome: string,
}

export function EdicaoPonto(ponto) {
  console.log(ponto)
  function handleDeletePonto() {
    console.log('hello')
  }

  function handleEditPonto() {
    console.log('hello')
  }

  return (
    <Flex
      align="center"
      justify='space-between'
      px="6"
      py="2"
      bgColor='transparent'
      borderRadius="6"
      border="1px"
      borderColor="gray.300"
    >
      <Flex flexDirection="column">
        <Text
          color="sinbus.600"
          fontWeight='bold'
        > ID: {ponto.ponto.id}
        </Text>

        <Text
          color="sinbus.600"
        > {ponto.ponto.nome}
        </Text>

      </Flex>

      <Flex>
        <IconButton
          color="sinbus.600"
          bg="none"
          onClick={handleEditPonto}
          aria-label={"Deletar ponto"}
          fontSize='20'
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: 'sinbus.50' }}
          icon={<FaRegEdit />}
        />

        <IconButton
          color="sinbus.600"
          bg="none"
          onClick={handleDeletePonto}
          aria-label={"Deletar ponto"}
          fontSize='20'
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: 'sinbus.50' }}
          icon={<RiDeleteBin5Fill />}
        />
      </Flex>
    </Flex>
  )

}