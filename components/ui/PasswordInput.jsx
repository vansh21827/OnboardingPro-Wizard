import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function PasswordInput({
  label,
  error,
  ...props
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">

      <label>{label}</label>

      <div className="password-wrapper">

        <input
          type={show ? "text" : "password"}
          {...props}
        />

        <button
          type="button"
          className="toggle-password"
          onClick={() => setShow(!show)}
        >
          {show ? <HiEyeOff /> : <HiEye />}
        </button>

      </div>

      {error && (
        <small className="error">
          {error}
        </small>
      )}

    </div>
  );
}

export default PasswordInput;