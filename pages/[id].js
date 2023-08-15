import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

export async function getStaticProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/ads/${params.id}/`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/ads/");
  const data = await res.json();

  const paths = data
    ? data.map((ads) => ({
        params: { id: ads.id.toString() },
      }))
    : [];

  return {
    paths,
    fallback: false,
  };
};

function SingleCarAds({ data }) {
  console.log(data.price);
  return (
    <div>
      <main>
        <div className="wholePageContainer">
          <h3 id="singleAdTitle">{data.title}</h3>
          <div className="adContainer">
            <div className="swiperContainer">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="external-buttons"
                spaceBetween={25}
                slidesPerView={1}
                navigation
                updateOnWindowResize
                observer
                observerParents
                initialSlide={1}
                loop
              >
                {data.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img alt="img" id="imagesSingleAd" src={image.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="desc">
          <p id="name">{data.title}</p>
          <p id="price">{data.price[0].price}</p>
          <div className="singleAdContainer">
            <ul className="specsSingleAd">
              <li>
                Дата на производство : <p id="infoCarSingle">{data.year}</p>
              </li>
              <li>
                Тип двигател: <p id="infoCarSingle">{data.fuel_type}</p>
              </li>
              <li>
                Мощност: <p id="infoCarSingle">{data.horsepower}</p>
                Скоростна кути: <p id="infoCarSingle">{data.transmission}</p>
              </li>
              <li>
                Категория: <p id="infoCarSingle">{data.category}</p>
              </li>
              <li>
                {/* Евростандарт: <p id="infoCarSingle">{data.eco}</p> */}
              </li>
              <li>
                Пробег: <p id="infoCarSingle">{data.millage}</p>
              </li>
              <li>
                Цвят: <p id="infoCarSingle">{data.color}</p>
              </li>
            </ul>
          </div>
          <div className="moreInfoContainer">
            <p id="additionalInfo"> Допълнителна Информация: </p>
            <p id="singleInfo">{data.more_information}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SingleCarAds;
