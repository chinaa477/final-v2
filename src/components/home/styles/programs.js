import tw, { styled } from 'twin.macro';

const StyledPrograms = styled.section`
${tw`grid items-center container mx-auto md:(px-32 py-10) px-5 py-8`};

    .heading-wrapper {
        ${tw`flex flex-col md:items-center items-start md:flex-row`}
        h4 {
            ${tw`text-primary-dark md:(text-3xl w-1/2) leading-10 text-xl font-medium w-full`};
        }
        h6 {
            ${tw`text-muted md:(text-lg w-1/2 pr-20) text-base font-normal leading-8 w-full pt-4 pr-0`};
        }
        .cta {
            ${tw`flex md:hidden flex-row p-4 rounded-md gap-x-2 bg-primary-dark text-sm text-white cursor-pointer whitespace-nowrap my-4`}
    
            svg {
                path {
                    fill: white;
                }
            }
          }
    }
    .wrapper {
        ${tw`flex md:(flex-row gap-x-24 gap-y-0 pt-10) flex-col gap-x-0 gap-y-8 pt-4`}

        .list {
            ${tw`px-6 pt-16 pb-6 rounded-xl relative bg-white hover:shadow-xl shadow-none`};
            .heading {
                ${tw`text-primary-dark md:text-2xl text-lg font-bold`}
            }
    
            .description {
                ${tw`text-muted text-base font-normal py-4`}
            }
    
            ul.feature-list {
                ${tw`flex flex-col gap-y-4`}
                li {
                    ${tw`text-muted text-base font-normal flex flex-row items-start`}
    
                    .icon {
                        ${tw`rounded-full flex-shrink-0 flex items-center justify-center`}
                        width: 1.25rem;
                        height: 1.25rem;
                        background: rgba(59, 130, 246, 0.25);
    
                        svg {
                            color: #55ADFF;
                        }
    
                    }
                    .item-text {
                        ${tw`pl-2 text-sm`}
                    }
                }
            }

            &:last-child {
                ${tw`border border-primary`};
            }

            .most-popular {
                ${tw`bg-muted py-2 px-4 rounded-2xl inline-flex text-primary-dark text-xs font-bold absolute top-[1.25rem] right-[1.25rem]`};
                background: rgba(59, 130, 246, 0.25);
            }
        }
    }
`;

export default StyledPrograms;
