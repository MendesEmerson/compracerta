import {StyledButton} from "./styles"

function ButtonComponent({title, onClick}) {
  return (
    <StyledButton onClick={onClick}>
        {title}
    </StyledButton>
  )
}

export default ButtonComponent