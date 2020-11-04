export default function getCardData(setCard, setIsLoading) {
  fetch("http://localhost:8080/card")
    .then((res) => res.json())
    .then((data) => {
       setCard(data);
       setIsLoading(false);
    });
}