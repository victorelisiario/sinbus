import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  type: string;
  placeholder: string;
}

const NormalInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, ...rest }, ref) => {
  return (
    <ChakraInput
      type={type}
      placeholder={placeholder}

      bgColor="transparent"
      focusBorderColor="sinbus.500"
      variant="outline"

      ref={ref}
      {...rest}
    />

  );
}
export const NormalInput = forwardRef(NormalInputBase);