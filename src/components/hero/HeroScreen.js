import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

/*REACR - ROUTER V5 utilizabamos o leeiamos los argumentos del URL por los props ahora es por un hook*/
export const HeroScreen = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1); //Ve a la pagina anterior literal
  };

  const { heroId } = useParams();
  //Ahora ir a la db y ir extraer el heroe
  const hero = useMemo(() => getHeroeById(heroId), [heroId]);
  /*[heroeId ] es la dependencia que va a hacer que la función que tiene useMemo se vuelve a disparar*/
  if (!hero) return <Navigate to="/" />;
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  /* Navigate es un componente que en vez de usar el hook de navigate y retornar nada , podemos o tenemos
  que regresar un componente asi que el Navigate es un uno y aparte redirecciona al usuario*/
  const imagePath = `/assets/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
