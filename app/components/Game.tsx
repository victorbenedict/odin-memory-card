'use client';
import { useEffect, useState } from 'react';
import { createCards } from '../lib/presets';
import Card from './Card';
import { CardData } from '../lib/types';

export default function Game() {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    setData(createCards(12));
  }, []);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {data?.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
}
