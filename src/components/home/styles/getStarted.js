import tw, { styled } from 'twin.macro';

const StyledGetStarted = styled.section`
${tw`grid items-center container mx-auto md:(px-32 py-10) px-5 py-8`};
.wrapper {
    ${tw`flex flex-col gap-y-4 items-center md:w-1/2 w-full text-center mx-auto`}

    .chip {
        ${tw`text-primary font-medium px-6 py-2 rounded-3xl`}
        background: rgba(59, 130, 246, 0.1);
    }

    .heading {
        ${tw`text-primary-dark md:text-3xl text-xl font-medium leading-10`}

        span {
            ${tw`text-primary underline`}
        }
    }

    .description {
        ${tw`text-muted md:text-lg text-base font-normal leading-8`}
    }

    .cta {
        ${tw`flex md:hidden flex-row p-4 rounded-md items-center gap-x-2 bg-primary-dark text-sm text-white cursor-pointer whitespace-nowrap`}

        svg {
            path {
                fill: white;
            }
        }
      }
}
`;

export default StyledGetStarted;
