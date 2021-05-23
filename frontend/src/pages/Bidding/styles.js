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
  border-top: 0.1px solid #6666660f;
`;

export const Document = styled.img``;

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
  margin: 20px 0;
`;

export const TitleHelp = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #253368;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const BoxFilterPrimary = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #666666;
  align-items: flex-start;
`;

export const BoxFilter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #666666;
  align-items: flex-start;
`;

export const LabelModalidade = styled.span`
  margin-bottom: 5px;
`;

export const FilterModalidade = styled.select`
  height: 30px;
  width: 100%;
  border-radius: 10px;
`;
