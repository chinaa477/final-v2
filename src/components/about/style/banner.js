import tw, { styled } from 'twin.macro';

const StyledBanner = styled.section`
.banner {
    ${tw`md:(pt-32 pb-28) pt-24 pb-12 bg-primary bg-opacity-5 relative overflow-hidden`}
    .container {
        ${tw`flex flex-col gap-y-6 items-center justify-center container mx-auto md:px-72 px-5 `} 
        h1 {
            ${tw`md:text-4xl text-2xl font-extrabold text-center`}
        }
        .desc {
            ${tw`md:text-xl text-center text-lg font-semibold`}
        }
        .shape-group {
            ${tw`hidden md:flex`}
            .shape-1, .shape-4 {
                ${tw`w-[30rem] h-[30rem] border border-b-gray-400/10 rounded-full absolute`}
            }
            .shape-1 {
                ${tw`top-[-20rem] left-[-4rem]`}
            }
            .shape-4 {
                ${tw`top-[8rem] right-[-11rem]`}
            }
            .shape-2, .shape-3 {
                ${tw`absolute z-[-1]`}
            }
            .shape-3 {
                ${tw`top-[5rem] left-[20%] w-[10rem]`}
            }
            .shape-2 {
                ${tw`top-[8rem] right-[-5rem]`}
            }
        }
    }
}
`;

export default StyledBanner;
