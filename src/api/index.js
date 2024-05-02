const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const BASE_URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";
export const getJobList = (offset) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      limit: 10,
      offset: offset || 0,
    }),
  });
};
