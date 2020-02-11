import { themeGet } from '@styled-system/theme-get';
import styled, { css, ThemeProps } from 'styled-components';
import { Link, GatsbyLinkProps } from 'gatsby';
import { theme } from '../../theme/chakra';
import {
  compose,
  ColorProps,
  color,
  SpaceProps,
  space,
  TypographyProps,
  typography,
} from 'styled-system';

type Theme = typeof theme;
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
  color: ${({ theme }: StyledGatsbyLinkProps) => theme.colors.grey[500]};
  text-decoration: none;
  cursor: not-allowed;

  :link,
  :visited {
    color: ${({ color, theme: { colors } }: StyledGatsbyLinkProps) =>
      themeGet(`colors.${color}`, colors.teal[600])};
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    color: ${({ to, hoverColor, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.grey[400] : themeGet(`colors.${hoverColor}`, colors.teal[800])};
    text-decoration: none;
  }

  :focus {
    color: ${({ to, color, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.grey[400] : themeGet(`colors.${color}`, colors.teal[500])};
    text-decoration: none;
    outline: none;
  }

  :active {
    color: ${({ to, color, theme: { colors } }: StyledGatsbyLinkProps) =>
      !to ? colors.grey[400] : themeGet(`colors.${color}`, colors.teal[500])};
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
