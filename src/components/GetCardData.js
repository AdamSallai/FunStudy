export function getCardData(setCard, setIsLoading) {
  const token = window.localStorage.getItem("token");
  fetch("http://localhost:8080/card", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    });
}

export function getCardDataWithOutPicture(setCard, setIsLoading) {
  const token = window.localStorage.getItem("token");
  fetch("http://localhost:8080/card-without-picture", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    });
}

export function getCardDataWithPicture(setCard, setIsLoading) {
  const token = window.localStorage.getItem("token");
  fetch("http://localhost:8080/card-with-picture", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    });
}
