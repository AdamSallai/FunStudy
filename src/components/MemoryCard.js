import React, { useState, useEffect } from "react";
import {getRandomWord} from "./GetCardData";
import axios from "axios";

export default function MemoryCard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState(getRandomWord())

  useEffect(() => {
    setLoading(true);
    axios.get(`https://owlbot.info/api/v4/dictionary/${word}`,{
      headers: {
        'Authorization': `token d9babcf6a7b2f35f7cf176123956ef6dbe4b5585`
      }
      }).then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
    });
  }, []);

  if (!loading) {
    return <div>{data.data.word}</div>;
  } else return <div></div>;
}
