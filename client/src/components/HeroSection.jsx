import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600"
        alt="MIZ J BOUTIQUE Collection"
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <p className="mb-4 text-sm uppercase tracking-[0.3em]">JCS</p>
          <h1 className="mb-8 text-5xl font-black md:text-7xl">Elevate Your Style</h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="cursor-pointer rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-zinc-200"
            >
              Shop Collection
            </button>
            <button
              onClick={() => navigate('/new')}
              className="cursor-pointer rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              New Arrivals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
