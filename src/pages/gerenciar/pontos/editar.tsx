import { Button, Tag, Divider, Flex, FormControl, HStack, Input, Spacer, Stack, TagCloseButton, TagLabel, Text, Grid, InputGroup, InputLeftElement, Center, Editable, EditablePreview, EditableInput, Box, NumberInput, NumberInputField, useToast, Wrap, WrapItem, toast, Icon } from "@chakra-ui/react";
import { Sinbus } from "../../../components/Sinbus";
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdGpsFixed } from 'react-icons/md'

import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../../services/axios";
import { TransparentButton } from "../../../components/Buttons/TransparentButton";
import { SinbusButton } from "../../../components/Buttons/SinbusButton";
import { NormalInput } from "../../../components/Inputs/NormalInput";

interface positionProps {
  coords:
  {
    latitude: number;
    longitude: number;
  };
}

interface newPontoProps {
  nome: string;
  cidade: string;
  latitude: number;
  longitude: number;
}

export default function EditarPontos() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const router = useRouter();
  const toast = useToast();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition/* , showError */);
    }
    else alert("Browser não suporta geolocalização, tente em outro Browser")
  }

  function showPosition(position: positionProps) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(latitude)
    console.log(longitude)
  }

  async function handleSalvar() {
    router.push('/gerenciar/pontos')
  }

  return (
    <>
      <title>Editar Ponto | Sinbus</title>

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
                  onClick={() => router.push('/gerenciar/pontos')}
                  w="100%"
                />

                <SinbusButton
                  conteudo='SALVAR'
                  onClick={handleSalvar}
                  w="100%"
                />
              </HStack>

              <NormalInput
                placeholder="Nome"
                type="name"
                onChange={event => setNome(event.target.value)}
                value={nome}
              />

              <NormalInput
                placeholder="Cidade"
                type="name"
                onChange={event => setCidade(event.target.value)}
                value={cidade}
              />

              <Divider />

              <HStack spacing="2" justifyContent="space-between">

                <NormalInput
                  placeholder="Latitude"
                  type="number"
                  onChange={event => setLatitude(parseFloat(event.target.value))}
                  value={latitude === 0 ? "" : latitude}
                />

                <NormalInput
                  placeholder="Longitude"
                  type="number"
                  onChange={event => setLongitude(parseFloat(event.target.value))}
                  value={latitude === 0 ? "" : longitude}
                />
              </HStack>

              <SinbusButton
                conteudo='Utilizar posição atual'
                onClick={getLocation}
                leftIcon={<MdGpsFixed />}
              />
            </Stack>
          </Flex>
        </Flex>
      </FormControl>
    </>
  )
}