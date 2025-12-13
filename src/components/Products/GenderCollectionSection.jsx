import React from "react";
import menCollectionImage from "../../assets/mens-collection.webp";
import womenCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={womenCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div>
            <h2>
                Women's collection
            </h2>
            <Link
            to=""
            >

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
