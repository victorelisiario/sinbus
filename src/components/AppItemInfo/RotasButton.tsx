import { Flex, Icon, IconButton, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { BsGeoFill } from 'react-icons/bs'
import { api } from "../../services/axios";
import { useEffect, useState } from "react";

export function RotasButton({ pontos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pontosDaLinha, setpontosDaLinha] = useState([]);



  async function handleBuscarPontos() {
    const lista_de_pontos = await api.post(
      '/ponto/searchById', { data: pontos }
    )

    setpontosDaLinha(lista_de_pontos.data)
  }


  useEffect(() => {
    handleBuscarPontos();
  }, [])




  return (
    <>
      <Modal scrollBehavior={"inside"} isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" bg="sinbus.700">
          <ModalHeader color="white">Pontos da Linha</ModalHeader>
          <ModalCloseButton color="white" _hover={{ backgroundColor: "sinbus.700" }} _focus={{ boxShadow: "none" }} />

          <ModalBody>

            <Stack spacing="5">

              {pontosDaLinha.map(ponto =>
                <Flex key={ponto.ref['@ref'].id}>
                  <Icon aria-label="Ponto" alignSelf="center" color="white" as={BsGeoFill} w={8} h={6} pr="2" />
                  <Text color="white">{ponto.data.nome}</Text>
                </Flex>
              )}
            </Stack>

          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <IconButton
        color="sinbus.600"
        bg="none"
        onClick={onOpen}

        aria-label="Ver Pontos da linha"
        fontSize='24'
        _focus={{ boxShadow: "none" }}
        _hover={{ bgColor: 'sinbus.50' }}
        icon={<FaMapMarkedAlt />}
      />
    </>
  )
}