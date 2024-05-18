import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Pixellent Solutions LLC",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Explore our portfolio to see the amazing projects we have delivered for our clients. We take pride in our work and strive to exceed expectations in every project we undertake.
      </p>
      {/* Add portfolio items here */}
    </div>
  );
}
