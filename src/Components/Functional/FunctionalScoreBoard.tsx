import { Fish } from './FunctionalApp';
import './styles/score-board.css';

interface Props {
  correctCount: number;
  incorrectCount: number;
  answersLeft: Fish[];
}

const FunctionalScoreBoard: React.FC<Props> = ({ correctCount, incorrectCount, answersLeft }) => {
  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id='choices-left'>
        {answersLeft.map((answer) => (
          <div key={answer.name} className='choice'>
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};

export default FunctionalScoreBoard;
