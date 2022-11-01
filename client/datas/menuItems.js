export const menuItems = [
  { name: "Accueil", url: "/" },
  {
    name: "L'orchestre",
    url: "/presentation",
    submenu: [
      { name: "Musiciens & Bénévoles", url: "pupitres" },
      { name: "Histoire", url: "histoire" },
    ],
  },
  { name: "Agenda", url: "/agenda", underMenu: "" },
  { name: "Contact", url: "/contact" },
  { name: "Boutique", url: "/boutique" },
  { name: "Accès musicien", url: "/connexion" },
];
