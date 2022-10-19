import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 32px;

  }
  @media screen and (min-width: 1280px) {
    padding: 20px 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Text = styled.p`
font-family: ${p=> p.theme.fonts.circe};
font-weight: ${p=>p.theme.fontWeights.normal};
font-size: 18px;
line-height: ${p=>p.theme.lineHeights.body};
color: ${p=>p.theme.textColor.placeholder};
padding-right: ${p=>p.theme.space[8]};
padding-right: 8px;
margin: 0;

@media screen and (min-width: 768px) {
    padding-right: 12px;
    border-right: 1px solid ${p=> p.theme.textColor.placeholder} ;
  };
  @media screen and (min-width: 1280px) {
    padding-right: 12px;
    border-right: 1px solid ${p=> p.theme.textColor.placeholder} ;

  }
`;
export const Img = styled.img`

@media screen and (min-width: 768px){
    padding-left: 12px;
}
@media screen and (min-width: 1280px){
    padding-left: 12px;
}
`;
export const Div = styled.div`
display: flex;
align-items: center;
`
export const TextExit = styled.p`
padding-left: 8px;
color: ${p=> p.theme.textColor.placeholder};
font-family: ${p=>p.theme.fonts.circe};
font-weight: ${p=>p.theme.fontWeights.normal};
line-height: ${p=>p.theme.lineHeights.body};

`
export const Link = styled(NavLink)`
text-decoration: none;
`