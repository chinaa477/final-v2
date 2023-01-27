import tw, { styled } from 'twin.macro';

const StyledFooter = styled.footer`
    ${tw`w-full md:p-8 py-8 px-0`};
    background: linear-gradient(180deg, #E4EFFF 0%, rgba(228, 239, 255, 0.6) 112.95%, rgba(228, 239, 255, 0) 122.1%);
    clip-path: polygon(0 18%, 100% 0, 100% 100%, 0% 100%);

    .wrapper {
        ${tw`flex flex-col container md:(px-32 py-16 mt-24) px-5 py-8 mx-auto`};

        .contact-wrapper {
            ${tw`flex flex-col md:flex-row justify-between`}
            .left {
                ${tw`md:w-1/2 w-full`}
                .desc {
                    ${tw`text-base text-primary-dark py-6 text-justify`}
                }
                .download {
                    ${tw`py-6`}
                    img {
                        ${tw`w-36`}
                    }
                    h4 {
                        ${tw`text-sm tracking-wide text-primary-dark pb-2 font-semibold`}
                    }
                }
                .contact-info {
                    h4 {
                        ${tw`text-sm tracking-wide text-primary-dark pb-2 font-semibold`}
                    }
                    .cta {
                        ${tw`flex md:flex-row flex-col gap-4`}
    
                        a {
                            ${tw`flex gap-1 text-sm text-primary-dark tracking-wide`}
                        }
                    }
                }
            }
            .right {
                ${tw`flex md:flex-row flex-col gap-x-20`}
                .products, .social-links {
                    ${tw`flex flex-col pt-8 md:pt-0`}
                    h4 {
                        ${tw`text-sm tracking-wide text-primary-dark pb-4 font-semibold`}
                    }
                    ul {
                        ${tw`flex flex-col gap-y-2 text-base text-primary-dark`}

                        a {
                            ${tw`text-primary-dark cursor-pointer`}
                        }
                    }
                }
            }
        }
        hr {
         ${tw`my-6 border-pragraph-color border-opacity-50`}
        }
        .copyright-wrapper {
            ${tw`flex md:flex-row flex-col justify-between`}
            .left {
                ${tw`text-sm font-semibold text-primary-dark tracking-wide`}
            }
            .right {
                ${tw`flex md:(flex-row pt-0 gap-8) flex-col gap-4 pt-4`}

                div {
                    ${tw`text-primary-dark cursor-pointer`}
                }
            }
        }
    }

    @media (max-width: 768px) {
        clip-path: polygon(0 4%, 100% 0, 100% 100%, 0% 100%);
    }
`;

export default StyledFooter;
