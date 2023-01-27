import tw, { styled } from 'twin.macro';

const StyledHamburger = styled.div`
${tw`w-8 h-1 self-center relative bg-primary`}
    transition: all 0.3s linear;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    ::before,
    ::after {
        ${tw`w-8 h-1 self-center absolute bg-primary left-0`};
        content: "";
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
            props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
`;

export default StyledHamburger;
