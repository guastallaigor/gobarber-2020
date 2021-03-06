import styled, { css } from 'styled-components';
import { tint, shade } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: ${theme.colors.white};

    > main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      padding: 1.6rem;

      > header svg {
        width: 24rem;
        height: auto;
      }

      > footer {
        margin-top: 8rem;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.orange};
          border-bottom: 1px solid transparent;

          :hover {
            color: ${tint(0.13, theme.colors.orange)};
            border-bottom-color: ${tint(0.13, theme.colors.orange)};
            text-decoration: none;
          }

          :active {
            color: ${shade(0.13, theme.colors.orange)};
          }

          > svg {
            margin-right: 1.6rem;
          }
        }
      }
    }
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100%;

  canvas {
    mix-blend-mode: color-burn;
    opacity: 0.2;
  }

  img {
    object-fit: cover;
    mix-blend-mode: color-burn;
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8rem;

    > strong {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }

    > label {
      :last-of-type {
        margin-bottom: 2.4rem;
      }
    }

    > button + span {
      margin-top: 2.4rem;
    }
  `}
`;
