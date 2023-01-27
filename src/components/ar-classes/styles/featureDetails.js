import tw, { styled } from "twin.macro"

const StyledFeatureDetails = styled.section`
  ${tw`grid items-center container mx-auto md:px-32 px-5 md:py-10 py-8 md:gap-8 gap-16`};

  .wrapper {
    ${tw`flex md:flex-row flex-col w-full items-center gap-8`};

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
    }
  }
`

export default StyledFeatureDetails
