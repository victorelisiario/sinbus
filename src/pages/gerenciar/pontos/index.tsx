import { Flex, HStack, Stack } from "@chakra-ui/react";
import { Header } from "../../../components/Header";

import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../services/axios";
import { EdicaoPonto } from "../../../components/Ponto";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { BuscarLeftInput } from "../../../components/Inputs/BuscarLeftInput";

type pontoProps = {
  id: string;
  nome: string;
}[]

export default function Pontos() {
  const [pontos, setPontos] = useState<pontoProps>([]);
  const [pesquisa, setPesquisa] = useState('');
  const router = useRouter();

  async function handleBuscarPonto() {

  }

  return (
    <>
      <title>Pontos | Sinbus</title>

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
              conteudo="+ CRIAR NOVO PONTO"
              onClick={() => router.push('/gerenciar/pontos/editar')}
            />
            <HStack>
              <BuscarLeftInput
                placeholder="Buscar ponto por cidade"
                type="name"
                onChange={event => setPesquisa(event.target.value)}
                value={pesquisa}
              />

              <SinbusButton
                conteudo="BUSCAR"
                onClick={handleBuscarPonto}
              />
            </HStack>

          </Stack>

          <Stack mt="6" spacing="2">
            {pontos.map(
              ponto => <EdicaoPonto key={ponto.id} ponto={ponto} />
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}