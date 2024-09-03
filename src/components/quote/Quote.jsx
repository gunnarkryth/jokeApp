import s from "./Style.module.scss";
import { useEffect, useState } from "react";

export const Quote = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const quoteUrl = `https://dummyjson.com/quotes`;
  const api_key = "";
  const pexelsUrl = `https://api.pexels.com/v1/search?query=nature&per_page=15&size=small`;

  useEffect(() => {
    fetch(quoteUrl)
      .then((response) => response.json())
      .then((data) => {
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuoteData(randomQuote);
      })
      .catch((error) => console.error("Error fetching quote:", error));

    fetch(pexelsUrl, {
      headers: {
        Authorization: api_key,
      },
    })
      .then((response) => response.json()).then((data) => {
       const backgroundImage = 
      })
      .catch((error) => console.error("Error fetching image.", error));
  }, []);

console.log(backgroundImage);


  return (
    <hgroup
      className={s.Quote}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3>{quoteData ? `"${quoteData.quote}"` : "Loading quote..."}</h3>
      <h4>{quoteData ? `- ${quoteData.author}` : ""}</h4>
    </hgroup>
  );
};
