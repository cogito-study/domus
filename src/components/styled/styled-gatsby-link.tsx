import { themeGet } from '@styled-system/theme-get';
import styled, { css, ThemeProps } from 'styled-components';
import { Link, GatsbyLinkProps } from 'gatsby';
import { Theme, theme } from '@cogito-study/alea';
import { compose, ColorProps, color, SpaceProps, space, TypographyProps, typography } from 'styled-system';

interface Props {
  color?: string;
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

const style = ({
  theme: {
    colors: { accent, grey },
  },
  color,
  hoverColor,
}: StyledGatsbyLinkProps) => css`
  color: ${grey.light['2']};
  text-decoration: none;
  cursor: not-allowed;

  :link,
  :visited {
    color: ${({ color }: StyledGatsbyLinkProps) => themeGet(`colors.${color}`, accent.normal)};
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    color: ${({ to }: StyledGatsbyLinkProps) =>
      !to ? grey.light['2'] : themeGet(`colors.${hoverColor}`, accent.dark)};
    text-decoration: none;
  }

  :focus {
    color: ${({ to }: StyledGatsbyLinkProps) => (!to ? grey.light['2'] : themeGet(`colors.${color}`, accent.normal))};
    text-decoration: underline;
    outline: none;
  }

  :active {
    color: ${({ to }: StyledGatsbyLinkProps) => (!to ? grey.light['2'] : themeGet(`colors.${color}`, accent.normal))};
    text-decoration: none;
  }
`;

export const StyledGatsbyLink = styled(Link)`
  ${style}
  ${styledProps}
`;

StyledGatsbyLink.defaultProps = {
  theme: theme,
  fontFamily: 'heading',
  fontSize: 1,
};
