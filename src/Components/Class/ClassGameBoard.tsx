import './styles/game-board.css';
import { Fish } from '../Functional/FunctionalApp';
import { Component, SetStateAction } from 'react';

export class ClassGameBoard extends Component<{
  initialFishes: Fish[];
  handleGuess: (initialFishes: Fish[], guess: string, totalCount: number) => void;
  totalCount: number;
}> {
  state = {
    guess: '',
  };

  handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    this.setState({ guess: e.target.value });
  };

  handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.props.handleGuess(this.props.initialFishes, this.state.guess, this.props.totalCount);
    this.setState({ guess: '' });
  };

  render() {
    const { initialFishes, totalCount } = this.props;
    const nextFishToName = initialFishes[totalCount];
    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id='fish-guess-form' onSubmit={this.handleSubmit}>
          <label htmlFor='fish-guess'>What kind of fish is this?</label>
          <input type='text' name='fish-guess' value={this.state.guess} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
