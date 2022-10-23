import styled from 'styled-components';
import GirlTablet from '../../assets/images/Main-IMG/Framemain-img-Md_x1.png';
import GirlDesktop from '../../assets/images/Main-IMG/Framemain-Img-Lg_x1.png';
import splashBlue from '../../assets/images/BG/Ellipse-blue.png';
import splashOrange from '../../assets/images/BG/Ellipse-orange.png';
import splashOrangeBlur from '../../assets/images/BG/Ellipse-orange-blur.png';
import splashBlueDesktop from '../../assets/images/BG/Ellipse-blue-desktop.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 107px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: relative;
    /* min-width: 768px; */
    min-height: 1024px;
    background-color: #e7eaf2;

    background-image: url(${splashBlue}), url(${splashOrange});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
    position: relative;
    display: flex;
    justify-content: flex-end;
    /* width: 1280px; */
    /* min-height: 720px; */
    background-color: #e7eaf2;

    background-image: url(${splashOrangeBlur}), url(${splashBlueDesktop});

    background-repeat: no-repeat;
    background-position: top 0 right 0, bottom 0 left 0;
  }
`;

export const Page = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: relative;
    min-width: 768px;
    height: 1024px;
    /* background-color: #e7eaf2; */

    background-image: url(${GirlTablet});
    background-repeat: no-repeat;
    background-position: top 60px left 114px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 1280px;
    /* height: 720px; */
    /* background-color: #e7eaf2; */

    background-image: url(${GirlDesktop});

    background-repeat: no-repeat;
    background-position: top 153px left 66px;
  }
`;

export const Blur = styled.div`
  @media screen and (min-width: 768px) {
    /* display: flex;
    justify-content: center;
    margin-top: 360px; */
    margin-top: 360px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    /* padding: 100px; */
    backdrop-filter: blur(25px);
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 320px) and (max-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 163px;
    right: 153px;
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 30px;
    line-height: 45px;
    display: inline-block;
    color: black;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 597px;
    left: 200px;
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 30px;
    line-height: 45px;
    display: inline-block;
    color: black;
  }
`;
