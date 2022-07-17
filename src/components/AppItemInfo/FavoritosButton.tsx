import { Box, Flex, Icon, IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosCheckmarkCircle } from 'react-icons/io'


export function FavoritosButton() {
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const toast = useToast()

  function handleFavorite() {
    if (isFavoriteActive) {
      setIsFavoriteActive(false);
      toast({
        position: 'bottom',

        render: (props) => (
          <Flex
            color="white"
            p={3}
            bg="sinbus.600"
            borderRadius={5}
            fontWeight="bold"
            alignItems="center"
          >
            <Icon as={IoIosCheckmarkCircle} w={8} h={6} pr="2" /> Retirado dos favoritos
          </Flex>
        ),
        status: 'success',
        duration: 2000,

      })
      return
    }

    setIsFavoriteActive(true)
    toast({
      position: 'bottom',
      render: (props) => (
        <Flex
          color="white"
          p={3}
          bg="sinbus.600"
          borderRadius={5}
          fontWeight="bold"
          alignItems="center"
          aria-disabled //verificar se precisa
        >
          <Icon as={IoIosCheckmarkCircle} w={8} h={6} pr="2" /> Adicionado aos favoritos
        </Flex>
      ),
      status: 'success',
      duration: 2000,

    })
    return

  }

  return (
    <IconButton
      color="sinbus.600"
      bg="none"
      onClick={handleFavorite}
      aria-label={isFavoriteActive ?
        "Remover dos favoritos" :
        "Adicionar aos favoritos"}
      fontSize='26'
      _focus={{ boxShadow: "none" }}
      _hover={{ bgColor: 'sinbus.50' }}
      icon={isFavoriteActive ? <AiFillStar /> : <AiOutlineStar />}
    />
  )
}