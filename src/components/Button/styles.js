import styled from "styled-components"

export const StyledButton = styled.button`
    background: #221537;
    color: #FFFFFF;

    font-weight: 400;
    font-size: 14px;
    line-height:19px;

    border: none;
    border-radius: 12px;

    height: 28px;
    width: 75px;
    padding:5px;
    margin: 5px;

    &:hover {
        opacity: 0.75;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        width: 100px;
    }
`