import { Flex, HStack, Stack, } from "@chakra-ui/react";
import { Header } from "../../../components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../../services/axios";
import { EdicaoOnibus } from "../../../components/Onibus";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { BuscarLeftInput } from "../../../components/Inputs/BuscarLeftInput";

type onibusProps = {
  id: string;
  empresa: string;
  placa: string;
}[]

export default function Onibus() {
  const [onibus, setOnibus] = useState<onibusProps>([]);
  const [pesquisa, setPesquisa] = useState('');

  const router = useRouter();

  function handleCreateOnibus() {
    router.push('/gerenciar/onibus/editar')
  }

  async function handleBuscarOnibus() {

  }

  return (
    <>
      <title>Ônibus | Sinbus</title>

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
              conteudo='+ CRIAR NOVO ÔNIBUS'
              onClick={handleCreateOnibus}
            />

            <HStack spacing="1" >
              <BuscarLeftInput
                placeholder="Buscar ônibus por placa"
                type="name"
                onChange={event => setPesquisa(event.target.value)}
                value={pesquisa}
              />

              <SinbusButton
                conteudo='BUSCAR'
                onClick={handleBuscarOnibus}
              />
            </HStack>
          </Stack>

          <Stack mt="6" spacing="2">
            {onibus.map(
              onibus => <EdicaoOnibus key={onibus.id} onibus={onibus} />)
            }
          </Stack>


        </Flex>
      </Flex>
    </>
  )
}