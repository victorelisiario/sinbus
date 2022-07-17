import { Divider, Flex, Icon, Radio, RadioProps as ChakraRadioProps, Stack, Text } from "@chakra-ui/react";
import { BsGeoFill } from "react-icons/bs";

interface RadioInputProps extends ChakraRadioProps {
  nome: string;
  cidade: string;
}

export function RadioInput({ id, nome, cidade, ...rest }: RadioInputProps) {
  return (
    <Stack spacing='3' >
      <Radio
        colorScheme='sinbus'
        color='sinbus.600'

        _focus={{ boxShadow: "none" }}
        {...rest}
      >
        <Flex >
          <Icon
            alignSelf="center"
            color="sinbus.600"
            as={BsGeoFill}
            w={6} h={5}
          />

          <Text
            color='sinbus.600'
          >
            {nome} | {cidade}
          </Text>
        </Flex>
      </Radio>
      <Divider colorScheme='sinbus' />
    </Stack>

  )
}