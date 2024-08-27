import Input from "../components/Input";
const Step2: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Input type="text" placeholder="Card number" image="credit-card.svg" />
        <Input type="text" placeholder="Expire date" image="calendar-day.svg" />
        <Input
          type="text"
          placeholder="Security code"
          image="Frame.svg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Input type="text" placeholder="Select your country" image="world.svg" />
        <Input
          type="text"
          placeholder="Zip Code"
          image="newsletter-subscribe.svg"
        />
      </div>
    </>
  );
};
export default Step2;
