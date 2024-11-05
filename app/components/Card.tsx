import Image from 'next/image';
import { CardData } from '../lib/types';

interface ICardProp {
  data: CardData;
}

export default function Card({ data }: ICardProp) {
  const { name, imgSrc } = data;
  return (
    <div className='flex flex-col items-center'>
      <div className='relative pt-1 h-32 w-32 bg-blue-100 select-none hover:cursor-pointer rounded-t-lg'>
        <Image
          src={imgSrc}
          priority
          sizes='128px'
          fill
          alt={`${name} robo image`}
          draggable='false'
          quality={75}
        />
      </div>
      <p className='text-center'>{name}</p>
    </div>
  );
}
