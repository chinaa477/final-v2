import tw, { styled } from "twin.macro"

const StyledFeaturesList = styled.section`
  ${tw`grid items-center container mx-auto md:px-32 px-5 md:py-10 py-8 md:gap-8 gap-16`};

  .wrapper {
    ${tw`grid md:grid-cols-2 grid-cols-1 items-center gap-8 md:py-16 py-0`};

    &:nth-child(even) {
      .left {
        grid-column: 2;
      }
      .right {
        grid-row: 1;
        grid-column: 1;
      }
    }


    @media (max-width: 768px) {
        &:nth-child(even) {
            .left {
                grid-column:1
            }
            .right {
                grid-row: 2
            }
        }
    }

    .left,
    .right {
      ${tw`w-full`}
    }

    .right img {
      ${tw`w-full rounded-lg`}
    }

    .left {
      .heading {
        ${tw`text-primary-dark md:text-3xl text-xl font-medium`}
      }
      .description {
        ${tw`text-muted text-base font-normal py-6 leading-relaxed text-justify`}
      }

      ul {
        ${tw`flex flex-col gap-y-4`};

        li {
          ${tw`pl-6 relative before:(content-[' '] absolute w-4 h-4 bg-primary left-0 top-1) text-justify`}
          .heading {
            ${tw`text-base text-primary font-medium`}
          }
          .description {
            ${tw`text-base text-primary-dark font-light`}
          }
        }
      }
    }
  }
`

export default StyledFeaturesList
