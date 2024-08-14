import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../../../components/UI/CustomSelect';
import { fitnessGoalsQuestions } from '../../../constants';
import './FitnessGoalsAndServicesOfInterest.scss';
import back from '../../../assets/icons/back.png';

const FitnessGoalsAndServicesOfInterest = () => {
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const handleChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
    
  };
  const handleNext = (e) => {
    e.preventDefault();
    const currentQuestions = fitnessGoalsQuestions.slice(currentStep * 5, (currentStep + 1) * 5);
    const currentAnswers = currentQuestions.reduce((acc, question) => {
      acc[question.key] = answers[question.key];
      return acc;
    }, {});
    
    try {

      if (currentStep === 0) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate("/client-onboarding/health-and-medical-information");
        console.log(answers);
      }
    } catch (e) {
      setErrors(e.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}));
    }
  };

  console.log(answers);
  console.log(errors);

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  const currentQuestions = fitnessGoalsQuestions.slice(currentStep * 5, (currentStep + 1) * 5);

  return (
    <section className="fitness-goals-services">
      <div className='progress-back-button-wrapper '> 
        <div className="back-button">
          <button onClick={handleBack}>
            <img src={back} alt="Back" width={18} height={31}/>
          </button>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(currentStep + 1) * 50}%` }}></div>
        </div>
      </div> 
      <h2>Fitness Goals & Services of Interest</h2>
      <form className="fitness-form" onSubmit={handleNext}>
        {currentQuestions.map((question) => (
          <div className="form-group" key={question.key}>
            <CustomSelect
              placeholder={question.placeholder}
              options={question.options}
              value={answers[question.key] || ''}
              onChange={(value) => handleChange(question.key, value)}
            />
            {console.log(errors[question.key])}
            {errors[question.key] && <p className="error">{errors[question.key]}</p>}
          </div>
        ))}
        <button type="submit">{currentStep < 1 ? 'Continue' : 'Submit'}</button>
      </form>
    </section>
  );
};

export default FitnessGoalsAndServicesOfInterest;
