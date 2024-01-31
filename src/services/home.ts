import callAPI from "../config/api";

const ROOT_API = import.meta.env.VITE_PUBLIC_API;
const API_VERSION = 'api';

export async function getHeader() {
    const url = `${ROOT_API}/${API_VERSION}/get-header`;
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }


  export async function getExperiences() {
    const url = `${ROOT_API}/${API_VERSION}/get-work-exp`;
    console.log(url);
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }

  export async function getTechStacks() {
    const url = `${ROOT_API}/${API_VERSION}/get-tech-stack`;
    console.log(url);
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