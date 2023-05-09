import tw, { styled } from 'twin.macro';

const StyledAbout = styled.section`
${tw`md:py-32 py-12 bg-amber-100/50`};
.wrapper {
    ${tw`flex md:flex-row flex-col items-center justify-center container mx-auto md:(px-8 gap-12) gap-4 px-5`}
    .left {
        ${tw`md:w-1/2 w-full flex items-center justify-center md:p-12 p-0`}
        .image {
            ${tw`md:(rounded-2xl rounded-tr-[8rem]) rounded-tr-[4rem] rounded-lg shadow-xl`}
        }
    }
    .right {
        ${tw`md:w-1/2 w-full`}
        h3 {
            ${tw`text-3xl font-extrabold`}
        }
        p {
            ${tw`md:text-xl text-lg font-medium text-muted py-6 leading-normal`}
        }
        ul {
            ${tw`grid grid-cols-2 gap-4`}

            li {
                ${tw`flex flex-row gap-x-3 items-center`}
                .icon {
                    ${tw`text-secondary md:text-2xl text-xl  w-10 h-10 rounded-full p-2 bg-secondary bg-opacity-20`}
                }
                span {
                    ${tw`text-lg font-bold`}
                }
            }
        }
    }
}
`;

export default StyledAbout;