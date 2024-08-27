import Input from "../components/Input";
const Step1: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Input type="text" placeholder="Enter your e-mail" image="gender.svg" />
        <Input
          type="text"
          placeholder="Enter your password"
          image="human_race.svg"
        />
        <Input type="text" placeholder="Enter your password" image="user.svg" />
        <Input type="text" placeholder="Enter your password" image="date.svg" />
        <Input
          type="text"
          placeholder="Enter your password"
          image="house-building.svg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Input type="text" placeholder="Enter your e-mail" image="at1.svg" />
        <Input
          type="text"
          placeholder="Enter your password"
          image="marker.svg"
        />
        <Input
          type="text"
          placeholder="Enter your password"
          image="instagram.svg"
        />
        <Input
          type="text"
          placeholder="Enter your password"
          image="phone-flip.svg"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          image="user-key.svg"
        />
      </div>
    </>
  );
};
export default Step1;
