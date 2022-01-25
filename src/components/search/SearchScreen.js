import React, { useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFileted = useMemo(() => getHeroesByName(q), [q]);
  /*useMemo es una función que memoriza el valor que retorna la función que le 
    pasemos como callback y solo cambiara si el segundo argumento cambia */
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-3">
              Buscar!
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Busca un heroe</div>
          ) : (
            heroesFileted.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados de {q}!
              </div>
            )
          )}

          {heroesFileted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
