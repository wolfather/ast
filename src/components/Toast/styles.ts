import styled from 'styled-components';


interface Container {
    status: string;
}

export const ToastContainer = styled.div<Container>`
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 2;
    align-self: center;
    padding: 10px;
    background: ${props => props.status === 'Open' ? '#0f0' : '#f00'};
`
