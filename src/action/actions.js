export const FETCH_PLANETS_REQUEST = 'FETCH_PLANETS_REQUEST';
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS';
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE';

export const FETCH_VEHICLES_REQUEST = 'FETCH_VEHICLES_REQUEST';
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_FAILURE = 'FETCH_VEHICLES_FAILURE';

export const SUBMIT_MISSION_REQUEST = 'SUBMIT_MISSION_REQUEST';
export const SUBMIT_MISSION_SUCCESS = 'SUBMIT_MISSION_SUCCESS';
export const SUBMIT_MISSION_FAILURE = 'SUBMIT_MISSION_FAILURE';

export const TOGGLE_PLANET_SELECTION = 'TOGGLE_PLANET_SELECTION';
export const TOGGLE_VEHICLE_SELECTION = 'TOGGLE_VEHICLE_SELECTION';

// Action Creators
export const fetchPlanetsRequest = () => ({ type: FETCH_PLANETS_REQUEST });
export const fetchPlanetsSuccess = (planets) => ({ type: FETCH_PLANETS_SUCCESS, planets });
export const fetchPlanetsFailure = (error) => ({ type: FETCH_PLANETS_FAILURE, error });

export const fetchVehiclesRequest = () => ({ type: FETCH_VEHICLES_REQUEST });
export const fetchVehiclesSuccess = (vehicles) => ({ type: FETCH_VEHICLES_SUCCESS, vehicles });
export const fetchVehiclesFailure = (error) => ({ type: FETCH_VEHICLES_FAILURE, error });
export const togglePlanetSelection = (planetName) => ({type: TOGGLE_PLANET_SELECTION, payload: planetName, });
export const toggleVehicleSelection = (vehicleName) => ({type: TOGGLE_VEHICLE_SELECTION, payload: vehicleName, });

export const submitMissionRequest = () => ({ type: SUBMIT_MISSION_REQUEST });
export const submitMissionSuccess = (result) => ({ type: SUBMIT_MISSION_SUCCESS, result });
export const submitMissionFailure = (error) => ({ type: SUBMIT_MISSION_FAILURE, error });

export const setToken = (token) => ({type: 'SET_TOKEN', payload: token });

export const fetchPlanets = () => async (dispatch) => {
    dispatch(fetchPlanetsRequest());
    try {
      const response = await fetch('https://findfalcone.geektrust.com/planets');
      const data = await response.json();
      console.log("Plantessss" + data);
      dispatch(fetchPlanetsSuccess(data));
    } catch (error) {
      dispatch(fetchPlanetsFailure(error));
    }
  };
  
  export const fetchVehicles = () => async (dispatch) => {
    dispatch(fetchVehiclesRequest());
    try {
      const response = await fetch('https://findfalcone.geektrust.com/vehicles');
      const data = await response.json();
      dispatch(fetchVehiclesSuccess(data));
    } catch (error) {
      dispatch(fetchVehiclesFailure(error));
    }
  };

  export const getToken = () => async (dispatch) => {
    try {
      const response = await fetch('https://findfalcone.geektrust.com/token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        dispatch(setToken(data.token));
      } else {
        console.error('Failed to fetch token.');
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };
  
  export const submitMission = (token, planet_names, vehicle_names) => async (dispatch) => {
    dispatch(submitMissionRequest());
    try {
      console.log("Planets:" +  planet_names)

      const response = await fetch('https://findfalcone.geektrust.com/find', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, planet_names, vehicle_names }),
      });
      const data = await response.json();
      console.log(data)
      dispatch(submitMissionSuccess(data));
    } catch (error) {
      dispatch(submitMissionFailure(error));
    }
  };
