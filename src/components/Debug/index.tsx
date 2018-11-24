import { connect } from 'react-redux';
import { Debug as DebugComponent } from './Debug';
import { AppState } from '../../reducers';

function mapStateToProps(state: AppState) {
  return {
    fullState: state,
  };
}

export const Debug = connect(mapStateToProps)(DebugComponent);
