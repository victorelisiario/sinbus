import { Input, InputGroup, InputLeftElement, InputProps as ChakraBuscarInputProps } from "@chakra-ui/react";
import { values } from "faunadb";
import { RiSearchLine } from "react-icons/ri";

interface BuscarInputProps extends ChakraBuscarInputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (event) => void;
}

export function BuscarLeftInput({ type, placeholder, value, onChange }: BuscarInputProps) {
  return (
    <InputGroup >
      <InputLeftElement
        pointerEvents='none'
      ><RiSearchLine color='gray' /></InputLeftElement>

      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}

        bgColor="transparent"
        focusBorderColor="sinbus.500"
        variant="outline"
      />
    </InputGroup>
  )
}