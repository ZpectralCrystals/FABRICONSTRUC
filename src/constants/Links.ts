export interface LinkItem {
  to: string;
  label: string;
}

export const links: LinkItem[] = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
  { to: "/servicioscard", label: "ServiciosCard" },
  { to: "/clientes", label: "Clientes" }
];
