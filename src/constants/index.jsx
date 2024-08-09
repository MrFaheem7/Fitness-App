import { useNavigate } from "react-router-dom";
import choose1 from "../assets/icons/choose/choose1.svg";
import choose2 from "../assets/icons/choose/choose2.svg";
import choose3 from "../assets/icons/choose/choose3.svg";
import step1 from "../assets/icons/steps/step1.svg";
import step2 from "../assets/icons/steps/step2.svg";
import step3 from "../assets/icons/steps/step3.svg";
import step4 from "../assets/icons/steps/step4.svg";
import trainer1 from "../assets/images/trainer-1.jpeg";
import trainer2 from "../assets/images/trainer-2.jpeg";

export const tags = [
  "Body composition",
  "Flexibility",
  "Weight loss",
  "Cardio",
  "Strength",
  "Weight gain",
  "Body building",
  "Hot yoga",
];

export const cardData = [
  {
    title: "Muscles Building",
    description:
      "Muscle building involves progressive resistance training, proper nutrition, and sufficient rest to increase muscle size and strength.",
    image: choose1,
  },
  {
    title: "High Quality",
    description:
      "Muscle building is the process of increasing muscle size and strength through progressive resistance training, optimal nutrition, and adequate recovery.",
    image: choose2,
  },
  {
    title: "Guaranteed Result",
    description:
      "Muscle building guarantees increased size and strength through consistent progressive resistance training, optimal nutrition, and proper recovery.",
    image: choose3,
  },
];

export const stepsData = [
  {
    title: "Add Your Details",
    description:
      "We’ll ask you a few questions to better understand your situation and pair you with the perfect trainer.",
    image: step1,
  },
  {
    title: "Schedule Video call",
    description:
      "Video chat your trainer to get to know each other and further discuss your goals, limitations, and experience.",
    image: step2,
  },
  {
    title: "Get a weekly plan",
    description:
      "Your trainer will handcraft a step-by-step Guidance workout plan perfect for you.",
    image: step3,
  },
  {
    title: "Adjust and improve",
    description:
      "As you complete workouts your trainer will progress and adapt your plan to push you forwards.",
    image: step4,
  },
];

export const experts = [
  {
    name: "Tone Titans",
    title: "Fitness Coach",
    speciality: "Weight Loss",
    rating: 4,
    image: trainer1
  },
  {
    name: "Fitness Tailored",
    title: "Cardio, Body Building, Hot Yoga",
    speciality: "No. of trainers: 08",
    rating: 5,
    image: trainer2
  },
  {
    name: "Iron Giants",
    title: "Instructor",
    speciality: "Body Building",
    rating: 5,
    image: trainer2
  },
];

export const companyLinks = [
  "About Us",
  "Find your trainer",
  "How it works",
  "Reviews",
  "Partnership",
];

export const resourceLinks = [
  "FAQs",
  "Contact",
  "Exercise library",
  "Privacy Policy",
  "Terms & Conditions",
];

export const images = [
  { src: "/src/assets/hero-images/person1.png", alt: "Trainer 1" },
  { src: "/src/assets/hero-images/person2.png", alt: "Trainer 2" },
  { src: "/src/assets/hero-images/person3.png", alt: "Trainer 3" },
  { src: "/src/assets/hero-images/person4.png", alt: "Trainer 4" },
  { src: "/src/assets/hero-images/person5.png", alt: "Trainer 5" },
];

export const goals = [
  { value: "body-composition", label: "Body composition" },
  { value: "cardio", label: "Cardio" },
  { value: "body-strength", label: "Body Strength" },
  { value: "body-building", label: "Body Building" },
  { value: "weight-loss", label: "Weight Loss" },
];

const genderOptions = ["Male", "Female", "No Preference"];
const qualitiesOptions = [
  "Motivational",
  "Disciplined",
  "Educational",
  "Supportive",
];
const experienceOptions = ["Yes", "No"];

