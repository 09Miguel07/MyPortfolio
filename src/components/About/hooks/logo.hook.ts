import {
  DataInterface,
  useLogoInterface,
} from "../interfaces/myKnowledge.interface";

export const useLogo = (): useLogoInterface => {
  const data: DataInterface[] = [
    { alt: "Logo de react", url: "/logos/react.png" },
    { alt: "logo de typescript", url: "/logos/ts.png" },
    { alt: "logo de javascript", url: "/logos/js.png" },
    { alt: "logo de html", url: "/logos/html.png" },
    { alt: "logo de css", url: "/logos/css.png" },
  ];

  return { data };
};
