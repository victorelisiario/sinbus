import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FlexProps as HeaderFlexProps } from "@chakra-ui/react";

import { Sinbus } from "../components/Sinbus";
import { FiMenu } from "react-icons/fi";

export function Header(props: HeaderFlexProps) {

  return (
    <Flex px="4" pt="1" justifyContent='space-between' >
      <Sinbus color="sinbus.600" />

      <IconButton
        alignSelf="center"
        color="sinbus.600"
        bg="none"
        aria-label='Sair'
        fontSize='3xl'
        _focus={{ boxShadow: "none" }}
        icon={<FiMenu />}
        _hover={{ color: 'sinbus.700' }}
      />

    </Flex>
  )
}
