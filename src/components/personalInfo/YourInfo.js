import Form from "./Form";

export default function YourInfo() {
  return (
    <div className="personal-info">
      <header className="info-heading">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>
      <Form />
    </div>
  );
}
