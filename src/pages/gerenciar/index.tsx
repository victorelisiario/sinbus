import { Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SinbusButton } from "../../components/Buttons/SinbusButton";
import { TransparentButton } from "../../components/Buttons/TransparentButton";
import { Sinbus } from "../../components/Sinbus";

export default function Gerenciar() {
  const router = useRouter();
  return (
    <>

      <title>Administrador | Sinbus</title>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        flexDir="column"
      >

        <Sinbus padding="4" color="sinbus.600" />

        <Flex
          as="form"
          w="100%"
          maxW="360"
          paddingX="6"
          borderRadius="8"
          flexDir="column"
        >

          <Stack spacing="4">
            <SinbusButton
              conteudo='LINHAS'
              onClick={() => router.push('/gerenciar/linhas')}
            />

            <SinbusButton
              conteudo='PONTOS'
              onClick={() => router.push('/gerenciar/pontos')}
            />

            <SinbusButton
              conteudo='ÔNIBUS'
              onClick={() => router.push('/gerenciar/onibus')}
            />
          </Stack>

          <TransparentButton
            mt='10'
            conteudo='IR PARA O APP'
            onClick={() => router.push('/app')}
          />
        </Flex>
      </Flex>
    </>
  )
}