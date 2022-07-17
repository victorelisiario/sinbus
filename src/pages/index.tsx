import { Button, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router';

import { Sinbus } from '../components/Sinbus';
import { NormalInput } from '../components/Inputs/NormalInput';
import { EsqueciSenhaButton } from '../components/Buttons/EsqueciSenhaButton';

import { SinbusButton } from '../components/Buttons/SinbusButton';
import { useState } from 'react';

export default function Entrar() {
  const backgroundImage = useBreakpointValue({ base: 'background.png', md: 'backgroundfull.png' })
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  function handleEntrar(e) {
    e.preventDefault();
    router.push('/gerenciar')
  }

  return (
    <>
      <title>Sinbus</title>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        backgroundImage={backgroundImage}
        background-size="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        flexDir="column"
      >

        <Sinbus padding="4" color="white" />

        <Flex
          as="form"
          w="100%"
          maxW="360"
          paddingX="6"
          borderRadius="8"
          flexDir="column"

          onSubmit={handleEntrar}
        >
          <Stack spacing="4">
            <Stack spacing="4">
              <NormalInput
                type="email"
                placeholder="Email"
                size="lg"
                onChange={event => setData({ ...data, email: event.target.value })}
                value={data.email}
              />

              <NormalInput
                type="password"
                placeholder="Senha"
                size="lg"
                onChange={event => setData({ ...data, password: event.target.value })}
                value={data.password}
              />

              <SinbusButton type='submit' conteudo='ENTRAR' />
            </Stack >

            <EsqueciSenhaButton />

            <Button
              onClick={() => router.push('/inscrever')}

              bg="white"
              color="sinbus.600"

              _hover={{ bg: 'gray.50' }}
              _focus={{ boxShadow: "none" }}
            > CRIAR CONTA </Button>


            {/* <Flex >
                  <SocialButton socialMedia="facebook"
                    flex="2"
                    text='FACEBOOK'
                    _focus={{ boxShadow: "none" }}
                    icon={<FaFacebookSquare />}
                  />

                  <Spacer flex="1" />

                  <SocialButton socialMedia="google"
                    text='GOOGLE'
                    flex="2"
                    fontColor="grey"
                    background="white"
                    _focus={{ boxShadow: "none" }}
                    icon={<FcGoogle />}
                  />
                </Flex> */}
          </Stack>
        </Flex>
      </Flex>

    </>
  )
}


