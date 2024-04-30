import React from "react";
import { useTitle } from "../hooks/useTitle";
import ProductCard from "../components/ProductCard";

const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "Casual Wear",
      price: 149,
      image: "/assets/images/1001.jpg",
    },
    {
      id: 2,
      name: "Nike Coloured",
      price: 49,
      image: "/assets/images/1002.jpg",
    },
    {
      id: 3,
      name: "Nike Green",
      price: 179,
      image: "/assets/images/1003.jpg",
    },
    {
      id: 4,
      name: "Nike Red",
      price: 39,
      image: "/assets/images/1004.jpg",
    },
    {
      id: 5,
      name: "Nike Yellow",
      price: 199,
      image: "/assets/images/1005.jpg",
    },
    {
      id: 6,
      name: "Sports Wear",
      price: 29,
      image: "/assets/images/1006.jpg",
    },
  ];
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