export const trainerCoachPreferenceFormFields = [
  {
    type: "select",
    placeholder: "Trainer/coach's gender",
    key: "gender",
    options: genderOptions,
  },
  {
    type: "select",
    placeholder: "What qualities do you value most in a trainer or coach?",
    key: "qualities",
    options: qualitiesOptions,
  },
  {
    type: "select",
    placeholder: "Have you worked with a personal trainer or coach before?",
    key: "experience",
    options: experienceOptions,
  },
  {
    type: "textarea",
    placeholder: "What did you like or dislike about the experience?",
    key: "feedback",
  },
];
export const fitnessGoalsQuestions = [
  {
    placeholder: "What are your primary fitness goals?",
    options: [
      "Weight Loss",
      "Strength Training",
      "Sports-specific Training",
      "Conditioning/Performance",
    ],
    key: "fitnessGoals",
  },
  {
    placeholder: "What type of training are you interested in?",
    options: [
      "In-person Training",
      "Online Coaching",
      "Group Classes",
      "Nutritional guidance",
    ],
    key: "trainingType",
  },
  {
    placeholder: "What is your preferred program or training technique style?",
    options: ["HIIT", "Yoga", "Cardio", "Nutritional guidance"],
    key: "programStyle",
  },
  {
    placeholder:
      "Do you have a preference for the type of training environment?",
    options: ["Gym", "Online"],
    key: "trainingEnvironment",
  },
  {
    placeholder:
      "Do you have any specific fitness events or deadlines you're working towards?",
    options: ["Yes", "No"],
    key: "eventsOrDeadlines",
  },
  {
    placeholder: "How would you describe your current fitness level?",
    options: ["Beginner", "Intermediate", "Advanced"],
    key: "currentFitnessLevel",
  },
  {
    placeholder: "What types of exercise do you currently engage in?",
    options: [
      "In-person Training",
      "Online Coaching",
      "Group Classes",
      "Nutritional guidance",
    ],
    key: "currentExerciseType",
  },
  {
    placeholder: "What is your current activity level?",
    options: ["Lightly active", "Moderately active", "Highly active"],
    key: "currentActivityLevel",
  },
  {
    placeholder: "How often do you currently exercise per week?",
    options: ["0-1 times", "2-3 times", "4-5 times", "6+ times"],
    key: "exerciseFrequency",
  },
  {
    placeholder:
      "Do you have any hobbies or interests that involve physical activity?",
    options: ["Yes", "No"],
    key: "physicalActivityHobbies",
  },
];

export const reviews = [
  {
    name: "S. Watkins",
    image: "/src/assets/images/client1.png",
    review:
      "I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect. I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect.....",
    rating: 4,
  },
  {
    name: "S. Watkins",
    image: "/src/assets/images/client2.png",
    review:
      "I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect. I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect.....",
    rating: 4,
  },
  {
    name: "S. Watkins",
    image: "/src/assets/images/client3.png",
    review:
      "I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect. I've seen significant improvements in my fitness levels since using Fit Connect. The tailored workout plans are perfect.....",
    rating: 4,
  },
];

export const text = `
  Our fitness app is designed to help you achieve your health and fitness goals through personalized workout plans, nutrition guidance, and progress tracking. 
 `;

export const items = [
  {
    key: "1",
    title: "What is this fitness app?",
    content:
      "Our fitness app is designed to help you achieve your health and fitness goals through personalized workout plans, nutrition guidance, and progress tracking.",
  },
  {
    key: "2",
    title: "How do I create a workout plan?",
    content:
      "Creating a workout plan is simple. Just follow the guided steps in the app to select your goals, preferences, and available equipment.",
  },
  {
    key: "3",
    title: "How do I cancel my subscription?",
    content:
      "You can cancel your subscription anytime from the account settings page. Navigate to 'Subscription' and select 'Cancel Subscription'.",
  },
  {
    key: "4",
    title: "Can I switch between subscription plans?",
    content:
      "Yes, you can switch between subscription plans. Go to the account settings page and select 'Change Plan' to view and select available options.",
  },
  {
    key: "5",
    title: "Can I track my progress?",
    content:
      "Absolutely! The app includes a progress tracker that lets you monitor your workouts, nutrition, and overall fitness improvements over time.",
  },
];

// ************** Form Fields ***************

export const prosPectiveClientPreferenceFormFields = [
  {
    name: "ageGroup",
    placeholder: "Age group",
    options: ["Children", "Teenagers", "Adults", "Seniors"],
  },
  {
    name: "gender",
    placeholder: "Prospective clientele gender",
    options: ["Male", "Female", "Other"],
  },
  {
    name: "clienteleType",
    placeholder: "Clientele type",
    options: [
      "Beginners",
      "Intermediate",
      "Athletes",
      "Seniors",
      "Individuals with disabilities",
      "Others",
    ],
  },
  {
    name: "goals",
    placeholder: "Type of goals you would like to help Clients achieve",
    options: [
      "Weight Loss",
      "Muscle Gain",
      "Endurance",
      "Flexibility",
      "Hot Yoga",
    ],
  },
];

