
export function getCardData(setCard, setIsLoading) {
  fetch("http://localhost:8080/card")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

export function getCardDataWithOutPicture(setCard, setIsLoading) {
  fetch("http://localhost:8080/card-without-picture")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

export function getCardDataWithPicture(setCard, setIsLoading) {
  fetch("http://localhost:8080/card-with-picture")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

export function clearMemoryGame() {
  fetch("http://localhost:8080/clear-memory-game");
}

