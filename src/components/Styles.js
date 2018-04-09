import styled from 'styled-components';
import Card from 'material-ui/Card';

export const Wrapper = styled.div`
  margin: 5rem auto 0;
  border: 2px solid red;
  height: 100px;
  width: 100px;
`;

export const StyledCard = styled(Card)`
  width: 500px;
  height: 300px;
  margin: 9rem auto 0;
  padding: 3rem;
`;

export const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  display: block;
  text-align: center;
`;

export const FieldWrapper = styled.div`
  margin: 2rem auto 0;
  width: 280px;
`;

export const fieldStyle = {
  margin: '0 auto',
  display: 'block',
  margin: '0 auto'
};

export const ButtonWrapper = styled.div`
  margin: 2rem auto 0;
  width: 280px;
  display: flex;
  justify-content: space-between;
`;
