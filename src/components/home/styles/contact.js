import tw, { styled } from 'twin.macro';

const StyledContact = styled.section`
${tw`grid items-center container mx-auto md:(px-32 py-16) px-5 py-8`};

.wrapper {
    ${tw`flex flex-col w-full md:(gap-24 flex-row) items-center gap-0`};
    .left {
        ${tw`md:(w-1/2) w-full pr-0 text-center md:text-left`}
        .heading {
            ${tw`text-primary-dark md:text-3xl text-xl font-medium`}
        }
        .description {
            ${tw`text-muted text-base font-normal py-4 gap-y-4 leading-relaxed flex flex-col md:text-justify text-center md:my-0 my-5`}
        }
    }
    .right {
        ${tw`md:(w-1/2 -mt-20 -mb-8 pt-12) m-0 w-full h-[38rem] bg-white rounded-xl shadow-xl pt-4`};

        h4 {
            ${tw`(md:text-xl px-[5rem]) text-base font-medium -mb-12 px-[3rem]`}
        }

        #signupMainDiv {
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
        }
    }
}
`;

export default StyledContact;
