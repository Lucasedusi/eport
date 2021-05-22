import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TopBar = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  border-bottom: 0.1px solid #6666660f;
`;

export const Title = styled.h2`
  font-weight: normal;
  font-size: 14px;
  color: #666666;
`;

export const Help = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TitleHelp = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #253368;
`;


export const Content = styled.div`
  /* margin: 45px; */
`;

export const Image = styled.img``;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #253368;
  margin: 15px 0 0 0;
`;

export const ImgBackground = styled.img``;

export const Button = styled.div`
  display: flex;
  margin-top: 36px;
  align-items: center;
  justify-content: center;

  a {
    background-color: #60afff;
    padding: 10px 30px;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 25%);
  }

  strong {
    color: #eec643;
  }
`;
