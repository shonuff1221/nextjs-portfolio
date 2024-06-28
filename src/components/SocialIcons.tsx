import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/shonuff1221",
    },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/channel/UCtsQzqsD6Ja3Cj_YZzzUJdA",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/stephan-moreman-850767124/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shonuff1221/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://x.com/shonuff1221",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
