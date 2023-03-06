import styled from "styled-components";
import Card from "./Card";

export default function Cards({ cards, count, setCount }) {
	return (
		<MainTag>
			{cards.map(c => <Card
				key={c.id}
				id={c.id}
				question={c.question}
				answer={c.answer}
				count={count}
				setCount={setCount}
			/>)}
		</MainTag>
	)
}

const MainTag = styled.main`
	margin: 150px auto 110px;
`;