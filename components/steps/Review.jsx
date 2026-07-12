import Button from "../ui/Button";

function Review({
  formData,
  prevStep,
  handleSubmit,
}) {
  return (
    <>
      <h2 className="step-title">
        Review Information
      </h2>

      <p className="step-subtitle">
        Please verify your information before submitting.
      </p>

      <div className="review-card">

        <div className="review-item">
          <span>First Name</span>
          <strong>{formData.firstName}</strong>
        </div>

        <div className="review-item">
          <span>Last Name</span>
          <strong>{formData.lastName}</strong>
        </div>

        <div className="review-item">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-item">
          <span>Username</span>
          <strong>{formData.username}</strong>
        </div>

      </div>

      <div className="button-group">

        <Button
          variant="secondary"
          onClick={prevStep}
        >
          ← Back
        </Button>

        <Button
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </div>
    </>
  );
}

export default Review;