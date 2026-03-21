import "./ButtonDemo.css";

function Button({ type, text }) {
  return <button className={`btn ${type}`}>{text}</button>;
}

function ButtonDemo() {
  return (
    <>
      <Button type="primary" text="Primary" />
      <Button type="success" text="Success" />
      <Button type="danger" text="Danger" />
    </>
  );
}

export default ButtonDemo;
