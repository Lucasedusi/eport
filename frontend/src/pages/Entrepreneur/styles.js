import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Help = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 23px;
  margin: 5px 0;
`;

export const LeftBox = styled.div`
  display: flex;
  flex: 1;

  div {
    flex: 1;
    height: 120px;
    div {
      height: 60px;
    }
  }

  div:last-child {
    div:last-child {
      border-top: 1px dotted #666666;
      border-left: 1px dotted #666666;
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex: 1;

  div {
    flex: 1;
    height: 120px;
    div {
      height: 60px;
    }
  }

  div:first-child {
    div:last-child {
      border-top: 1px dotted #666666;
      border-right: 1px dotted #666666;
    }
  }
`;

export const BorderPrimary = styled.div`
  height: 40px;
  border-top: 1px dotted #666666;
  border-right: 1px dotted #666666;
  /* box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.05); */
`;

export const Card = styled.div`
  width: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 10px;
`;

export const TextBox = styled.p`
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  padding: 10px 0;
`;

export const HelpFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 0px 15px;
`;

export const LightFooter = styled.img``;

export const TitleHelpFooter = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #253368;
`;

