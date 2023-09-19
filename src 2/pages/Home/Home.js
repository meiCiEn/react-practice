import React, { useState } from 'react';
import Typewriter from '../../components/Typewriter/Typewriter';
import './Home.css'; // Import your CSS file

function Home() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      text: ' to Reactology:',
      delay: 100,
    },
    {
      text: ` I've created`,
      delay: 110,
    },
    {
      text: ' and Tailwind CSS.',
      delay: 110,
    },
  ];

  const handleTypingComplete = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="pt-32 text-4xl sm:text-6xl">
      
      <h1 className={`fade-in fade-in-section typewriter-text mb-7 text-red-900 ${step >= 0 ? 'show' : ''}`}> <span className="typewriter-text">Welcome</span>
        {step === 0 && (
          <Typewriter text={steps[0].text} delay={steps[0].delay} onTypingComplete={handleTypingComplete} />
        )}
        {step > 0 && steps[0].text}
      </h1>
      <h2 className={`fade-in typewriter-text mb-2 ${step >= 1 ? 'show' : ''}`}>
        A collection of projects {step === 1 && (
          <Typewriter text={steps[1].text} delay={steps[1].delay} onTypingComplete={handleTypingComplete} />
        )}
        {step > 1 && steps[1].text}
      </h2>
      <h2 className={`fade-in typewriter-text ${step === 2 ? 'show' : ''}`}>
        using React{step === 2 && (
          <Typewriter text={steps[2].text} delay={steps[2].delay} onTypingComplete={handleTypingComplete} />
        )}
        {step > 2 && steps[2].text}
      </h2>
    </div>
  );
}

export default Home;
