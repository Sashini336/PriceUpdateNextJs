import React, { useState } from "react";
import { useRouter } from "next/router";
import Ad from "../components/ad";
import { captureRejectionSymbol } from "events";

const adsPerPage = 12;

export default function Home({ data }) {
  const [searchField, setSearchField] = useState("");
  const [displayedAds, setDisplayedAds] = useState(adsPerPage);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = "http://127.0.0.1:8000/add_url/";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: searchField }),
      });

      const responseData = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredAds = data.filter((ad) => {
    return ad.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const pageAds = filteredAds.slice(0, displayedAds);

  return (
    <>
      <title>Price Checker</title>
      <div className="container">
        <div className="searchContainer">
          <form onSubmit={handleSubmit} className="searchBar">
            <input
              className="submitBtn"
              type="text"
              placeholder="Линк за обявата"
              value={searchField}
              onChange={handleChange}
            />
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
          <div className="loadMoreAdsContainer">
            {pageAds.map((ad, index) => (
              <Ad key={index} data={ad} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/ads/");
  const data = await res.json();
  return {
    props: { data },
  };
}
