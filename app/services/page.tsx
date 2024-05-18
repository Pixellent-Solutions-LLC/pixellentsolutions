import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Pixellent Solutions LLC",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        At Pixellent Solutions LLC, we offer a wide range of services to help your business grow. Our expertise includes web development, mobile app development, and custom software solutions tailored to your needs.
      </p>
      {/* Add more detailed descriptions of services here */}
    </div>
  );
}
