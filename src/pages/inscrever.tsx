import { useForm } from "react-hook-form";

import { Flex, FormControl, Icon, Stack, useMediaQuery, useToast } from "@chakra-ui/react";

import { Sinbus } from "../components/Sinbus";
import { UnderlineInput } from "../components/Inputs/UnderlineInput";
import { SinbusButton } from "../components/Buttons/SinbusButton";
import { useRouter } from "next/router";
import { TransparentButton } from "../components/Buttons/TransparentButton";

type InscreverFormData = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function Inscrever() {
  const { register, formState, handleSubmit } = useForm();
  const router = useRouter();

  function handleRegistrar(e) {
    e.preventDefault();
    router.push('/app')
  }

  return (
    <>
      <title>Novo usuário | Sinbus</title>

      <FormControl >
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="center"
          bg="gray.50"
          flexDir="column"
        >
          <Sinbus color="sinbus.600" />
          <Flex
            as="form"
            mt="4"
            w="100%"
            maxW="360"
            paddingX="6"
            borderRadius="8"
            flexDir="column"

            onSubmit={handleRegistrar}
          >

            <Stack spacing="6">
              <UnderlineInput
                name="name"
                type="name"
                placeholder="Nome"
                icon="user"
                {...register('name')}
              />

              <UnderlineInput
                name="last_name"
                type="name"
                placeholder="Sobrenome"
                icon="user"
                {...register('last_name')}
              />

              <Stack spacing='6'>

                <UnderlineInput
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  icon="email"
                  {...register('email')}
                />

                <UnderlineInput
                  name="password"
                  type="password"
                  placeholder="Senha"
                  icon="password"
                  {...register('password')}
                />

                <UnderlineInput
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirmar Senha"
                  icon="password"
                  {...register('password_confirmation')}

                />

                <SinbusButton
                  type='submit'
                  conteudo='REGISTRAR'
                  isLoading={formState.isSubmitting}
                />
              </Stack>

              <TransparentButton
                conteudo='CANCELAR'
                onClick={() => router.push('/')}
              />
            </Stack>
          </Flex>
        </Flex>
      </FormControl >
    </>
  );
}
