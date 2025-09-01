import React from 'react';
import Script from 'next/script';

const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscribe to our Newsletter</h2>
        <Script async data-uid="a89e921039" src="https://ahsnjrotc.kit.com/a89e921039/index.js" />
      </div>
    </section>
  );
};

export default NewsletterSection;
