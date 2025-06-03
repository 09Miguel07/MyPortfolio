import {
  ContactsInterface,
  useFooterInterface,
} from "../interface/footer.interface";

export const useFooter = (): useFooterInterface => {
  const data: ContactsInterface[] = [
    {
      icon: "bi bi-whatsapp",
      text: "Whatsapp",
      url: "https://wa.me/573001995145?text=Hola",
    },
    {
      icon: "bi bi-instagram",
      text: "Intagram",
      url: "https://instagram.com/miguel_moreno.a",
    },
    {
      icon: "bi bi-envelope",
      text: "Correo Electronico",
      url: "mailto:morenoarenasmiguel@gmail.com",
    },
  ];

  return { data };
};
