import { scrollToProps } from "../interfaces/header.interface";
export const useHeader = () => {
  const scrollTo = ({ id }: scrollToProps) => {
    const item = document.getElementById(id);

    item?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollTo };
};
