import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { increaseNumber, decreaseNumber } from '../store/calculator/actions';

export interface IProps {
  number: number;
  increaseNumber: typeof increaseNumber;
  decreaseNumber: typeof decreaseNumber;
}

class ReduxPage extends React.Component<IProps, {}> {
  public render() {
    const { number, increaseNumber, decreaseNumber } = this.props;

    return (
      <div>
        <div>{number}</div>
        <button
          onClick={() =>
            decreaseNumber({
              number: 1
            })
          }
        >
          -1
        </button>
        <button
          onClick={() =>
            increaseNumber({
              number: 1
            })
          }
        >
          +1
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ calculator }: AppState) => ({
  number: calculator.number
});

const mapDispatchToProps = {
  increaseNumber: increaseNumber,
  decreaseNumber: decreaseNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage);
