import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import gmail from "../assets/icons/gmail.png";

export default function SocialMedia() {
  return (
    <div className="mt-10 flex items-center gap-5">
      <a
        href="https://www.facebook.com/share/1ChHwgUnk8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} className="w-[30px] h-[30px] cursor-pointer" />
      </a>

      <a
        href="https://www.instagram.com/nour.al.ali?igsh=MngzMWVxZnp2ZjVk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} className="w-[30px] h-[30px] cursor-pointer" />
      </a>

      <a
        href="https://www.linkedin.com/in/nour-al-ali-1b32a6271"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} className="w-[30px] h-[30px] cursor-pointer" />
      </a>

      <a
        href="https://wa.me/963933289353"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} className="w-[30px] h-[30px] cursor-pointer" />
      </a>

      <a href="mailto:nouralai562@gmail.com">
        <img src={gmail} className="w-[30px] h-[30px] cursor-pointer" />
      </a>
    </div>
  );
}
