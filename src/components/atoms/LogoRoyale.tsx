import Image from 'next/image';
const LogoRoyale = () => {
  return (
    <div className='w-[8rem] h-[8rem] rounded-full '>
      <Image
        className='rounded-full'
        src='/Logo2.jpg'
        alt='Safari Royale'
        quality={100}
        height={320}
        width={320}
        loading='eager'
      />
    </div>
  );
};
export default LogoRoyale;
