import { connect } from 'react-redux';
import { submitMission } from '../action/actions';
import Result from '../presentation/Result';

const mapStateToProps = (state) => ({
  missionResult: state.missionResult,
});

const mapDispatchToProps = (dispatch) => ({
  submitMission: (token, planet_names, vehicle_names) =>
    dispatch(submitMission(token, planet_names, vehicle_names)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
