import { Box, Flex } from "@chakra-ui/react";

export function EsqueciSenhaButton() {
  return (
    <Flex
      align="center"
      color="white"
      fontSize="x-small"
      flexDir="row"
    >
      <Box
        flex="2"
        pl="8">
        <hr />
      </Box>

      <Box flex="3" as="button">
        ESQUECI A SENHA
      </Box>

      <Box
        flex="2"
        pr="8">
        <hr />
      </Box>

    </Flex>
  );
}