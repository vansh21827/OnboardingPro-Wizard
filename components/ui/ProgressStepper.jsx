import { HiCheck } from "react-icons/hi";

const steps = [
  "Personal",
  "Account",
  "Review",
];

function ProgressStepper({ currentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const number = index + 1;

        const completed = currentStep > number;

        const active = currentStep === number;

        return (
          <div
            key={step}
            className="step"
          >
            <div
              className={`
                circle
                ${completed ? "completed" : ""}
                ${active ? "active" : ""}
              `}
            >
              {completed ? <HiCheck /> : number}
            </div>

            <span>{step}</span>

            {number !== steps.length && (
              <div
                className={`line ${
                  currentStep > number
                    ? "line-active"
                    : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressStepper;