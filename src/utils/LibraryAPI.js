const api = "https://www.blackbullion.com/api/_dev/pathways";

const headers = {
  Accept: "application/json"
};

export const getAll = () =>
  fetch(`${api}`, { headers })
    .then((res) => res.json())
    .then((data) => data);