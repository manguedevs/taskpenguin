var api_url = "https://taskpenguin.herokuapp.com";
if (location.href.indexOf("localhost:3000") > -1) {
  api_url = "http://localhost:8080";
}

export const API_URL = api_url;

export async function handleRequest(request, errorHandler) {
  try {
    return await request;
  } catch (err) {
    if (errorHandler) errorHandler(err);
    else throw err;
  }
};
