import React, { useState } from 'react';
import './FitAi.css';

const apiKey = 'Your API key'; // Your API key

const bodyConditions = {
  beginner: { sets: 3, reps: 10 },
  intermediate: { sets: 4, reps: 12 },
  advanced: { sets: 5, reps: 15 }
};

// Map common muscle group inputs to API expected values
const muscleApiMap = {
  chest: 'chest',
  biceps: 'biceps',
  triceps: 'triceps',
  back: 'latissimus dorsi', // Using API accepted terms
  legs: 'quadriceps',
  shoulders: 'shoulders',
  abs: 'abdominals'
};

const FitAi = () => {
  const [muscle, setMuscle] = useState('');
  const [condition, setCondition] = useState('');
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState('');

  const fetchExercises = async () => {
    setError('');
    setExercises([]);

    if (!muscle || !condition) {
      setError('Please select muscle group and body condition.');
      return;
    }

    try {
      const apiMuscle = muscleApiMap[muscle.toLowerCase()] || muscle.toLowerCase();
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${apiMuscle}`, {
        headers: { 'X-Api-Key': apiKey }
      });
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();

      setExercises(data.slice(0, 5)); // Show first 5 exercises
    } catch (err) {
      setError(err.message);
    }
  };

  const workoutPlan = bodyConditions[condition] || { sets: 3, reps: 10 };

  return (
  <div className="fitai-page-container">
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>FitShop AI Fitness Coach</h2>

      <label>
        Muscle Group:
        <select value={muscle} onChange={e => setMuscle(e.target.value)} required>
          <option value="">--Select--</option>
          <option value="chest">Chest</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="abs">Abs</option>
        </select>
      </label>

      <label>
        Fitness Level:
        <select value={condition} onChange={e => setCondition(e.target.value)} required>
          <option value="">--Select--</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <button onClick={fetchExercises} style={{ width: '100%', marginTop: 10 }}>
        Get Workout Plan
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {exercises.length > 0 && (
        <div>
          <ul className="workout-list">
            {exercises.map(ex => (
              <li className="workout-card" key={ex.name}>
                <div className="workout-exercise">{ex.name}: {workoutPlan.sets} sets of {workoutPlan.reps} reps</div>
                <span className="workout-label">Equipment:</span>
                <div className="workout-details">{ex.equipment || 'Bodyweight'}</div>
                <span className="workout-label">Instructions:</span>
                <ul className="instruction-list">
                  {ex.instructions.split(/\.\s+/).map((step, idx) =>
                    <li key={idx}>{step.trim().length ? step.trim() + '.' : null}</li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
};
export default FitAi;
