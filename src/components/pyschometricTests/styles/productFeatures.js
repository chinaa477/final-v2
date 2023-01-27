import tw, { styled } from "twin.macro"

const StyledProductFeatures = styled.section`
  ${tw`md:(pb-0 px-32) px-5 py-8 flex flex-col justify-center items-center container mx-auto`};
  h4 {
    ${tw`text-primary-dark md:text-3xl text-xl font-medium leading-10 md:w-1/2 w-full mx-auto text-center`};
  }
  h6 {
    ${tw`text-muted md:text-lg text-base font-normal leading-8 md:w-4/5 w-full mx-auto text-center py-4`};
  }
  img {
    ${tw`w-auto m-auto`}
  }
`

export default StyledProductFeatures
