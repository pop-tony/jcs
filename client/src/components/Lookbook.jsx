import { useNavigate } from 'react-router-dom';

const collections = [
  {
    title: "Signature Dresses",
    desc: "Elegant pieces for every occasion",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    link: "/shop?category=dresses"
  },
  {
    title: "Everyday Chic",
    desc: "Elevated basics & statement tops",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800",
    link: "/shop?category=tops"
  },
  {
    title: "Accessories",
    desc: "Complete your look",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    link: "/shop?category=accessories"
  },
];

export default function Lookbook() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#9F2B68]">MIZ J BOUTIQUE</p>
          <h1 className="mb-4 text-5xl font-black md:text-6xl">Collections</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Curated for the modern muse</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((col, idx) => (
            <div
              key={idx}
              onClick={() => navigate(col.link)}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={col.image}
                  alt={col.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h3 className="mb-2 text-2xl font-black">{col.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{col.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
