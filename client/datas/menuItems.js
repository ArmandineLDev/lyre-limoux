export const menuItems = [
  { name: "Accueil", url: "/" },
  {
    name: "L'orchestre",
    url: "/presentation",
    submenu: [
      { name: "Musiciens & Bénévoles", url: "/presentation" },
      { name: "Histoire", url: "/presentation/histoire" },
    ],
  },
  { name: "Revue de Presse", url: "/presse" },
  { name: "trucs", url: "/truc" },
  { name: "Agenda", url: "/agenda" },
  { name: "Contact", url: "/contact" },
  { name: "Boutique", url: "/boutique" },
  { name: "Accès musicien", url: "/connexion" },
];
