import React, { FC } from "react";
import styled, { useTheme, DefaultTheme } from "styled-components/native";

const defaultTextStyles = (theme: DefaultTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: DefaultTheme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
`;

const variants = {
    title,
    body,
    label,
    caption,
    error,
    hint,
};

const CustomText = styled.Text<{
    defaultStyles: string;
    variantStyles: string;
}>`
    ${({ defaultStyles }) => defaultStyles}
    ${({ variantStyles }) => variantStyles}
`;

interface TypographyTextProps {
    variant: keyof typeof variants;
}

export const TypographyText: FC<TypographyTextProps> = ({
    variant,
    children,
}) => {
    const theme = useTheme();
    const defaultStyles = defaultTextStyles(theme);
    const variantStyles = variants[variant](theme);
    return (
        <CustomText defaultStyles={defaultStyles} variantStyles={variantStyles}>
            {children}
        </CustomText>
    );
};

TypographyText.defaultProps = {
    variant: "body",
};
