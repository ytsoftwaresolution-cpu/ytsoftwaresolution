import React from 'react';

const gallery = Array.from({ length: 9 }).map((_, i) => i + 1);

const CompanyGalleryPage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Gallery</h1>
        <p className="mt-3 text-slate-600">A glimpse into our learning environment.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((n) => (
            <div key={n} className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src={`https://picsum.photos/seed/gallery${n}/600/400`}
                alt="Gallery placeholder"
                className="h-40 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGalleryPage;
