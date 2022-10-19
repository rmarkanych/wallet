import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[11]}px;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  @media screen and (min-width: 768px) {
    padding-left: ${p=>p.theme.space[0]}px;
    margin-top: ${p=>p.theme.space[12]}px;
    margin-bottom: ${p=>p.theme.space[10]}px;
    margin-left: ${p=>p.theme.space[10]}px;
    gap: ${p=>p.theme.space[9]}px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${p=>p.theme.space[4]}px;
    padding-left: ${p=>p.theme.space[0]}px;
  }
`;

export const Item = styled.li`
  list-style: none;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p=>p.theme.space[9]}px;
  text-decoration: none;
  &.active > svg {
    fill: ${p=>p.theme.colors.blue};
  }
  &.active > span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const Span = styled.span`
  font-family: ${p => p.theme.fonts.poppins};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p=>p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
`;

export const Svg = styled.svg`
  width: ${p=>p.theme.space[13]}px;
  height: ${p=>p.theme.space[13]}px;
  fill: ${p=>p.theme.colors.darkBlue};
  @media screen and (min-width: 768px) {
    width: ${p=>p.theme.space[14]}px;
    height: ${p=>p.theme.space[14]}px;
  }
`;
