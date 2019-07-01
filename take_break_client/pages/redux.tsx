import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../src/store';
import { bindActionCreators, Dispatch } from 'redux';
import { actionCreators as calculatorActions } from '../src/store/calculator/actions';

export interface IProps {
  number: number;
  calculatorActions: typeof calculatorActions;
}

class ReduxPage extends React.Component<IProps, {}> {
  public render() {
    const { number, calculatorActions } = this.props;

    return (
      <div>
        <div>{number}</div>
        <button
          onClick={() =>
            calculatorActions.decreaseNumber({
              number: 1
            })
          }
        >
          -1
        </button>
        <button
          onClick={() =>
            calculatorActions.increaseNumber({
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  calculatorActions: bindActionCreators(calculatorActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage);
