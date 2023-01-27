import tw, { styled } from 'twin.macro';

const StyledHeader = styled.header`
${tw`grid grid-template-columns[1fr minmax(min-content, max-content)] w-full py-5 md:mt-5 mt-0 z-10 absolute`};
transition: background .2s linear;
&.scrolled{
    ${tw`bg-white fixed mt-0 py-4 shadow`};
    .download {
        ${tw`bg-primary text-white`}
    }
}
`;

export default StyledHeader;
