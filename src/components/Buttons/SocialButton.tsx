import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

interface SocialButtonProps extends ButtonProps {
  text: string
  icon: ReactElement
  socialMedia: string
  background?: string
  fontColor?: string
}

export function SocialButton({ text, icon, socialMedia, background, fontColor }: SocialButtonProps) {
  return (
    <Button
      leftIcon={icon}
      bg={background}
      colorScheme={socialMedia}
      color={fontColor}
      fontWeight="400"
      _focus={{ boxShadow: "none" }}
    >
      {text}
    </Button>
  )
}