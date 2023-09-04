import {
    FETCH_PLANETS_REQUEST,
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE,
    FETCH_VEHICLES_REQUEST,
    FETCH_VEHICLES_SUCCESS,
    FETCH_VEHICLES_FAILURE,
    SUBMIT_MISSION_REQUEST,
    SUBMIT_MISSION_SUCCESS,
    SUBMIT_MISSION_FAILURE,
    TOGGLE_PLANET_SELECTION,
    TOGGLE_VEHICLE_SELECTION
  } from '../action/actions';
  
  const initialState = {
    planets: [],
    vehicles: [],
    selectedPlanets: [],
    selectedVehicles: [],
    missionResult: null,
    isLoading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Planet Actions
      case FETCH_PLANETS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case FETCH_PLANETS_SUCCESS:
        return { ...state, isLoading: false, planets: action.planets };
      case FETCH_PLANETS_FAILURE:
        return { ...state, isLoading: false, error: action.error };
  
      // Vehicle Actions
      case FETCH_VEHICLES_REQUEST:
        return { ...state, isLoading: true, error: null };
      case FETCH_VEHICLES_SUCCESS:
        return { ...state, isLoading: false, vehicles: action.vehicles };
      case FETCH_VEHICLES_FAILURE:
        return { ...state, isLoading: false, error: action.error };
  
      // Mission Actions
      case SUBMIT_MISSION_REQUEST:
        return { ...state, isLoading: true, error: null };
      case SUBMIT_MISSION_SUCCESS:
        return { ...state, isLoading: false, missionResult: action.result };
      case SUBMIT_MISSION_FAILURE:
        return { ...state, isLoading: false, error: action.error };
      
      case TOGGLE_PLANET_SELECTION:
        const planetName = action.payload;
        const isPlanetSelected = state.selectedPlanets.includes(planetName);
    
        return {
          ...state,
          selectedPlanets: isPlanetSelected
            ? state.selectedPlanets.filter((selected) => selected !== planetName)
            : [...state.selectedPlanets, planetName],
        };

      case TOGGLE_VEHICLE_SELECTION:
        const vehicleName = action.payload;
        const isVehicleSelected = state.selectedVehicles.includes(vehicleName);
    
        return {
          ...state,
          selectedVehicles: isVehicleSelected
            ? state.selectedVehicles.filter((selected) => selected !== vehicleName)
            : [...state.selectedVehicles, vehicleName],
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  