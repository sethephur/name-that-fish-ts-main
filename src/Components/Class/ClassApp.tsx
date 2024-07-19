import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { Images } from '../../assets/Images';
import { Fish } from '../Functional/FunctionalApp';

const initialFishes: Fish[] = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleGuess = (initialFishes: Fish[], guess: string, totalCount: number) => {
    initialFishes[totalCount].name === guess.toLowerCase()
      ? this.setState({ correctCount: this.state.correctCount + 1 })
      : this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  };

  render() {
    const totalCount: number = this.state.correctCount + this.state.incorrectCount;
    const totalFishes: number = initialFishes.length;
    const gameOver = totalCount === totalFishes;
    const answersLeft = initialFishes.slice(totalCount);
    return (
      <>
        <>
          <ClassScoreBoard correctCount={this.state.correctCount} incorrectCount={this.state.incorrectCount} answersLeft={answersLeft} />
          {!gameOver ? (
            <ClassGameBoard initialFishes={initialFishes} handleGuess={this.handleGuess} totalCount={totalCount} />
          ) : (
            <ClassFinalScore correctCount={this.state.correctCount} totalCount={totalCount} />
          )}
        </>
      </>
    );
  }
}
