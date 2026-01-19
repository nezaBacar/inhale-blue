import Image from "next/image";

const Logo = () => {
  return <Image
        src={'/assets/logo.webp'}
        alt="Logo for Inhale - Blue"
        width='720' height="540"
        className="w-8 max-w-8 h-full object-cover"
    />
};

export default Logo;
