import { menuLinks } from "../constants/menuLinks";

export const OrganizeScreeningButton = () => (
  <a
    href={`/${menuLinks.CONTACT}`}
    style={{
      color: "white",
      border: "1px solid white",
      padding: "16px",
      borderRadius: "5px",
      textDecoration: "none",
      display: "block",
      margin: "100px auto",
      fontWeight: "bold",
      fontSize: "1.2rem",
      backgroundColor: "rgba(20, 110, 20, 0.7)",
      boxShadow: "0 0 10px 5px rgba(20, 110, 20, 0.80)",
    }}
  >
    Organize a screening in your city
  </a>
);
