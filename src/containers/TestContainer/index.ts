import { connect } from 'react-redux';
import { TestContainer as TestContainerContainer } from './TestContainer';
import { AppState } from '../../reducers';

function mapStateToProps(state: AppState) {
  return {};
}

export const TestContainer = connect(mapStateToProps)(TestContainerContainer);
