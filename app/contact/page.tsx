import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Pixellent Solutions LLC",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        We'd love to hear from you! If you have any questions, comments, or inquiries, please feel free to reach out to us.
      </p>
      {/* Add contact form or contact details here */}
    </div>
  );
}
