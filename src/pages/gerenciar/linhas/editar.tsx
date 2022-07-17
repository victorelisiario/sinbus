import { Divider, useToast, Flex, FormControl, HStack, Input, Spacer, Stack, TagCloseButton, TagLabel, Text, Grid, InputGroup, InputLeftElement, Center, Editable, EditablePreview, EditableInput, Box, NumberInput, NumberInputField, toast, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../services/axios";

import { Sinbus } from "../../../components/Sinbus";
import { EdicaoPonto } from "../../../components/Linha/Editar/EdicaoPonto";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { TransparentButton } from "../../../components/Buttons/TransparentButton";
import { NormalInput } from "../../../components/Inputs/NormalInput";
import { NovoHorarioModal } from "../../../components/Linha/Editar/NovoHorarioModal";
import { BuscarRightInput } from "../../../components/Inputs/BuscarRightInput";
import { DeleteTag } from "../../../components/Linha/Editar/DeleteTag";
import { PontosInput } from "../../../components/Linha/Editar/PontosInput";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface PontosProps {
  ordem: number,
  nome: string,
  id: string
}

export default function EditarLinhas() {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cidade, setCidade] = useState('');
  const [horarios, setHorarios] = useState<string[]>([]);
  const [pontos, setPontos] = useState([]);

  const [pesquisa, setPesquisa] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  const router = useRouter();
  const toast = useToast();

  async function handleSalvar() {

    router.push('/gerenciar/linhas')

  }

  async function handleBuscarPonto() {

  }


  function handleAdicionarPonto(ponto: PontosProps) {
    let novoPontos: PontosProps[] = [...pontos]

    const novoPonto = {
      nome: ponto.nome,
      ordem: pontos.length + 1,
      id: ponto.id
    }

    novoPontos.push(novoPonto)
    setPontos(novoPontos)
  }


  return (
    <>
      <title>Editar Linha | Sinbus</title>

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
                  onClick={() => router.push('/gerenciar/linhas')}
                  w="100%"
                />

                <SinbusButton
                  conteudo='SALVAR'
                  onClick={handleSalvar}
                  w="100%"
                />
              </HStack>

              <NormalInput
                type="name"
                placeholder="Nome"
                onChange={event => setNome(event.target.value)}
                value={nome}
              />

              <NormalInput
                type="name"
                placeholder="Empresa"
                onChange={event => setEmpresa(event.target.value)}
                value={empresa}
              />

              <NormalInput
                type="name"
                placeholder="Cidade"
                onChange={event => setCidade(event.target.value)}
                value={cidade}
              />

              <Divider />

              <Flex
                border="1px"
                borderRadius="6"
                color="gray.300"
                bg="gray.50"
                px="2"
                py="3"
                flexDir="column"
              >
                <HStack spacing="auto">
                  <Text> HORÁRIOS DE PARTIDA</Text>
                  <NovoHorarioModal
                    setHorarios={setHorarios}
                    horarios={horarios}
                  />
                </HStack>

                <Divider my="2" />

                <Grid templateColumns='repeat(3, 5fr)' gap="2">
                  {horarios.map(
                    horario => <DeleteTag
                      key={horario}
                      content={horario}
                      setHorarios={setHorarios}
                      horarios={horarios}
                    />
                  )}
                </Grid>
              </Flex>

              <Divider />

              <Flex
                border="1px"
                borderRadius="6"
                color="gray.300"
                bg="gray.50"
                px="2"
                py="3"
                flexDir="column"
              >

                <Text> PONTOS DA LINHA </Text>
                <Divider my="2" />

                <Stack spacing='2'>
                  {pontos.map(
                    (ponto, index) => <EdicaoPonto
                      key={ponto.ordem}
                      nome={ponto.nome}
                      ordem={index}
                      pontos={pontos}
                      setPontos={setPontos}

                    />
                  )}

                  <BuscarRightInput
                    placeholder="Buscar ponto por cidade"
                    type="name"
                    onClick={handleBuscarPonto}
                    onChange={event => setPesquisa(event.target.value)}
                    value={pesquisa}
                  />
                </Stack>
              </Flex>
            </Stack>


            {
              resultadoBusca.length > 1 ?
                <>
                  <Text mt='6' color="gray.300">
                    PONTOS EM {pesquisa.toUpperCase()}:
                  </Text>
                  <Divider mt="2" />
                </>
                : null
            }

            <Stack mt='2' spacing='2' >
              {resultadoBusca.map(
                (ponto, index) =>
                  <Box
                    key={ponto.id}
                    as='button'
                    type='button'
                    onClick={() => handleAdicionarPonto(ponto)}
                  >
                    <PontosInput
                      nome={ponto.nome}
                    />
                  </Box>
              )}
            </Stack>




          </Flex>
        </Flex>
      </FormControl>
    </>
  )
}