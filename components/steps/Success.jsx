import Button from "../ui/Button";
import { HiCheckCircle } from "react-icons/hi";

function Success() {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="success-screen">

      <HiCheckCircle className="success-icon" />

      <h2> ✅ Registration Successful!</h2>
      <p>
        Welcome Abroad!
      </p>
      <p>
        Your onboarding has been completed successfully.
      </p>

      <Button onClick={reloadPage}>
        Go to Dashboard
      </Button>

    </div>
  );
}

export default Success;