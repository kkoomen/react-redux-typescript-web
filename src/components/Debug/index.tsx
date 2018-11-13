import { connect } from 'react-redux';
import Debug from './Debug';
import { AppState } from '../../reducers';

function mapStateToProps(state: AppState) {
  return {
    fullState: state,
  };
}

export default connect(mapStateToProps)(Debug);
