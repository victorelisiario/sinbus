import { Flex, IconButton, Text } from "@chakra-ui/react"
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

export function EdicaoLinha(linha) {

  function handleDeleteLinha() {
    console.log(linha.linha.id)
  }

  function handleEditLinha() {
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
        > ID: {linha.linha.id}</Text>

        <Text
          color="sinbus.600"
        >{linha.linha.nome} | {linha.linha.cidade}</Text>
      </Flex>

      <Flex>
        <IconButton
          color="sinbus.600"
          bg="none"
          onClick={handleEditLinha}
          aria-label={"Deletar linha"}
          fontSize='20'
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: 'sinbus.50' }}
          icon={<FaRegEdit />}
        />

        <IconButton
          color="sinbus.600"
          bg="none"
          onClick={handleDeleteLinha}
          aria-label={"Deletar linha"}
          fontSize='20'
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: 'sinbus.50' }}
          icon={<RiDeleteBin5Fill />}
        />
      </Flex>
    </Flex>
  )

}