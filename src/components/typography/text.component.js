import React from "react";
import styled, { useTheme } from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
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

const CustomText = styled.Text`
    ${({ defaultStyles }) => defaultStyles}
    ${({ variantStyles }) => variantStyles}
`;

export const TypographyText = ({ variant, children }) => {
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
