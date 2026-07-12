import Card from "../ui/Card";
import Logo from "../ui/Logo";
import Hero from "../ui/Hero";
import ProgressStepper from "../ui/ProgressStepper";

function Layout({
  children,
  currentStep,
}) {
  return (
    <main className="page">

      <div className="container">

        <Card>

          <Hero />

          <ProgressStepper
            currentStep={currentStep}
          />

          {children}

        </Card>

      </div>

    </main>
  );
}

export default Layout;