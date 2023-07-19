import styled from 'styled-components';

export const EntriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Badge = styled.span`
  max-width: 100%;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  height: 20px;
  border-radius: 18px;
  text-decoration: none;
  padding: 0px 8px 0px 8px;
  vertical-align: middle;
  border: 1px solid rgba(59, 74, 89, 0.5);
  font-weight: 600;
  background-color: rgba(10, 62, 121, 0.4);
  margin: 0px 8px;
`;