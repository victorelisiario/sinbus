import { Button, Flex, HStack, PinInput, PinInputField, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { RiAddFill } from "react-icons/ri";
import { Dispatch, SetStateAction, useState } from "react";

interface NovoHorarioModalProps {
  setHorarios: Dispatch<SetStateAction<string[]>>
  horarios: string[];
}

export function NovoHorarioModal({ setHorarios, horarios }: NovoHorarioModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [horario, setHorario] = useState('');

  function isInTheHorarios(horarios, novoHorario) {
    return horarios.some((horario) => horario === novoHorario)
  }

  function handleAdicionar() {

    if (horario.substr(2, 2) == '') { //CASO APENAS HORA INSERIDA
      let novoHorario = horario.substr(0, 2) + "h00"

      const cannotBeAdded = isInTheHorarios(horarios, novoHorario);

      if (cannotBeAdded) {
        console.log('Horário já foi adicionado')
      } else {
        const novoHorarios = [...horarios]
        novoHorarios.push(novoHorario)
        setHorarios(novoHorarios)
      }

    } else {//CASO HORA E MINUTO INSERIDO
      let novoHorario = horario.substr(0, 2) + "h" + horario.substr(2, 2);
      const cannotBeAdded = isInTheHorarios(horarios, novoHorario);

      if (cannotBeAdded) {
        console.log('Horário já foi adicionado')
      } else {
        const novoHorarios = [...horarios]
        novoHorarios.push(novoHorario)
        setHorarios(novoHorarios)
      }
    }
    setHorario('')
  }
  return (

    <>
      <Modal scrollBehavior={"inside"} isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" bg="sinbus.700">
          <ModalHeader color="white">ADICIONAR NOVO HORÁRIO</ModalHeader>
          <ModalCloseButton color="white" _hover={{ backgroundColor: "sinbus.700" }} _focus={{ boxShadow: "none" }} />

          <ModalBody
            color='white'
          >
            <Stack spacing='5'>
              <HStack justify='center'>
                <PinInput
                  type='alphanumeric'
                  onChange={(value) => { setHorario(value) }}
                  value={horario}
                >
                  <PinInputField _focus={{ border: "2px", borderColor: 'white' }} />
                  <PinInputField _focus={{ border: "2px", borderColor: 'white' }} />
                  <Text fontWeight='bold'>:</Text>
                  <PinInputField _focus={{ border: "2px", borderColor: 'white' }} />
                  <PinInputField _focus={{ border: "2px", borderColor: 'white' }} />
                </PinInput>
              </HStack>

              <Flex justifyContent='end'>
                <HStack >
                  <Button justifyContent="center"
                    variant="outline"
                    border="2px"

                    colorScheme="white"
                    color="white"
                    bg="transparent"

                    onClick={() => { setHorario('') }}

                    _hover={{ bgColor: 'sinbus.500' }}
                    _focus={{ border: "2px", borderColor: 'sinbus.200' }}
                  > LIMPAR </Button>

                  <Button
                    name='adicionar'
                    bg="white"
                    color="sinbus.600"

                    _hover={{ bg: 'gray.50' }}
                    _focus={{ border: "2px", borderColor: 'sinbus.200' }}

                    onClick={handleAdicionar}
                  > ADICIONAR </Button>
                </HStack>
              </Flex>
            </Stack>

          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button
        rightIcon={<RiAddFill color="gray.0" />}
        colorScheme='sinbus'
        variant='outline'
        size="xs"
        _focus={{ boxShadow: "none" }}
        onClick={onOpen}
      > Horário</Button>
    </>
  )
}