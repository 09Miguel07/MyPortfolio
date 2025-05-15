import {
  DataInterface,
  useLogoInterface,
} from "../interfaces/myKnowledge.interface";

export const useLogo = (): useLogoInterface => {
  const data: DataInterface[] = [
    { alt: "Logo de react", url: "/logos/react.png" },
    { alt: "logo de typescript", url: "/logos/ts.png" },
    { alt: "logo de javascript", url: "/logos/js.png" },
  ];

  return { data };
};
