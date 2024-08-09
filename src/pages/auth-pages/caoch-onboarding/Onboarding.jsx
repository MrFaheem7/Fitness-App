import React, { useState } from 'react';
import PersonalAddress from './PersonalAddress';
import ProfessionalBackground from './ProfessionalBackground';
import ProspectiveClientPreferences from './ProspectiveClientPreferences';
import TrainingSpecialties from './TrainingSpecialties';
import AvailabilityScheduling from './AvailabilityScheduling';
import styles from './Onboarding.module.scss';

const Onboarding = () => {
  const steps = [
    { component: <PersonalAddress />, label: 'Personal Address' },
    { component: <ProfessionalBackground />, label: 'Professional Background' },
    { component: <ProspectiveClientPreferences />, label: 'Prospective Client Preferences' },
    { component: <TrainingSpecialties />, label: 'Training Specialties' },
    { component: <AvailabilityScheduling />, label: 'Availability Scheduling' }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={styles.stepContainer}>
        {steps[currentStep].component}
      </div>
      <div className={styles.buttonContainer}>
        {currentStep > 0 && (
          <button onClick={handleBack} className={styles.backButton}>Back</button>
        )}
        <button onClick={handleContinue} className={styles.continueButton}>
          {currentStep < steps.length - 1 ? 'Continue' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
