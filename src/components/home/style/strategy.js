import tw, { styled } from 'twin.macro';

const StyledStrategy = styled.section`
${tw`md:py-32 py-12 bg-amber-100/50`};
.main-container {
    ${tw`flex flex-col items-center justify-center container mx-auto md:px-8 px-5`};

    h3 {
        ${tw`uppercase text-tsl-black font-bold text-base tracking-wider`}
    }

    h2 {
        ${tw`md:text-4xl text-2xl font-bold text-center pt-2 pb-12`}

        span {
            ${tw`text-primary`}
        }
    }

    .strategy-list {
        ${tw`grid md:(grid-cols-4 gap-x-10) grid-cols-1 gap-y-4`}

        .strategy-wrapper {
            ${tw`flex flex-col bg-white rounded-lg shadow-[0px 10px 30px 0px rgba(0, 0, 0, 0.05)] p-4`}
            .top-inner {
                ${tw`w-[7.5rem] h-[7.5rem] rounded-full flex justify-center items-center mx-auto`}
                .icon {
                    ${tw`md:text-4xl text-2xl`}
                }
            }
            .box {
                ${tw`p-4 flex flex-col justify-center items-center text-center`}

                h3 {
                    ${tw`md:text-xl text-lg font-bold`}
                }
                span {
                    ${tw`pt-4 text-tsl-light-black font-semibold text-base`}
                }
            }
            

            &:nth-child(1) {
                .top-inner {
                    ${tw`bg-primary bg-opacity-5`}
                    
                    .icon {
                        ${tw`text-primary`}
                    }
                }

                &:hover {
                    .top-inner {
                        ${tw`bg-primary`}
                        
                        .icon {
                            ${tw`text-white`}
                        }
                    }
                }
            }

            &:nth-child(2) {
                .top-inner {
                    ${tw`bg-secondary bg-opacity-5`}
                    
                    .icon {
                        ${tw`text-secondary`}
                    }
                }
                &:hover {
                    .top-inner {
                        ${tw`bg-secondary`}
                        
                        .icon {
                            ${tw`text-white`}
                        }
                    }
                }
            }

            &:nth-child(3) {
                .top-inner {
                    ${tw`bg-tsl-blue bg-opacity-5`}
                    
                    .icon {
                        ${tw`text-tsl-blue`}
                    }
                }
                &:hover {
                    .top-inner {
                        ${tw`bg-tsl-blue`}
                        
                        .icon {
                            ${tw`text-white`}
                        }
                    }
                }
            }

            &:nth-child(4) {
                .top-inner {
                    ${tw`bg-tsl-orange bg-opacity-5`}
                    
                    .icon {
                        ${tw`text-tsl-orange`}
                    }
                }
                &:hover {
                    .top-inner {
                        ${tw`bg-tsl-orange`}
                        
                        .icon {
                            ${tw`text-white`}
                        }
                    }
                }
            }
        }
    }
}
`;

export default StyledStrategy;
