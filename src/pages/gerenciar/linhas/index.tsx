import { Button, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'
import { Header } from "../../../components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../../services/axios";
import { EdicaoLinha } from "../../../components/Linha";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { NormalInput } from "../../../components/Inputs/NormalInput";
import { BuscarLeftInput } from "../../../components/Inputs/BuscarLeftInput";

type linhaProps = {
  id: string;
  nome: string;
  cidade: string
}[]

export default function Linhas() {
  const [linhas, setLinhas] = useState<linhaProps>([]);
  const [pesquisa, setPesquisa] = useState('');

  const router = useRouter();

  function handleCreateLinha() {
    router.push('/gerenciar/linhas/editar')
  }

  async function handleBuscarLinha() {

  }

  return (
    <>
      <title>Linhas | Sinbus</title>

      <Header />
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="top"
        flexDir="column"
      >
        <Flex
          w="100%"
          paddingX="4"
          borderRadius="8"
          flexDir="column"
        >
          <Stack>
            <SinbusButton
              conteudo='+ CRIAR NOVA LINHA'
              onClick={handleCreateLinha}
            />

            <HStack spacing="1" >

              <BuscarLeftInput
                onSubmit={handleBuscarLinha}
                placeholder="Buscar linha por cidade"
                type="name"
                value={pesquisa}
                onChange={event => setPesquisa(event.target.value)}
              />

              <SinbusButton
                conteudo='BUSCAR'
                onClick={handleBuscarLinha}
              />
            </HStack>
          </Stack>

          <Stack mt="6" spacing="2">
            {linhas.map(
              linha => <EdicaoLinha key={linha.id} linha={linha} />
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}