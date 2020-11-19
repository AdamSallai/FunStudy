export default function getCardData(setCard, setIsLoading) {
  fetch("http://localhost:8080/card")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

function getCardDataWithOutPicture(setCard, setIsLoading) {
  fetch("http://localhost:8080/card-without-picture")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

function getCardDataWithPicture(setCard, setIsLoading) {
  fetch("http://localhost:8080/card-with-picture")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}

export{getCardDataWithOutPicture,getCardDataWithPicture}