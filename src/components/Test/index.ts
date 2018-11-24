import { connect } from 'react-redux';
import { Test as TestComponent } from './Test';
import { AppState } from '../../reducers';

function mapStateToProps(state: AppState) {
  return {};
}

export const Test = connect(mapStateToProps)(TestComponent);
