import React, { useState } from 'react';
import './MyCart.css';

// Static lightweight AI advice map for demo (expand or move to API as needed)
const aiAdviceData = {
  'Dumbbell Set': {
    muscleGroup: 'Biceps, Triceps, Shoulders, Chest, Back',
    instructions: 'Perform curls, presses, rows, and flyes. Start with a warm-up set. Use controlled movements. Avoid locking your joints to reduce injury risk.'
  },
  'Yoga Mat': {
    muscleGroup: 'Core, Entire Body (for stretching & Yoga)',
    instructions: 'Lay flat for all standing, sitting, or floor poses. Focus on steady breathing and balanced postures. Clean regularly to maintain hygiene.'
  },
  'Protein Powder': {
    muscleGroup: 'All Muscles (aids recovery)',
    instructions: 'Add one scoop to water, milk, or smoothie post-workout. Follow recommended dosage. Combine with a balanced diet for best results.'
  },
  'Resistance Bands': {
    muscleGroup: 'Glutes, Legs, Chest, Back, Arms',
    instructions: 'Use for resistance exercises like bicep curls, leg lifts, chest expansions. Keep tension constant. Avoid snapping bands by inspecting before use.'
  },
  'Treadmill': {
    muscleGroup: 'Legs, Glutes, Cardio (Heart)',
    instructions: 'Begin with a 5-minute warm-up walk. Increase speed or incline gradually. Maintain good posture and avoid holding handrails excessively.'
  },
  'Kettlebell Set': {
    muscleGroup: 'Shoulders, Back, Arms, Core, Legs',
    instructions: 'Ideal for swings, squats, and presses. Use your hips to generate power for swings. Keep your back straight to prevent strain.'
  },
  'Dumbbell Rack': {
    muscleGroup: 'None',
    instructions: 'Use to safely store and organize dumbbells. Keep in a dry area to extend equipment life.'
  },
  'Jump Rope': {
    muscleGroup: 'Calves, Shoulders, Forearms, Heart',
    instructions: 'Keep elbows close to the sides and use wrists to turn the rope. Jump on the balls of your feet in short intervals. Warm up before use.'
  },
  'Foam Roller': {
    muscleGroup: 'Back, Legs, Arms (for recovery)',
    instructions: 'Roll muscles slowly 30 seconds per area. Focus on tight or sore spots for myofascial release. Avoid rolling directly on joints.'
  },
  'Yoga Block': {
    muscleGroup: 'Core, Lower Back, Glutes (for balance and flexibility)',
    instructions: 'Provide support during stretches and poses. Place under hands, feet, or pelvis to improve alignment.'
  },
  'Exercise Mat': {
    muscleGroup: 'Core and Yoga Poses',
    instructions: 'Use to cushion knees, elbows and back. Clean regularly and roll after use to maintain shape.'
  },
  'Resistance Band Set': {
    muscleGroup: 'Full-body Resistance Training',
    instructions: 'Varied tension bands for graduated resistance. Combine exercises for all body parts; maintain proper posture.'
  },
  'Pull-Up Bar': {
    muscleGroup: 'Back, Arms, Shoulders',
    instructions: 'Grip bar securely, pull until chin exceeds bar level. Avoid swinging for controlled muscle engagement.'
  },
  'Medicine Ball': {
    muscleGroup: 'Core, Arms, Legs',
    instructions: 'Use for throws, twists, and strength training. Choose appropriate weight. Warm-up muscles before use.'
  },
  'Resistance Bands Set': {
    muscleGroup: 'Legs, Arms, Core',
    instructions: 'Includes bands with handles and ankle straps; diversify workouts. Maintain tension and steady movements.'
  },
  'Ab Roller': {
    muscleGroup: 'Abdominal Muscles, Core',
    instructions: 'Kneel on the floor; roll forward slowly keeping core tight; avoid hyperextension.'
  },
  'Weighted Vest': {
    muscleGroup: 'Full Body Strength',
    instructions: 'Wear during bodyweight workouts or cardio for added resistance. Increase weight gradually.'
  },
  'Yoga Mat Towel': {
    muscleGroup: 'Core and Yoga Stability',
    instructions: 'Use over yoga mat to reduce slip. Machine washable. Replace periodically.'
  },
  'Stability Ball': {
    muscleGroup: 'Core, Balance, Back',
    instructions: 'Sit or lie on ball to engage stabilizer muscles. Maintain good posture for safety.'
  },
  'Jumping Shoes': {
    muscleGroup: 'Legs, Cardio',
    instructions: 'Ideal for plyometric workouts. Ensure safe surface. Start with light use to build ankle strength.'
  },
  'Rowing Machine': {
    muscleGroup: 'Full Body Cardio, Back, Legs',
    instructions: 'Ensure proper technique with extended legs and strong pull. Warm-up and stretch after use.'
  },
  'Elliptical Trainer': {
    muscleGroup: 'Legs, Cardio, Arms',
    instructions: 'Maintain upright posture. Adjust resistance suitably. Use arm handles for upper body engagement.'
  },
  'Exercise Bike': {
    muscleGroup: 'Legs, Cardio',
    instructions: 'Adjust seat height for comfort. Start with low resistance. Use interval training for better fitness.'
  },
  'Punching Bag': {
    muscleGroup: 'Arms, Core, Cardio',
    instructions: 'Use hand wraps and gloves. Follow proper punching techniques to avoid injury.'
  },
  'Speed Ladder': {
    muscleGroup: 'Legs, Agility',
    instructions: 'Use for footwork drills. Start slow and increase speed. Enhance coordination and speed.'
  },
  'Gliding Discs': {
    muscleGroup: 'Full-body Functional Training',
    instructions: 'Use on smooth surfaces for lunges, push-ups, and core exercises.'
  },
  'Weighted Jump Rope': {
    muscleGroup: 'Cardio, Arms',
    instructions: 'Heavier than standard ropes; increase endurance and strength. Maintain wrist control.'
  },
  'Battle Ropes': {
    muscleGroup: 'Arms, Shoulders, Core',
    instructions: 'Perform waves and slams. Engage core and maintain strong posture.'
  },
  'Gym Timer': {
    muscleGroup: 'None',
    instructions: 'Use to time sets and intervals to optimize workouts.'
  },
  'Fitness Tracker': {
    muscleGroup: 'Monitor Whole Body Activity',
    instructions: 'Wear during workouts to track heart rate, calories, and steps for optimizing fitness.'
  }
};

const MyCart = ({ cart, updateCartQuantity, removeFromCart, calculateTotal, setRoute }) => {
  const [showAiAdvice, setShowAiAdvice] = useState(false);

  // Gives fallback for unknown products
  const getAdvice = (name) =>
    aiAdviceData[name] || {
      muscleGroup: 'General Muscle Groups',
      instructions: 'Refer to user manual or follow standard exercise protocols for best results.'
    };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="cart-price">${item.price.toFixed(2)}</p>
              
              <div className="quantity-controls">
                <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              
              {showAiAdvice && (
                <div className="ai-advice">
                  <strong>Muscle Group:</strong> {getAdvice(item.name).muscleGroup}<br />
                  <strong>Instructions:</strong> {getAdvice(item.name).instructions}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
      <button
        onClick={() => setShowAiAdvice(true)}
      >
        AI Assist
      </button>

    </div>
  );
};

export default MyCart;
