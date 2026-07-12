function Input({
  label,
  type = "text",
  error,
  ...props
}) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <input
        type={type}
        {...props}
      />

      {error && (
        <small className="error">
          {error}
        </small>
      )}

    </div>
  );
}

export default Input;