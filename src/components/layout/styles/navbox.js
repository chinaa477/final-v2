import tw, { styled } from 'twin.macro';

const StyledNavbox = styled.div`
${tw`flex h-full items-center md:justify-center justify-end`};

ul {
  ${tw`flex md:flex-row flex-col w-full h-full items-center`};
}
            
@media (max-width: 768px) {
  ${tw`fixed w-full justify-start bg-white top-[4.675rem] pt-[3rem] border-t border-pragraph-color`}
  transition: all 0.3s ease-in;
  left: ${props => (props.open ? "-100%" : "0")};

  ul {
    ${tw`gap-y-2`}

    li {
      ${tw`py-4`}
    }
  }
}
`;

export default StyledNavbox;
