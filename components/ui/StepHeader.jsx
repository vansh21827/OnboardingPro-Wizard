function StepHeader({ title, subtitle }) {
  return (
    <div className="step-header">
      <h1>{title}</h1>

      <p>{subtitle}</p>
    </div>
  );
}

export default StepHeader;