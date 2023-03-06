import styled from "styled-components"

export default function Footer({ count, size }) {
    return (
        <ContainerFooter>
            <FooterTag>
                <p data-test="footer">{count}/{size} CONCLUÍDOS</p>
            </FooterTag>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    z-index: 1;
    bottom: 0px;
    width: 100%;
`;

const FooterTag = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px -4px 6px rgba(0, 0, 0, 0.05));
    clip-path: inset(-30px 0px 0px 0px);
`;