import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Socials() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/eltitularmdp/",
      img: "/Instagram.png",
      alt: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@media.mdp?is_from_webapp=1&sender_device=pc",
      img: "/TikTok.png",
      alt: "TikTok",
    },
    {
      href: "https://www.facebook.com/people/El-Titular/61555169820286/",
      img: "/Facebook.png",
      alt: "Facebook",
    },
    {
      href: "https://wa.me/5492234544870",
      img: "/WhatsApp.png",
      alt: "WhatsApp",
    },
    {
      href: "https://www.youtube.com/channel/UC_y5jK1WRWZPcJTTDJEqmhA",
      img: "/YouTube.png",
      alt: "YouTube",
    },
  ];

  return (
    <section className="ventana-socials">
      <h3>Nuestras Redes</h3>
      <ul>
        {socialLinks.map(({ href, img, alt }) => (
          <li key={alt}>
            <Link href={href} target="#" className="link">
              <Image
                src={img}
                alt={alt}
                width={200}
                height={100}
                className="image"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
