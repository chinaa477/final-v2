import tw, { styled } from "twin.macro"

const StyledFeatureDetails = styled.section`
  ${tw`grid items-center container mx-auto md:px-32 px-5 md:py-10 py-8 md:gap-8 gap-16`};

  .wrapper {
    ${tw`flex md:flex-row flex-col w-full md:py-16 py-0 items-center gap-8`};

    .left,
    .right {
      ${tw`md:w-1/2 w-full`}
    }

    .right {
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

    .left img {
      ${tw`w-full`}
    }
  }
`

export default StyledFeatureDetails
