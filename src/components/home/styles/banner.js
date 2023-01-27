import tw, { styled } from 'twin.macro';

const StyledBanner = styled.section`
${tw`md:pt-36 md:pb-4 pb-8 pt-28`};

.hero {
  ${tw`grid md:grid-cols-2 grid-cols-1 items-center container mx-auto md:px-32 px-5 gap-y-10`};

  .left {
      ${tw`md:pr-20 pr-0 flex items-start flex-col`};
      h1 {
        ${tw`text-primary-dark md:text-4xl text-2xl font-bold md:leading-[3.5rem] leading-[2rem]`};
        span {
            ${tw`text-primary underline`}
        }
      }
      h2 {
        ${tw`text-muted md:text-lg text-base font-normal leading-8 md:py-10 md:pr-20 pr-0 py-6 text-justify`};
      }
      .cta {
        ${tw`flex flex-row p-4 rounded-md items-center gap-x-2 bg-primary-dark text-sm text-white cursor-pointer`}

        svg {
            path {
                fill: white;
            }
        }
      }
  }

  .right {
      ${tw`flex justify-end`};

      .bg-right {
          ${tw`absolute top-0 right-0 z-[-1] md:flex hidden`}
      }
  }
}
`;

export default StyledBanner;
