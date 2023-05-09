import tw, { styled } from 'twin.macro';

const StyledBanner = styled.section`
${tw`pt-32 bg-primary bg-opacity-[.05]`};

@keyframes tslRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(1turn);
  }
}

@keyframes tslScale {
  0% {
    transform: scale(0.9);
  }
  50% {
      transform: scale(0.8);
  }
  100% {
      transform: scale(0.9);
  }
}
@keyframes tslBounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hero {
  ${tw`grid md:grid-cols-2 grid-cols-1 items-center container mx-auto md:px-8 px-5 gap-y-10 min-h-[42rem] relative`};

  .left {
      ${tw`md:pr-6 pr-0 flex items-start flex-col`};
      .content {
        ${tw`flex flex-col items-start`}
        h1 {
          ${tw`text-tsl-black md:text-5xl md:text-2xl text-xl font-extrabold md:leading-[3.5rem] leading-[2rem]`};
        }
        p {
          ${tw`text-dark font-semibold md:text-xl text-lg py-8 pr-52`}
        }
        .cta {
          ${tw`flex flex-row px-6 py-3 md:text-xl text-lg font-medium rounded-md items-center gap-x-2 bg-primary text-white cursor-pointer transition transform duration-1000 hover:-translate-y-2 `};
        }
      }
  }

  .right {
      ${tw`flex justify-end`}

      .banner-shape-1 {
        ${tw`absolute -z-[1] right-[5%] bottom-[-1rem]`}
        animation-name: tslRotate;
        animation-duration: 50s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      .banner-shape-2 {
        ${tw`absolute -z-[1] top-[7rem] right-[5%]`}
        animation: 4s linear 0s infinite normal none running tslScale;
      }
      .banner-shape-3 {
        ${tw`absolute -z-[1] bottom-[-8rem] left-[0rem]`}
        animation: 4s linear 0s infinite normal none running tslBounce;
      }
  }
}

.feature-area {
  background: -webkit-linear-gradient(right, #31b978 0%, #1ab69d 100%);
  background: linear-gradient(-90deg, #31b978 0%, #1ab69d 100%);

  .wrapper {
    ${tw`container mx-auto px-4`}

    .main-grid {
      ${tw`grid md:grid-cols-4 grid-cols-1`}

      .feature-box {
        ${tw`md:py-12 py-4 text-white md:text-2xl text-xl border-white border-opacity-[.25] md:border-r border-b last:border-none md:pl-8 pl-0 first:pl-0 flex items-center gap-4`}

        .icon {
          ${tw`md:(w-20 h-20) w-10 h-10 rounded-full flex items-center justify-center bg-white bg-opacity-[.15]`}
        }

        .content {
          h5 {
            ${tw`flex flex-col md:text-xl text-lg leading-7`}
          }
        }
      }
    }
  }
}
`;

export default StyledBanner;
