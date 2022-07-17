import { Icon, Input as ChakraInput, InputProps as ChakraInputProps, Flex } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { RiUser3Fill } from 'react-icons/ri';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  type: string;
  placeholder: string;
  icon: string
}
export const UnderlineInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, icon, ...rest }, ref) => {
  return (

    <Flex
      borderBottom="solid"
      borderBottomColor="sinbus.600"
      borderBottomWidth="1px"
    >
      <ChakraInput
        name={name}
        type={type}
        placeholder={placeholder}
        bgColor="gray.50"
        color="sinbus.700"
        variant="unstyled"
        size="lg"
        pt="2"
        ref={ref}
        {...rest}
      />

      <Icon
        as={
          icon === "user" ? RiUser3Fill :
            icon === "email" ? MdEmail :
              HiLockClosed
        }
        fontSize="24"
        aria-label={
          icon === "user" ? "Icone usuário" :
            icon === "email" ? "Icone email" :
              "Icone senha"
        }
        color='sinbus.600' />
    </Flex>
  )
}

export const UnderlineInput = forwardRef(UnderlineInputBase);