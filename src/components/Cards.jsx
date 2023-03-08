import styled from "styled-components";
import Card from "./Card";

export default function Cards({ cards, answersQueue, setAnswersQueue, status }) {
	return (
		<MainTag status={status} >
			{cards.map(c => <Card
				key={c.id}
				id={c.id}
				question={c.question}
				answer={c.answer}
				answersQueue={answersQueue}
				setAnswersQueue={setAnswersQueue}
			/>)}
		</MainTag>
	)
}

const MainTag = styled.main`
	margin: 150px auto 110px;
	${props => props.status.end && 'margin-bottom: 211px;'}
`;