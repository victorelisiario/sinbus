import { Button, Flex, FormControl, HStack, Input, Stack, InputGroup, InputRightElement, useToast, Icon, IconButton, Radio, RadioGroup, InputLeftElement, Text, Divider } from "@chakra-ui/react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiSearchLine } from 'react-icons/ri'

import { Sinbus } from "../../../components/Sinbus";

import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../services/axios";
import { TransparentButton } from "../../../components/Buttons/TransparentButton";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { NormalInput } from "../../../components/Inputs/NormalInput";
import { BuscarRightInput } from "../../../components/Inputs/BuscarRightInput";
import { RadioInput } from "../../../components/Inputs/RadioInput";

interface NewOnibusProps {
  empresa: string;
  placa: string;
  linha?: string;
}

type linhaProps = {
  id: string;
  nome: string;
  cidade: string
}[]

export default function EditarPontos() {
  const [empresa, setEmpresa] = useState('');
  const [placa, setPlaca] = useState('');
  const [linha, setLinha] = useState('');

  const [pesquisa, setPesquisa] = useState('');
  const [linhas, setLinhas] = useState<linhaProps>([]);

  const router = useRouter();
  const toast = useToast();

  async function handleBuscarLinha() {

  }

  async function handleSalvar() {
    router.push('/gerenciar/onibus')
  }

  return (
    <>
      <title>Editar Ônibus | Sinbus</title>

      <FormControl >
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="TOP"
          bg="gray.50"
          flexDir="column"
        >
          <Sinbus color="sinbus.600" />
          <Flex
            mt="4"
            as="form"
            w="100%"
            maxW="360"
            paddingX="6"
            borderRadius="8"
            flexDir="column"
          >
            <Stack spacing="4">

              <HStack spacing="2" justifyContent="space-between">
                <TransparentButton
                  conteudo='CANCELAR'
                  onClick={() => router.push('/gerenciar/onibus')}
                  w="100%"
                />

                <SinbusButton
                  conteudo='SALVAR'
                  onClick={handleSalvar}
                  w="100%"
                />
              </HStack>

              <NormalInput
                placeholder="Empresa"
                type="name"
                onChange={event => setEmpresa(event.target.value)}
                value={empresa}
              />

              <NormalInput
                placeholder="Placa"
                type="name"
                onChange={event => setPlaca(event.target.value)}
                value={placa}
              />

              <BuscarRightInput
                placeholder="Buscar linha por cidade"
                type="name"
                onClick={handleBuscarLinha}
                onChange={event => setPesquisa(event.target.value)}
                value={pesquisa}
              />

            </Stack>
            {
              linhas.length > 1 ?
                <>
                  <Text mt='6' color="gray.300">
                    LINHAS EM {pesquisa.toUpperCase()}:
                  </Text>
                  <Divider mb='3' mt='2' />
                </>
                : null
            }

            <RadioGroup onChange={setLinha} value={linha}>
              <Stack spacing='3' >
                {
                  linhas.map((linha) => {
                    return (
                      <RadioInput
                        cidade={linha.cidade}
                        nome={linha.nome}
                        key={linha.id}
                        value={linha.id}
                      />
                    )
                  })
                }
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
      </FormControl >
    </>
  )
}