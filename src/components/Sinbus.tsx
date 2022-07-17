import { Box, BoxProps as SinbusBoxProps } from "@chakra-ui/react";

interface SinbusProps extends SinbusBoxProps {
  color: string
}

export function Sinbus({ color }: SinbusProps) {
  return (
    <Box
      as="a"
      href="/"
      fontFamily="Coiny"
      textColor={color}
      fontSize="4xl"
    >
      SINBUS
    </Box>
  );
}