import Image from "next/image";
import Link from "next/link";

export default function Social() {
  return (
    <>
      <Link
        href="https://www.instagram.com/eltitularmdp/"
        target="#"
        className="m-2 flex items-center"
      >
        <Image
          src={"/instagram-icon.png"}
          alt="Instagram"
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="https://www.tiktok.com/@media.mdp?is_from_webapp=1&sender_device=pc"
        target="#"
        className="m-2 flex items-center"
      >
        <Image src={"/tiktok-icon.png"} alt="Tik Tok" width={50} height={50} />
      </Link>
      <Link
        href="https://www.instagram.com/eltitularmdp/"
        target="#"
        className="m-2 flex items-center"
      >
        <Image src={"/twitter-icon.png"} alt="Twitter" width={50} height={50} />
      </Link>
      <Link
        href="https://wa.me/5492234544870"
        target="#"
        className="m-2 flex items-center"
      >
        <Image
          src={"/whatsapp-icon.png"}
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC_y5jK1WRWZPcJTTDJEqmhA"
        target="#"
        className="m-2 flex items-center"
      >
        <Image src={"/youtube-icon.png"} alt="YouTube" width={50} height={50} />
      </Link>
      <Link
        href="https://www.facebook.com/people/El-Titular/61555169820286/"
        target="#"
        className="m-2 flex items-center"
      >
        <Image
          src={"/facebook-icon.png"}
          alt="Facebook"
          width={50}
          height={50}
        />
      </Link>
    </>
  );
}
