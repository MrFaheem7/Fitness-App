import { z } from "zod";

//************ basic auth schema ************//

export const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Email is invalid"),
  password: z.string().nonempty("Password is required"),
});

export const signupSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  email: z.string().nonempty("Email is required").email("Email is invalid"),
  phone: z.string().nonempty("Phone number is required"),
  password: z.string().nonempty("Password is required"),
  confirmPassword: z.string().nonempty("Confirm password is required"),
  profileImage: z.instanceof(File).optional(),
});

export const otpSchema = z.object({
  otp: z
    .array(z.string().length(1, "Each OTP digit should be 1 character"))
    .length(6, "OTP must be 6 digits"),
});

// ***** coach onboarding ***** //

export const availabilitySchedulingSchema = z.object({
  availability: z.string().nonempty("Availability is required"),
  trainingEnvironment: z.string().nonempty("Training Environment is required"),
  gymLocation: z.string().nonempty("Gym Location is required"),
  guestPasses: z.string().nonempty("Guest Passes are required"),
});

export const personalAddressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  country: z.string().nonempty("Country is required"),
  gender: z.string().nonempty("Gender is required"),
  agree: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

export const professionalBackgroundSchema = z.object({
  qualifications: z.string().nonempty("Qualifications are required"),
  certificationType: z.string().nonempty("Certification Type is required"),
  yearsOfExperience: z.string().nonempty("Years of Experience are required"),
  previousExperience: z.string().nonempty("Previous Experience is required"),
  uploadedDocument: z.instanceof(File).optional(),
});

export const prospectiveClientPreferencesSchema = z.object({
  ageGroup: z.string().nonempty("Age Group is required"),
  gender: z.string().nonempty("Gender is required"),
  clienteleType: z.string().nonempty("Clientele Type is required"),
  goals: z.string().nonempty("Goals are required"),
});

export const trainingSpecialtiesSchema = z.object({
  trainingType: z.string().nonempty("Training Type is required"),
  trainingStyle: z.string().nonempty("Training Style is required"),
  specificTechniques: z.string().nonempty("Specific Techniques are required"),
  areasOfExpertise: z.string().nonempty("Areas of Expertise are required"),
});

// ***** client onboarding ***** //

export const fitnessGoalsSchema = z.object({
  fitnessGoals: z.string().nonempty("This field is required"),
  trainingType: z.string().nonempty("This field is required"),
  programStyle: z.string().nonempty("This field is required"),
  trainingEnvironment: z.string().nonempty("This field is required"),
  eventsOrDeadlines: z.string().nonempty("This field is required"),
  currentFitnessLevel: z.string().nonempty("This field is required"),
  currentExerciseType: z.string().nonempty("This field is required"),
  currentActivityLevel: z.string().nonempty("This field is required"),
  exerciseFrequency: z.string().nonempty("This field is required"),
  physicalActivityHobbies: z.string().nonempty("This field is required"),
});

export const healthAndMedicalSchema = z.object({
  isMedicalCondition: z.string().nonempty("This field is required"),
  isTakingMedication: z.string().nonempty("This field is required"),
  isAllergies: z.string().nonempty("This field is required"),
});

export const trainerPreferencesSchema = z.object({
  gender: z.string().nonempty("gender is required"),
  qualities: z.string().nonempty("qualities is required"),
  experience: z.string().nonempty("experience is required"),
  feedback: z.string().nonempty("feedback is required"),
});
