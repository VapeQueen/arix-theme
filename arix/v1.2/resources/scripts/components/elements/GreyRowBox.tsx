import styled from 'styled-components/macro';
import tw from 'twin.macro';

interface GreyRowBoxProps {
    $hoverable?: boolean;
    className?: string; // Allow additional classes
}

export default styled.div.attrs<{ $hoverable?: boolean }>((props) => ({
    className: `backdrop ${props.className || ''}`,
}))<GreyRowBoxProps>`
    ${tw`flex rounded-box no-underline text-neutral-200 items-center bg-neutral-700 p-4 border border-transparent transition-colors duration-150 overflow-hidden`};

    ${(props) => props.$hoverable !== false && tw`hover:border-neutral-500`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-neutral-500 p-3`};
    }
`;
