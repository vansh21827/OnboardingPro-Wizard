function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
}) {

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        variant === "primary"
          ? "primary-btn"
          : "secondary-btn"
      }
    >
      {children}
    </button>
  );
}

export default Button;