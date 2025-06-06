import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaGithub />, path: "https://github.com/dashboard" },
  
  { icon: <FaDiscord />, path: "https://discord.com/channels/@leonide_7" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
