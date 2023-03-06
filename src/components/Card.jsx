import { useState } from "react";
import styled from "styled-components";

import play_btn from "../assets/seta_play.png";
import turn_btn from "../assets/seta_virar.png";

import no_icon from "../assets/icone_erro.png";
import partial_icon from "../assets/icone_quase.png";
import zap_icon from "../assets/icone_certo.png";

export default function Card({ id, question, answer, count, setCount }) {
    const [openCard, setOpenCard] = useState(false);
    const [turnedCard, setTurnedCard] = useState(false);
    const [answerObj, setAnswerObj] = useState({ alt: 'play-btn', answer: '', icon: play_btn })

    function answerCard({ alt, answer, icon }) {
        setTurnedCard(false);
        setAnswerObj({ alt: alt, answer: answer, icon: icon });
        setCount(count + 1);
        setOpenCard(false);
    }

    return (
        <ContainerCard>
            <Closed openCard={openCard} answerObj={answerObj}>
                <h2>Pergunta {id + 1}</h2>
                <img alt={answerObj.alt} src={answerObj.icon} onClick={(answerObj.answer === '') && (() => setOpenCard(true))} />
            </Closed>

            <Open>
                <Question openCard={openCard} turnedCard={turnedCard} >
                    <p>{question}</p>
                    <img alt="turn-btn" src={turn_btn} onClick={() => setTurnedCard(true)} />
                </Question>

                <Answer turnedCard={turnedCard} >
                    <p>{answer}</p>
                    <Buttons>
                        <button onClick={() => answerCard({ alt: 'no-icon', answer: 'no', icon: no_icon })}>
                            Não lembrei
                        </button>
                        <button onClick={() => answerCard({ alt: 'partial-icon', answer: 'partial', icon: partial_icon })}>
                            Quase não lembrei
                        </button>
                        <button onClick={() => answerCard({ alt: 'zap-icon', answer: 'zap', icon: zap_icon })}>
                            Zap!
                        </button>
                    </Buttons>
                </Answer>
            </Open>
        </ContainerCard >
    )
}

const ContainerCard = styled.div`
    margin: 0px auto 25px;
    width: 300px;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.15));

`;

const Closed = styled.div`
    ${(props) => props.openCard ? 'display: none !important;' : ''}

    background-color: #FFFFFF;
    height: 65px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;

    h2 {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;

        ${(props) => props.answerObj.answer === 'no' ?
        `text-decoration: line-through;
            color: #FF3030;`
        : props.answerObj.answer === 'partial' ?
            `text-decoration: line-through;
            color: #FF922E;`
            : props.answerObj.answer === 'zap' ?
                `text-decoration: line-through;
            color: #2FBE34;`
                : ''
    }
    }

    img {
        ${(props) => (props.answerObj.answer === '') ? 'cursor: pointer;' : ''}
    }
`;

const Open = styled.div`
    background-color: #FFFFD4;
    border-radius: 5px;

    p {
        padding-bottom: 22px;
    }
`;

const Question = styled.div`
    ${(props) => props.openCard ? '' : 'display: none !important;'}
    ${(props) => props.turnedCard ? 'display: none !important;' : ''}

    padding: 18px 15px 10px;
    position: relative;

    img {
        position: absolute;
        right: 15px;
        bottom: 10px;
        cursor: pointer;
    }
`;

const Answer = styled.div`
    ${(props) => props.turnedCard ? '' : 'display: none !important;'}

    padding: 18px 15px 10px;    
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 12px;
        line-height: 14px;
        width: 85px;
        height: 37px;
        border-radius: 5px;

        color: #FFFFFF;
        text-align: center;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;

        &:nth-of-type(1) {
            background-color: #FF3030;
        }

        &:nth-of-type(2) {
            background-color: #FF922E;
        }

        &:nth-of-type(3) {
            background-color: #2FBE34;
        }
    }
`;