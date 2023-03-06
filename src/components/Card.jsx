import play_btn from "../assets/seta_play.png";
import turn_btn from "../assets/seta_virar.png";

// import no_icon from "../assets/icone_erro.png";
// import partial_icon from "../assets/icone_quase.png";
// import zap_icon from "../assets/icone_certo.png";

export default function Card({ id, question, answer }) {
    return (
        <div className="card">
            <div className="closed">
                <h2 className="">Pergunta {id + 1}</h2>
                <img alt="play-btn" src={play_btn} className="play-btn" />

                {/* <h2 className="no-quest">Pergunta {id + 1}</h2>
                <img alt="no-icon" src={no_icon} className="no-icon" />

                <h2 className="partial-quest">Pergunta {id + 1}</h2>
                <img alt="partial-icon" src={partial_icon} className="partial-icon" />

                <h2 className="zap-quest">Pergunta {id + 1}</h2>
                <img alt="zap-icon" src={zap_icon} className="zap-icon" /> */}
            </div>

            <div className="open">
                <div className="back-face face hidden">
                    <p>{question}</p>
                    <img alt="turn-btn" src={turn_btn} className="turn-btn" />
                </div>

                <div className="front-face face hidden">
                    <p>{answer}</p>
                    <div className="buttons">
                        <button className="no-btn">
                            Não lembrei
                        </button>
                        <button className="partial-btn">
                            Quase não lembrei
                        </button>
                        <button className="zap-btn">
                            Zap!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}