import styled from "styled-components";

export default function Header({ logo }) {
    return (
        <ContainerHeader>
            <HeaderTag>
                <img alt="logo" src={logo} />
                <h1>ZapRecall</h1>
            </HeaderTag>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    background-color: #FB6B6B;
    position: fixed;
    z-index: 1;
    top: 0px;
    width: 100%;
`;

const HeaderTag = styled.header`
    width: 100%;
    height: 125px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 52px;
    }
`;