import Link from "next/link";

export default function Ad({ data }) {
  const { title, images, image, price, date, millage, year, id } = data;

  return (
    <div className="smallAd">
      <img id="image" src={images[0].image} alt="Image" />
      <div className="infoSmallAd">
        <Link className="link" id="link" href={`/${id}`}>
          {title}
        </Link>
        <p className="priceSmallAd">{data.price[0].price} лв</p>
        <p className="millageSmallAd">{millage}</p>
        <p className="yearSmallAd">{year} г.</p>
      </div>
    </div>
  );
}
