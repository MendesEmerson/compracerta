import {StyledButton, StyledIconButton} from "./styles"

function ButtonComponent({icon = null, title, onClick, disabled, variant = "primary"}) {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
        {icon}{title}
    </StyledButton>
  )
}

function IconButtonComponent({icon, onClick, disabled}) {
  return (
    <StyledIconButton onClick={onClick} disabled={disabled}>
      {icon}
    </StyledIconButton>
  )
}

export {ButtonComponent, IconButtonComponent}