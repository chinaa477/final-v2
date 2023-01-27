import tw, { styled } from "twin.macro"

const StyledFeatureDetails = styled.section`
  ${tw`grid items-center container mx-auto md:px-32 px-5 md:py-10 py-8 md:gap-8 gap-16`};

  .wrapper {
    ${tw`flex odd:md:flex-row-reverse even:md:flex-row flex-col w-full items-center gap-8`};

    .left,
    .right {
      ${tw`md:w-1/2 w-full`}
    }

    .right {
      .description {
        ${tw`list-disc text-muted text-base font-normal py-6 leading-relaxed text-justify gap-6 flex flex-col`}
      }
    }
  }
`

export default StyledFeatureDetails
