import tw, { styled } from "twin.macro"

const StyledNav = styled.nav`
  ${tw`md:(grid grid-cols-3) flex flex-row gap-x-3 text-center place-items-center container mx-auto md:px-32 px-5 justify-between`};

  .logo {
    ${tw`flex items-center justify-self-start md:(justify-center py-2 w-auto) py-0 w-48`};
  }

  ul {
    ${tw`flex flex-row gap-x-4 whitespace-nowrap`}

    li {
      ${tw`cursor-pointer`}

      a {
        ${tw`text-dark-muted`}
        &:after {
          ${tw`content-[''] block w-0 h-0.5 bg-primary transition-[width]`}
        }
        &.active,
        &:hover {
          ${tw`text-primary`}
          &:after {
            ${tw`w-full`}
          }
        }
      }
    }
  }

  .download {
    ${tw`bg-white shadow-md px-4 py-2 rounded-md ml-auto text-primary cursor-pointer`}
  }
`

export default StyledNav
