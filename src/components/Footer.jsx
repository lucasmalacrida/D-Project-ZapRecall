import styled from "styled-components";

import party from "../assets/party.png";
import sad from "../assets/sad.png"

export default function Footer({ answersQueue, size, status }) {
    return (
        <ContainerFooter>
            <FooterTag status={status} data-test="footer" >
                <FinalResult status={status}>
                    <ResultTitle>
                        <img alt={status.win ? 'party' : 'sad'} src={status.win ? party : sad} />
                        <h3>{status.win? 'Parabéns!' : 'Putz...'}</h3>
                    </ResultTitle>
                    <p>{status.win ? 'Você não esqueceu de nenhum flashcard!' : 'Ainda faltam alguns... Mas não desanime!'}</p>
                </FinalResult>

                <p>{answersQueue.length}/{size} CONCLUÍDOS</p>
                <AnswersQueue>
                    {answersQueue.map(ans =>
                        <img key={ans.id} alt={ans.alt} src={ans.icon} data-test={ans.alt} />
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
`;

const FooterTag = styled.div`
    width: 100%;
    
    filter: drop-shadow(0px -4px 6px rgba(0, 0, 0, 0.05));
    clip-path: inset(-30px 0px 0px 0px);

    text-align: center;

    ${props => (!props.status.start) ?
    `
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 0px;
    ` : `
        p {
            display: inline-block;
            margin: 9px auto 4px;
            padding: 0px;
        }
    ` }
`;

const FinalResult = styled.div`
    ${props => (!props.status.end) && 'display: none !important;' }

    p {
        margin: 0px 0px 5px;
        padding: 0px;
        width: 222px;
    }

    
`;

const ResultTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px 14px;
    padding: 0px;

    h3 {
        padding-left: 12px;

        color: #333333;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
}     
`

const AnswersQueue = styled.div`
    img {
        margin: 0px 2.5px 8px;
    }
`;