const ACCESS_TOKEN = "342725080858973";
export const BASE_URL = `https://superheroapi.com/api/${ACCESS_TOKEN}`;

export const TOTAL_SUPERHEROES = 731;
export const SUPERHEROES_PER_PAGE = 9;
export const TOTAL_PAGES = Math.ceil(TOTAL_SUPERHEROES / SUPERHEROES_PER_PAGE);
