//Importaciones de 3 primero
import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //Recibimos en las props el publisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  /*useMemo es un hook que memorizara un valor de una función que sabemos 
   que requiere un trabajo pesado y no queremos que se vuelva a disparar por algun cambio del state o algo
    asi*/
  return (
    <div className="row animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
