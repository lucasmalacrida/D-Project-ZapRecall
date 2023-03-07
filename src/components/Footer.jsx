import styled from "styled-components"

export default function Footer({ answersQueue, size }) {
    return (
        <ContainerFooter>
            <FooterTag answersQueue={answersQueue}>
                <p data-test="footer">{answersQueue.length}/{size} CONCLUÍDOS</p>
                <AnswersQueue>
                    {answersQueue.map( ans => 
                        <img key={ans.id} alt={ans.alt} src={ans.icon} data-test={ans.alt} ></img>
                    )}
                </AnswersQueue>
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
    height: 70px;
`;

const FooterTag = styled.div`
    width: 100%;
    height: 100%;
    
    filter: drop-shadow(0px -4px 6px rgba(0, 0, 0, 0.05));
    clip-path: inset(-30px 0px 0px 0px);

    text-align: center;

    ${props => props.answersQueue.length===0? `
        display: flex;
        justify-content: center;
        align-items: center;
    ` : `
        p {
            display: block;
            margin: 9px auto 7px;
        }
    ` }
`;

const AnswersQueue = styled.div`
    img {
        padding: 0px 2.5px;
    }
`