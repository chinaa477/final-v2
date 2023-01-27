import  { styled } from 'twin.macro';

const StyledToggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default StyledToggle;
