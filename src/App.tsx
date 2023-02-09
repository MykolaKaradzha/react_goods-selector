import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import Classname from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  selectedGood: string
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const clearSelectionHandler = () => {
      this.setState({ selectedGood: '' });
    };

    const selectItemHandler = () => (good: string) => {
      this.setState({ selectedGood: good });
    };

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {selectedGood && (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={clearSelectionHandler}
                />
              )}
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(
              good => (
                <tr
                  key={Math.random()}
                  data-cy="Good"
                  className={Classname(
                    {
                      'has-background-success-light': selectedGood === good,
                    },
                  )}
                >
                  <td>
                    {selectedGood === good
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={clearSelectionHandler}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={selectItemHandler}
                        >
                          +
                        </button>
                      )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </main>
    );
  }
}