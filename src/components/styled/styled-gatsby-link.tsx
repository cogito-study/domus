import { theme } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { GatsbyLinkProps, Link } from 'gatsby';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

interface Props {
  hoverColor?: string;
}

type StyledGatsbyLinkProps = Props & ColorProps & SpaceProps & TypographyProps & GatsbyLinkProps<any>;

const styledProps = compose(
  color,
  space,
  typography,
);

export const StyledGatsbyLink = styled(Link)<StyledGatsbyLinkProps>`
  color: ${theme.colors.neutral[5]};
  text-decoration: none;
  cursor: not-allowed;

  :link,
  :visited {
    color: ${theme.colors.accent[6]};
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    color: ${({ to }: StyledGatsbyLinkProps) => (!to ? theme.colors.neutral[4] : theme.colors.accent[8])};
    text-decoration: none;
  }

  :focus {
    color: ${({ to }: StyledGatsbyLinkProps) => (!to ? theme.colors.neutral[4] : theme.colors.accent[5])};
    text-decoration: none;
    outline: none;
  }

  :active {
    color: ${({ to }: StyledGatsbyLinkProps) => (!to ? theme.colors.neutral[4] : theme.colors.accent[5])};
    text-decoration: none;
  }
  ${styledProps}
`;

StyledGatsbyLink.defaultProps = {
  theme: theme,
  fontFamily: 'heading',
  fontSize: 1,
};
