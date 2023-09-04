import { connect } from 'react-redux';
import { fetchPlanets } from '../action/actions';
import PlanetSelection from '../presentation/PlanetSelection';

const mapStateToProps = (state) => ({
  planets: state.planets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetSelection);
