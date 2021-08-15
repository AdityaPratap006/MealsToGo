import React, { FC } from "react";
import styled, { useTheme, DefaultTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: "margin-top",
    left: "margin-left",
    bottom: "margin-bottom",
    right: "margin-right",
};

const getVariant = (
    position: keyof typeof positionVariant,
    size: keyof typeof sizeVariant,
    theme: DefaultTheme
) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}: ${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
    ${({ variant }) => variant};
`;

interface SpacerProps {
    position: keyof typeof positionVariant;
    size: keyof typeof sizeVariant;
}

export const Spacer: FC<SpacerProps> = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
    position: "top",
    size: "small",
};
