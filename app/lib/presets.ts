import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { CardData } from './types';

export const generateName = (): string => {
  return _.capitalize(faker.word.adjective()) + ' ' + faker.person.firstName();
};

export const generateImageSrc = (name: string): string => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return `https://robohash.org/${name.replace(
    /\s/g,
    ''
  )}?set=set${randomNumber}`;
};

export const createCards = (count: number): CardData[] => {
  const existingData = sessionStorage.getItem('generatedData');

  if (existingData) {
    return JSON.parse(existingData);
  }

  const names = new Set<string>();

  while (names.size < count) {
    names.add(generateName());
  }

  const newData = Array.from(names).map((name) => ({
    name,
    imgSrc: generateImageSrc(name),
  }));

  sessionStorage.setItem('generatedData', JSON.stringify(newData));

  return newData;
};
