import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

import { AppItemInfo } from "../components/AppItemInfo";
import { DesktopError } from "../components/DesktopError";
import { useRouter } from "next/router";
import { api } from "../services/axios";

interface positionProps {
  coords:
  {
    latitude: number;
    longitude: number;
  };
}

export default function App() {
  const [pontoAtual, setPontoAtual] = useState('');
  const [linhasDoPonto, setlinhasDoPonto] = useState([]);

  const router = useRouter();
  const [isDesktop] = useMediaQuery('(min-width: 480px');

  async function handleDataFetch() {
    // SET PONTO ATUAL
    console.log('hi')
    setPontoAtual('337470051213902415')

    //BUSCAR LINHAS DO PONTO
    const linhas_ponto = await api.post(
      '/pontos_linhas/searchForLinha', { data: '337470051213902415' }
    );

    console.log(linhas_ponto)

    //CRIAR VETOR COM ID DAS LINHAS
    const linhasIDs = linhas_ponto.data.data.map(item => item.data.linha)

    console.log(linhasIDs)
    //BUSCAR LINHAS INFORMAÇÃO
    const linhasDoPonto = await api.post(
      '/linha/searchById', { data: linhasIDs }
    )

    setlinhasDoPonto(linhasDoPonto.data)
  }

  useEffect(() => {
    handleDataFetch();
  }, [])

  if (isDesktop) {
    return (
      <DesktopError />
    )
  } else {
    return (
      <Flex flexDir="column" h="100vh">
        <title>Pontos | Sinbus</title>

        <Header />

        <Flex flex="10" px="3" flexDirection="column">
          <Stack spacing="2">

            {linhasDoPonto.map(linha =>
              <AppItemInfo
                key={linha.ref['@ref'].id}
                nome={linha.data.nome}
                empresa={linha.data.empresa}
                cidade={linha.data.cidade}
                pontos={linha.data.pontos} />
            )}

            <Box pb="14"></Box>
          </Stack>
        </Flex>
      </Flex>
    )
  }
}