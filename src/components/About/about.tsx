import { useSelector } from "react-redux";
import { IInitialState } from "../../utills/redux/action";

export const About = () => {
  const {
    baseUser: { name, age },
  } = useSelector((value: IInitialState) => value);
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};
