import { Button, ButtonProps as ChakraSinbusButtonProps } from "@chakra-ui/react";

interface SinbusButtonProps extends ChakraSinbusButtonProps {
  conteudo: string;
  onClick?: () => any;
}

export function SinbusButton({ onClick, conteudo, ...rest }: SinbusButtonProps) {
  return (
    <Button
      name={conteudo}
      bg="sinbus.600"
      color="white"

      _hover={{ bg: 'sinbus.500' }}
      _focus={{ boxShadow: "none" }}

      onClick={onClick}

      {...rest}
    > {conteudo} </Button>
  )
}