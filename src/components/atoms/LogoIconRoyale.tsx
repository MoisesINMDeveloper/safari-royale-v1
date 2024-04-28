import Image from "next/image";
const LogoIconRoyale = () => {
  return (
    <div className="w-[3rem] h-[3rem] rounded-full ">
      <Image
        className="rounded-full"
        src="/Logo2.jpg"
        alt="Safari Royale"
        quality={100}
        height={40}
        width={40}
        loading="eager"
      />
    </div>
  );
};
export default LogoIconRoyale;
