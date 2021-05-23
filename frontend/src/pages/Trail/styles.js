import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.h2`
  font-weight: normal;
  font-size: 14px;
  color: #666666;
`;

export const Light = styled.img``;

export const Help = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
`;

export const TitleHelp = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #253368;
`;

export const BoxInitial = styled.div`
  display: flex;
  margin: 0 45px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px 25px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  background: rgba(96, 175, 255, 0.15);
  border: 2px solid #60afff;
  box-sizing: border-box;
  border-radius: 20px;
  text-align: center;
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  margin-top: 30px;
`;
export const BoxChildrenLeft = styled.div`
  background: rgba(96, 175, 255, 0.15);
  border: 2px solid #60afff;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 15px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  width: 50%;
  color: #666666;
`;

export const BoxChildren = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;

export const BoxChildrenRight = styled.div`
  background: rgba(96, 175, 255, 0.15);
  border: 2px solid #60afff;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 15px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  width: 35%;
  color: #666666;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 30px;
  margin: 20px 20px;
  background: #ffffff;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
`;

export const TitleHeader = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: right;

  color: #666666;
`;
