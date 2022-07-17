import { Flex, Text } from "@chakra-ui/react";
import { Sinbus } from "./Sinbus";

export function DesktopError() {
  return (
    <Flex
      w="100hw"
      h="100vh"
      p="8"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Sinbus color="sinbus.600" />
      <Text fontSize="xl">
        Esta página está configurada para
        ser acessada apenas por dispositivos móveis.
      </Text>
      <Text fontSize="xl">
        Tente novamente em outro dispositivo ou diminua o tamanho da janela.
      </Text>
    </Flex >
  )
}