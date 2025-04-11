import Image from "next/image";

export default function Logo(){
  return <Image src={'/logo.png'} alt={`${process.env.SITE_NAME}`} width={50} height={50}/>
}