import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

export const Bidding = styled.div`
  display: flex;
  width: 100%;
  padding: 28px 20px;
  flex-direction: column;
`;

export const BiddingBox = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 18px 0;
  background: #ffffff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
`;

export const BiddingHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BiddingHeaderDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BiddingDate = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  padding: 0 4px;
`;

export const BiddingModalidade = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #60afff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  padding: 5px 10px;
`;

export const BiddingModalidadeOne = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #EEC643;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  padding: 5px 10px;
`;

export const BiddingModalidadeTwo = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #EE434D;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  padding: 5px 10px;
`;

export const BiddingModalidadeThre = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #9110CE;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  padding: 5px 10px;
`;

export const BiddingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px 0;
  padding-bottom: 15px;
  border-bottom: 0.1px solid #c4c4c475;
`;

export const BiddingTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  text-align: left;
  margin-bottom: 7px;
`;

export const BiddingText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
`;

export const BiddingMore = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #60afff;
`;
