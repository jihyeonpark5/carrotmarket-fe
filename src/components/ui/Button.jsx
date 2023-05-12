import React from "react";
import styled from "styled-components";

const buttonSizes = {
    large: {
        fontWeight: "bold",
        minWidth:"100%",
        height: "45px",
    },
    medium: {
        fontWeight: "normal",
        minWidth: "150px",
        height: "45px",
    },
    small: {
        fontWeight: "normal",
        minWidth: "100px",
        height: "35px",
    }
};

const ButtonStyle = styled.button`
    // size 버튼 사이즈별 props 전달 아래 3항목(font-weight, min-width, height)
    font-weight: ${(props) => buttonSizes[props.size].fontWeight};
    min-width: ${(props) => buttonSizes[props.size].minWidth};
    height: ${(props) => buttonSizes[props.size].height};

    margin:5px 0;
    font-size:18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    background-color: #FF7E36;
    transition: all 0.03s ease-out;
    &:hover {
        background-color: #ed6c26;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
`;

const CommonButton = ({ children, size = "medium", ...rest }) => {
    return (
        <ButtonStyle size={size} {...rest}>
            {children}
        </ButtonStyle>
    );
};

export default CommonButton;
