import tw, { styled } from 'twin.macro';

const StyledProducts = styled.section`
${tw`grid items-center container mx-auto md:(px-32 py-10) px-5 py-8`};
h4 {
    ${tw`text-primary-dark md:(text-3xl w-1/2 px-16) text-xl font-medium leading-10 w-full mx-auto text-center px-0`};
}
h6 {
    ${tw`text-muted md:(text-lg w-4/6 px-10) text-base font-normal leading-8 w-full mx-auto text-center px-0 pt-4`};
}
.wrapper {
    ${tw`flex odd:md:flex-row-reverse even:md:flex-row flex-col w-full py-8 items-center md:(gap-24 py-16) gap-6`};

    .left, .right {
        ${tw`md:w-1/2 w-full`}
    }

    .left {
        ${tw`even:md:pl-28 odd:md:pr-28 p-0`}
        .heading {
            ${tw`text-primary-dark md:text-3xl text-xl font-medium`}
        }
        .description {
            ${tw`text-muted text-base font-normal md:py-4 pb-0 pt-4 leading-relaxed md:pr-16 pr-0 text-justify`}
        }
        a {
            ${tw`text-primary underline font-bold`}
        }
    }
}
`;

export default StyledProducts;
