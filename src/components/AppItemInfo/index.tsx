import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { AcenarButton } from "./AcenarButton";

import { FavoritosButton } from "./FavoritosButton";
import { RotasButton } from "./RotasButton";

export function AppItemInfo({ nome, empresa, cidade, pontos }) {

  return (
    <Flex w="100%" h="auto" bg="white" px="3" py="2" borderRadius="lg" justify="space-between">

      <Box alignSelf="center">
        <Img src="busIcone.svg" w="14" h="14" alt="Imagem de ônibus"></Img>
      </Box>

      <Flex flexDirection="column" >
        <Text color="sinbus.600" fontWeight="bold" fontSize="lg">{nome}</Text>
        <Text color="sinbus.700" fontSize="sm">Empresa: {empresa}</Text>
        <Text color="sinbus.700" fontSize="sm">Cidade: {cidade}</Text>
      </Flex>

      <Flex flexDirection="column" >
        <Flex align="center" justify='space-between'>
          <RotasButton pontos={pontos} />
          <FavoritosButton />
        </Flex>

        <AcenarButton />
      </Flex>

    </Flex>
  )
}
