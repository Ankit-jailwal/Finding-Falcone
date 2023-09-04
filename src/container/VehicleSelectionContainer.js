import { connect } from 'react-redux';
import { fetchVehicles } from '../action/actions';
import VehicleSelection from '../presentation/VehicleSelection';

const mapStateToProps = (state) => ({
  vehicles: state.vehicles,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVehicles: () => dispatch(fetchVehicles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelection);
