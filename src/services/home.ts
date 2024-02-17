import callAPI from "../config/api";
import { convertSnakeToCamel } from "../functions/convert";

const ROOT_API = import.meta.env.VITE_PUBLIC_API;
const API_VERSION = 'api';


export const genereateImageUrl = (url: string) => {
    return `${ROOT_API}/storage/${url}`;
}

export async function getHeader() {
    const url = `${ROOT_API}/${API_VERSION}/get-header`;
    const response = await callAPI({
      url,
      method: 'GET',
      token: true,
    });
    return convertSnakeToCamel(response.data);
  }


  export async function getExperiences() {
    const url = `${ROOT_API}/${API_VERSION}/get-work-exp`;
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }

  export async function getTechStacks() {
    const url = `${ROOT_API}/${API_VERSION}/get-tech-stack`;
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }

  export async function getLatestProjects() {
    const url = `${ROOT_API}/${API_VERSION}/get-projects`;
    const response = await callAPI({
        url,
        method: 'GET',
        token: true,
      });
      return convertSnakeToCamel(response.data.data);
  }

  export async function getArticles(

    category:string ='',) {
    const categoryUrl = category ? `category=${category}` : '';
    const url = `${ROOT_API}/${API_VERSION}/get-articles?${categoryUrl}`;
    const response = await callAPI({
        url,
        method: 'GET',
        token: true,
      });
      return convertSnakeToCamel(response.data);
  }

  export async function getArticleBySlug(slug :string ) {
    const url = `${ROOT_API}/${API_VERSION}/show/${slug}`;
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }


// export async function getHeader(valueParams: string) {
//     let params = '';
//     if (valueParams === 'all') {
//       params = '';
//     } else {
//       params = `?status=${valueParams}`;
//     }
//     const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;
  
//     return callAPI({
//       url,
//       method: 'GET',
//       token: true,
//     });
//   }