import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import OpeningCrawl from "./OpeningCrawl";
import MoreInfo from "./MoreInfo";

const FetchMoviesAPI = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  });

  return (
    <div>
      {loading && `Please wait for a moment`}
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
      <div>
        {data &&
          data.results.map((item) => {
            const movies = new Date(item.release_date);
            const releaseDate = movies.toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });
            const openingCrawlParagraph =
              item.opening_crawl.length > 260
                ? `${item.opening_crawl.substring(0, 260)}...`
                : item.opening_crawl;
            // const cardBackground = [
            //   "https://finmavis.github.io/swapi-task/static/media/bg-card-1.0c96fd00.png",
            //   "https://finmavis.github.io/swapi-task/static/media/bg-card-2.b0a7b209.png",
            //   "https://finmavis.github.io/swapi-task/static/media/bg-card-3.1914d853.png",
            //   "https://finmavis.github.io/swapi-task/static/media/bg-card-4.c21c4d4b.png",
            //   "https://finmavis.github.io/swapi-task/static/media/bg-card-5.67d061d6.png",
            // ];
            return (
              <div>
                <div key={item.id}>
                  <Title movieTitle={item.title} />
                  {/* <releaseDate date={releaseDate} />
                  <OpeningCrawl openingCrawl={openingCrawlParagraph} /> */}
                  <MoreInfo />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchMoviesAPI;
