import { themeGet } from '@styled-system/theme-get';
import styled, { css, ThemeProps } from 'styled-components';
import { Link, GatsbyLinkProps } from 'gatsby';
import { Theme, theme } from '@cogito-study/alea';
import { compose, ColorProps, color, SpaceProps, space, TypographyProps, typography } from 'styled-system';

interface Props {
  hoverColor?: string;
}

type StyledGatsbyLinkProps = Props &
  ThemeProps<Theme> &
  ColorProps &
  SpaceProps &
  TypographyProps &
  GatsbyLinkProps<any>;

const styledProps = compose(
  color,
  space,
  typography,
);

const style = () => css`
  color: ${({ theme }: StyledGatsbyLinkProps) => theme.colors.neutral[5]};
  text-decoration: none;
  cursor: not-allowed;

  :link,
  :visited {
    color: ${({ color, theme: { colors } }: StyledGatsbyLinkProps) => themeGet(`colors.${color}`, colors.accent[6])};
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    color: ${({ to, hoverColor, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.neutral[4] : themeGet(`colors.${hoverColor}`, colors.accent[8])};
    text-decoration: none;
  }

  :focus {
    color: ${({ to, color, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.neutral[4] : themeGet(`colors.${color}`, colors.accent[5])};
    text-decoration: underline;
    outline: none;
  }

  :active {
    color: ${({ to, color, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.neutral[4] : themeGet(`colors.${color}`, colors.accent[5])};
    text-decoration: none;
  }
`;

export const StyledGatsbyLink = styled(Link)<StyledGatsbyLinkProps>`
  ${style}
  ${styledProps}
`;

StyledGatsbyLink.defaultProps = {
  theme: theme,
  fontFamily: 'heading',
  fontSize: 1,
};
