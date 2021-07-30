import axiosInstance from "../Config/AxiosConfig";
import { SUPERHEROES_PER_PAGE } from "../Global-constants/GlobalConstants";

/**
 * Return one heroe from API with an specific ID
 * @param {number} id of the heroe
 * @returns
 */
export const getSuperHeroeById = async (id) => {
  const response = await axiosInstance
    .get(`/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

/**
 * Return an array of heroes with an specific lenght that is SUPERHEROES_PER_PAGE
 * @param {number} page of the list of heroes
 * @returns
 */
export const getSuperHeroesByPage = async (page) => {
  page--;
  const idFirst = page * SUPERHEROES_PER_PAGE + 1;
  const idLast = idFirst + (SUPERHEROES_PER_PAGE - 1);
  const reponseSuperHeores = [];
  for (let i = idFirst; i <= idLast; i++) {
    const response = await axiosInstance
      .get(`/${i}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    reponseSuperHeores.push(response);
  }
  return reponseSuperHeores;
};
