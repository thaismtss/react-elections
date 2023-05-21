import React from 'react';
import { formatNumber, formatPercent } from '../helpers';
import { getImage } from '../helpers/getImages';

export default function Candidate({
  name,
  username,
  votes,
  percentage,
  elected,
}) {
  const electedClass = elected ? 'text-green-600' : 'text-orange-600';
  return (
    <div
      className={`border border-indigo-800 p-2 h-56 md:h-48  w-40 md:w-56 shadow-xl rounded-xl ${electedClass} flex-wrap`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between pb-8">
        <img
          width={60}
          src={getImage(username)}
          alt={name}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold">{formatPercent(percentage)}</span>
          <span>{formatNumber(votes)} votos</span>
        </div>
      </div>
      <span className="flex justify-center text-lg font-semibold">{name}</span>

      <span className="flex justify-center text-lg font-semibold pt-2">
        {elected ? 'Eleito' : 'Não Eleito'}
      </span>
    </div>
  );
}
