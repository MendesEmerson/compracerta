import {
  IconeContainer,
  IconButton,
  InputContainer,
  InputText,
} from "./styles";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function InputComponent({ leftIcon, name, ...rest }) {
  return (
    <InputContainer>
      {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
}

function InputPasswordComponent({ leftIcon, name, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    setShowPassword(!showPassword);
    e.preventDefault();
  };

  return (
    <InputContainer>
      {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
      <InputText type={showPassword ? "text" : "password"} {...rest} />
      <IconButton onClick={handleTogglePassword}>
        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
      </IconButton>
    </InputContainer>
  );
}

export { InputComponent, InputPasswordComponent };
