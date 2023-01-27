import tw, { styled } from 'twin.macro';

const StyledFeatures = styled.section`
${tw`md:(pt-20 pb-10 px-0) px-5 py-8`};
h4 {
    ${tw`text-primary-dark md:text-3xl text-xl font-medium leading-10 md:w-1/3 w-full mx-auto text-center md:px-16 px-0`};
}
h6 {
    ${tw`text-muted md:text-lg text-base font-normal leading-8 md:w-1/2 w-full mx-auto text-center md:px-32 px-0 py-4`};
}
.slider-wrapper {
    ${tw`container mx-auto md:px-32 px-0 pt-8`};

    .features-slider {
        &.swiper {
            .bg {
                ${tw`md:w-4/12 w-full absolute top-0 md:left-1/3 left-0`};
                height: calc(100% - .5rem);

                img {
                    box-shadow: 0px 30px 60px rgba(25, 55, 102, 0.25);
                    width: 100%;
                    height: 100%;
                }
            }
            .swiper-wrapper {
                .swiper-slide {
                    ${tw`md:p-12 p-6 md:w-4/12 w-full`};
    
                    img {
                        ${tw`bg-primary-dark p-4 shadow-lg rounded-md`};
                    }
    
                    h3 {
                        ${tw`text-xl font-medium py-5 text-primary-dark`};
                    }
    
                    p {
                        ${tw`text-base font-light text-muted leading-7 text-justify`};
                    }
    
                    &.swiper-slide-active {
                        // ${tw`bg-primary-dark rounded-md shadow-md transition-all`};
    
                        img {
                            ${tw`bg-white/[.08] shadow-none`};
                        }
    
                        h3, p {
                            ${tw`text-white`}
                        }
                    }
                }
            }
        }
    }
}
`;

export default StyledFeatures;
