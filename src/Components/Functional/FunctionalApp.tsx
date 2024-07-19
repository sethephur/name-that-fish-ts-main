import { useState } from 'react';
import FunctionalGameBoard from './FunctionalGameBoard';
import FunctionalScoreBoard from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { Images } from '../../assets/Images';

export type Fish = {
  name: string;
  url: string;
};

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

const FunctionalApp: React.FC = () => {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const totalCount: number = correctCount + incorrectCount; //use this for index
  const totalFishes: number = initialFishes.length;
  const gameOver = totalCount === totalFishes;
  const answersLeft = initialFishes.slice(totalCount);

  const handleGuess = (initialFishes: Fish[], guess: string, totalCount: number) => {
    initialFishes[totalCount].name === guess.toLowerCase() ? setCorrectCount(correctCount + 1) : setIncorrectCount(incorrectCount + 1);
  };

  return (
    <>
      <FunctionalScoreBoard correctCount={correctCount} incorrectCount={incorrectCount} answersLeft={answersLeft} />
      {!gameOver ? (
        <FunctionalGameBoard initialFishes={initialFishes} handleGuess={handleGuess} totalCount={totalCount} />
      ) : (
        <FunctionalFinalScore correctCount={correctCount} totalCount={totalCount} />
      )}
    </>
  );
};

export default FunctionalApp;
