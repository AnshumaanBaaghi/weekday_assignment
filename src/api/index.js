const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const raw = JSON.stringify({
  limit: 10,
  offset: 0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
};
const BASE_URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";
export const getJobList = () => {
  return fetch(BASE_URL, requestOptions);
};
