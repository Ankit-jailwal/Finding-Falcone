import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, submitMission } from '../action/actions'; 

function Result() {
  const dispatch = useDispatch();
  const missionResult = useSelector((state) => state.missionResult);
  const selectedPlanets = useSelector((state) => state.selectedPlanets); 
  const selectedVehicles = useSelector((state) => state.selectedVehicles);


  const handleMissionSubmit = async () => {
    if (selectedPlanets.length === 4 && selectedVehicles.length === 4) {
      const token = await dispatch(getToken());

        console.log(token)
      try {
        await dispatch(submitMission(token, selectedPlanets, selectedVehicles));
      } catch (error) {
        console.error('Error submitting mission:', error);
      }
    } 
    else {
      alert('Please select exactly 4 planets and 4 vehicles for the mission.');
    }
  };


  return (
    <div>
      <h2>Mission Result:</h2>
      {!missionResult && (
        <button onClick={handleMissionSubmit}>Submit Mission</button>
      )}
    </div>
  );
}

export default Result;
