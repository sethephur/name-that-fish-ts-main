import { Component } from 'react';
import './styles/score-board.css';
import { Fish } from '../Functional/FunctionalApp';

interface ClassScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
  answersLeft: Fish[];
}

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
  render() {
    return (
      <div id='score-board'>
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id='choices-left'>
          {this.props.answersLeft.map((answer) => (
            <div key={answer.name} className='choice'>
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
