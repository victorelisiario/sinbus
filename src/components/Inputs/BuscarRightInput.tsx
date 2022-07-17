import { IconButton, Input, InputGroup, InputRightElement, InputProps as ChakraBuscarInputProps } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

interface BuscarInputProps extends ChakraBuscarInputProps {
  placeholder: string;
  type: string;
  value?: any;
  onClick?: () => any;
  onChage?: () => void;
}

export function BuscarRightInput({ placeholder, type, onClick, onChage, value, ...rest }: BuscarInputProps) {
  return (
    <InputGroup>
      <InputRightElement
      >
        <IconButton
          onClick={onClick}
          aria-label={placeholder}
          bg='transparent'

          _hover={{ color: 'sinbus.600' }}
          _focus={{ boxShadow: "none" }}
        >
          <RiSearchLine color='gray' />
        </IconButton>

      </InputRightElement>

      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChage}

        bgColor="transparent"
        focusBorderColor="sinbus.500"
        variant="outline"

        {...rest}
      />
    </InputGroup>
  )
}