export const professionalBackgroundFormFields = [
  {
    type: "input",
    name: "qualifications",
    placeholder: "Qualifications",
  },
  {
    type: "input",
    name: "certificationType",
    placeholder: "Certification Type",
  },
  {
    type: "input",
    name: "yearsOfExperience",
    placeholder: "Years of Experience",
  },
  {
    type: "select",
    name: "previousExperience",
    placeholder: "Training Experience",
    options: ["Commercial Gyms", "Studios", "Freelance"],
  },
  {
    type: "file",
    name: "uploadedDocument",
    placeholder: "Upload Document",
  },
];

export const availabilitySchedulingFormFields = [
  {
    type: "select",
    name: "availability",
    placeholder: "What is your availability",
    options: ["Weekdays", "Weekends", "Both"],
  },
  {
    type: "select",
    name: "trainingEnvironment",
    placeholder: "Preferred Training Environment?",
    options: ["Gym", "Online", "Both"],
  },
  {
    type: "input",
    name: "gymLocation",
    placeholder: "Which gym location do you provide training at?",
  },
  {
    type: "select",
    name: "guestPasses",
    placeholder:
      "Does your gym offer guest passes for all prospective clients?",
    options: ["Yes", "No"],
  },
];

export const trainingSpecialtiesformFields = [
  {
    type: "select",
    name: "trainingType",
    placeholder: "Types of training/services provided",
    options: ["In-person Training", "Online Coaching", "Group Classes"],
  },
  {
    type: "input",
    name: "specificTechniques",
    placeholder: "Specific techniques or programs",
  },
  {
    type: "input",
    name: "areasOfExpertise",
    placeholder: "Areas of expertise",
  },
  {
    type: "select",
    name: "trainingStyle",
    placeholder: "Training Style",
    options: [
      "Motivational",
      "Disciplined",
      "Educational",
      "Supportive",
      "Others",
    ],
  },
];

const options = ["Yes", "No"];

export const healthAndMedicalFormInfoFormFields = [
  {
    name: "isMedicalCondition",
    placeholder: "Do you have any medical conditions or injuries?",
    options,
  },
  {
    name: "isTakingMedication",
    placeholder: "Are you currently taking any medications?",
    options,
  },
  {
    name: "isAllergies",
    placeholder: "Do you have any allergies or dietary restrictions?",
    options,
  },
];

export const loginFormFields = [
  { name: "email", type: "email", placeholder: "Email address" },
  { name: "password", type: "password", placeholder: "Password" },
];

export const signUpFormFields = [
  { name: "firstName", type: "text", placeholder: "First name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "tel", placeholder: "Phone No." },
  { name: "password", type: "password", placeholder: "Password" },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];

export function buttonsHandler(type) {
  const navigate = useNavigate();
  return [
    {
      icon: "/src/assets/icons/google.svg",
      text: "Continue with Google",
      onClick: () => {},
    },
    {
      icon: "/src/assets/icons/email.png",
      text: "Continue with Gmail",
      onClick: () =>
        type === "preLogin" ? navigate("/client-login") : navigate("/client-signup"),
    },
    {
      icon: "/src/assets/icons/apple.png",
      text: "Continue with Apple",
      onClick: () => {},
    },
    {
      icon: "/src/assets/icons/fb.png",
      text: "Continue with Facebook",
      onClick: () => {},
    },
  ];
}
export function coachButtonsHandler(type) {
  const navigate = useNavigate();
  return [
    {
      icon: "/src/assets/icons/google.svg",
      text: "Continue with Google",
      onClick: () => {},
    },
    {
      icon: "/src/assets/icons/email.png",
      text: "Continue with Gmail",
      onClick: () =>
        type === "preLogin" ? navigate("/login") : navigate("/signup"),
    },
    {
      icon: "/src/assets/icons/apple.png",
      text: "Continue with Apple",
      onClick: () => {},
    },
    {
      icon: "/src/assets/icons/fb.png",
      text: "Continue with Facebook",
      onClick: () => {},
    },
  ];
}