export function getPlayers(setPlayers, setIsLoading) {
  const token = window.localStorage.getItem("token");
  fetch("http://localhost:8080/players", {
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
      setPlayers(data);
      setIsLoading(false);
    })
    .catch(() => {
      window.location.href = "/";
      alert("Please log in");
    });
}

export function deletePlayer(id) {
  const token = window.localStorage.getItem("token");
  fetch(`http://localhost:8080/player/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
  .then((res) => {
    console.log(res)
    if (!res.ok){
      throw Error;
    }
  })
  .then(() => {
    window.location.href = "/players";
  })
  .catch(() => {
    window.location.href = "/";
    alert("Please log in as admin");
  });
}
