import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface SinbusButtonProps extends ChakraButtonProps {
  conteudo: string;
  onClick?: () => any;
}

export function TransparentButton({ onClick, conteudo, ...rest }: SinbusButtonProps) {
  return (
    <Button
      justifyContent="center"
      variant="outline"
      border="2px"

      colorScheme="sinbus"
      color="sinbus.600"

      bg="transparent"

      onClick={onClick}

      _hover={{ bgColor: 'gray.50' }}
      _focus={{ boxShadow: "none" }}

      {...rest}
    > {conteudo} </Button>
  )
}