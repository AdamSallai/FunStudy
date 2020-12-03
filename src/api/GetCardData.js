export function getCardData(setCard, setIsLoading) {
  const token = window.localStorage.getItem("token");
  fetch("http://localhost:8080/card", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error;
      }
    })
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    })
    .catch(() => {
      window.location.href = "/";
      alert("Please log in");
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error;
      }
    })
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    })
    .catch(() => {
      window.location.href = "/";
      alert("Please log in");
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error;
      }
    })
    .then((data) => {
      setCard(data);
      setIsLoading(false);
    })
    .catch(() => {
      window.location.href = "/";
      alert("Please log in");
    });
}
