import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

import { AppItemInfo } from "../components/AppItemInfo";
import { DesktopError } from "../components/DesktopError";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
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

  function getDistanceFromLatLonInKm(position1, position2) {
    "use strict";
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
      R = 6371,
      dLat = deg2rad(position2.lat - position1.lat),
      dLng = deg2rad(position2.lng - position1.lng),
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(deg2rad(position1.lat))
        * Math.cos(deg2rad(position1.lat))
        * Math.sin(dLng / 2) * Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return ((R * c * 1000).toFixed());
  }

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