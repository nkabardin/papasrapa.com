import { menuLinks } from "../constants/menuLinks";
import Link from "next/link";

export const OrganizeScreeningButton = () => (
  <Link href={`/${menuLinks.CONTACT}`} passHref legacyBehavior>
    <a className="organize-button">Organize a screening in your city</a>
  </Link>
);
