import tw, { styled } from 'twin.macro';

const StyledCourseContent = styled.section`
${tw`md:py-20 py-5 bg-amber-100/50`};
@keyframes tslHeight {
    0% {
        max-height: 5rem;
    }
    100% {
        max-height: 100rem;
    }
  }
.main-container {
    ${tw`flex md:flex-row flex-col-reverse items-start justify-center container mx-auto md:px-8 px-5 gap-8`};
    .left {
        ${tw`md:w-3/4 w-full`}
        .tabs-list {
            ${tw`flex flex-row w-full justify-between md:(px-4 gap-x-4) gap-x-2 bg-[#f2f0e7] shadow-md rounded-md font-bold md:sticky top-24`}
            button {
                ${tw`focus:outline-none`}
                .button {
                    ${tw`md:p-3 px-1 py-2 relative`};
                    &:before {
                        ${tw`w-0 absolute left-0 h-[3px] bg-primary bottom-0`}
                        transition: 0.5s;
                        content: '';
                    }
                    &.selected, &:hover {
                        ${tw`text-primary`}
                        &:before {
                            ${tw`w-full`}
                        }
                    }
                }
            }
        }

        .tab-panel {
            ${tw`py-7`}
            > h4 {
                ${tw`md:text-2xl text-xl font-extrabold pb-6`}
            }
            > .description {
                ${tw`flex flex-col gap-y-3 pb-6 text-lg text-muted font-semibold`}
            }
            > ul {
                ${tw`flex flex-col gap-y-3 pb-6 text-lg text-muted font-semibold`}
                li {
                    ${tw`flex flex-row gap-x-2 items-start`}
                    .icon {
                        ${tw`shrink-0 md:text-xl text-lg mt-1`}
                    }
                }
            }
            .disclosure-wrapper {
                ${tw`flex flex-col gap-y-6`}

                .item {
                    ${tw`flex flex-col`}

                    .button {
                        ${tw`flex flex-row justify-between items-center p-4 bg-gray-200/50 rounded-t border`}
                        .course-syllabus {
                            ${tw`flex flex-row gap-2 items-center font-bold`}
                            h5 {
                                ${tw`md:text-xl text-lg text-left`}
                            }

                            .icon {
                                ${tw`h-6 w-6 shrink-0`}
                            }
                        }
                        &.active {
                            ${tw`bg-primary text-white`}

                            .icon {
                                ${tw`rotate-90 transition-transform`}
                            }
                        }
                        .details {
                            ${tw`shrink-0`}
                        }
                    }
                }

                .panel {
                    ${tw`bg-white p-4 shadow-lg rounded-b`}
                    // animation-name: tslHeight;
                    // animation-duration: 1s;
                    // animation-timing-function: ease;

                    .description {
                        ${tw`text-muted font-medium`}
                    }

                    .list {
                        ${tw`flex flex-col pt-4 text-muted font-medium`}

                        li {
                            ${tw`border-b last:border-0 py-4 border-gray-200 flex flex-row items-center justify-between`}

                            .sub-course {
                                ${tw`flex flex-row gap-x-2 items-center`}
                                .icon {
                                    ${tw`w-9 h-9 rounded-full bg-primary bg-opacity-[.15] p-2 text-primary shrink-0`}
                                }
                            }
                            .duration, .quiz {
                                ${tw`shrink-0`}
                                span {
                                    ${tw`px-2 py-1 bg-secondary bg-opacity-10 text-secondary text-sm rounded font-semibold`}
                                }
                            }
                            .quiz {
                                span {
                                    ${tw`bg-primary-dark bg-opacity-10 text-primary-dark`}
                                }
                            }
                        }
                    }
                }
            }
            .instructor-details {
                ${tw`flex flex-col gap-y-1 bg-white p-4 rounded border`}
                .instructor-name {
                    ${tw`md:text-2xl text-xl font-extrabold`}
                }
                .expert {
                    ${tw`text-secondary font-bold`}
                }
                .details {
                    ${tw`flex flex-row gap-x-4 pt-4`}
                    li {
                        ${tw`flex flex-row gap-x-2 items-center text-tsl-black font-semibold`}
                        .divider {
                            ${tw`w-[1px] h-full bg-gray-300`}
                        }
                        .icon {
                            ${tw`md:text-2xl text-xl text-primary`}
                        }
                    }
                }
                p {
                    ${tw`pt-4`}
                }
            }
        }
    }
    .right {
        ${tw`md:(sticky w-1/4) w-full top-28`}
        .course-sidebar {
            ${tw`p-6 bg-white shadow-xl rounded-md`}
            .details {
                ${tw`flex flex-col`}
                li {
                    ${tw`flex flex-row justify-between items-center py-4 border-b`}
                    .label {
                        ${tw`flex flex-row items-center gap-x-2`}
                    }
                }
            }
            .share {
                ${tw`flex flex-row gap-x-4 pt-4 items-center justify-center`}

                .label {
                    ${tw`font-bold`}
                }

                .icon {
                    ${tw`flex items-center justify-center text-white`}
                    &:nth-child(2) {
                        button {
                        ${tw`!bg-[#3b5998] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                        }
                    }
                    &:nth-child(3) {
                        button {
                        ${tw`!bg-[#007fb1] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                    }
                    }
                    &:nth-child(4) {
                        button {
                        ${tw`!bg-[#00aced] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                    }
                    }
                    button {
                        ${tw`!p-3`}
                    }
                }
            }
        }
    }
}
`;

export default StyledCourseContent;
