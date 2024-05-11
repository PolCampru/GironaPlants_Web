import { ButtonWrapper, LinkButtonWrapper } from "./Button.style";
import type { ReactNode } from "react";

import theme from "../../styles/theme";

interface Button {
  isLink?: boolean | undefined;
  style?: {} | undefined;
  to?: string;
  onClick?: Function | undefined;
  leftIcon?: ReactNode | string | undefined;
  rightIcon?: ReactNode | string | undefined;
  disabled?: boolean;
  children?: ReactNode | string;
  variant?: "primary" | "secondary";
}

const Button = (props: Button) => {
  const {
    isLink,
    style,
    to,
    onClick = () => null,
    leftIcon,
    rightIcon,
    disabled = false,
    children,
    variant,
  } = props;

  const secondaryStyles = {
    background: theme.color.white,
    color: theme.color.gpgreen,
  };

  const styleOptions = disabled
    ? {
        ...style,
        background: theme.color.transparent,
        pointerEvents: "none",
      }
    : variant === "secondary"
    ? { ...style, ...secondaryStyles }
    : style;

  if (isLink) {
    const actualpath = window.location.pathname;
    return (
      <LinkButtonWrapper
        href={to}
        style={styleOptions}
        theme={theme}
        $isSelected={actualpath === to}
      >
        {leftIcon && <span> {leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </LinkButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper
        onClick={onClick}
        style={styleOptions}
        disabled={disabled}
        $variant={variant ? variant : "primary"}
        theme={theme}
      >
        {leftIcon && <span> {leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </ButtonWrapper>
    );
  }
};

export default Button;
