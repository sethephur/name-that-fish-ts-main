import './styles/game-board.css';
import { Fish } from './FunctionalApp';
import { SetStateAction, useState } from 'react';

interface Props {
  initialFishes: Fish[];
  handleGuess: (initialFishes: Fish[], guess: string, totalCount: number) => void;
  totalCount: number;
}

const FunctionalGameBoard: React.FC<Props> = ({ initialFishes, handleGuess, totalCount }) => {
  const nextFishToName = initialFishes[totalCount];
  const [guess, setGuess] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleGuess(initialFishes, guess, totalCount);
    setGuess('');
  };

  return (
    <div id='game-board'>
      <div id='fish-container'>
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id='fish-guess-form' onSubmit={handleSubmit}>
        <label htmlFor='fish-guess'>What kind of fish is this?</label>
        <input type='text' name='fish-guess' value={guess} onChange={handleChange} />
        <input type='submit' />
      </form>
    </div>
  );
};

export default FunctionalGameBoard;
