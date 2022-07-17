import { Box, Button, Flex, Icon, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosCheckmarkCircle } from 'react-icons/io'

export function AcenarButton() {
  const [isAcenarActive, SetIsAcenarActive] = useState(false);
  const toast = useToast()

  function seuOnibusChegou() {
    SetIsAcenarActive(false);
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
          <Icon as={IoIosCheckmarkCircle}
            w={8} h={6} pr="2" /> Seu ônibus chegou!
        </Flex>
      ),
      status: 'success',
      duration: 2000,
    })
  }

  async function handleAcenar() {
    if (isAcenarActive) {
      SetIsAcenarActive(false);
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
            <Icon as={IoIosCheckmarkCircle} w={8} h={6} pr="2" /> Aceno retirado
          </Flex>
        ),
        status: 'success',
        duration: 2000,
      })
    }

    if (!isAcenarActive) {
      SetIsAcenarActive(true)
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
            <Icon as={IoIosCheckmarkCircle} w={8} h={6} pr="2" /> Acenado
          </Flex>
        ),
        status: 'success',
        duration: 2000,
      })
      await new Promise(resolve => setTimeout(resolve, 4000));
      seuOnibusChegou();
    }

    return;
  }

  return (
    <Button
      colorScheme="sinbus"
      bg={isAcenarActive ? "sinbus.400" : "sinbus.600"}
      w="24"
      maxH="8"
      _focus={{ boxShadow: "none", bg: { isAcenarActive: "sinbus.400" } }}
      _hover={isAcenarActive ? { backgroundColor: 'sinbus.400' } : { backgroundColor: 'sinbus.600' }}
      onClick={handleAcenar}
    >
      {isAcenarActive ? "Acenado" : "Acenar"}
    </Button>

  )
}