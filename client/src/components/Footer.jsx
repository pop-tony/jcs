import { FaTwitter, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const defaultSocials = [
    { Icon: FaInstagram, href: 'https://instagram.com/jcsshop', name: 'Instagram' },
    { Icon: FaFacebookF, href: 'https://facebook.com/jcsshop', name: 'Facebook' },
    { Icon: FaTiktok, href: 'https://tiktok.com/@jcsshop', name: 'TikTok' },
    { Icon: FaTwitter, href: 'https://x.com/jcsshop', name: 'Twitter' },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div>
          <h3 className="mb-4 text-2xl font-black">JCS <span className="text-[#9F2B68]">SHOP</span></h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Curated fashion for the bold & elegant.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-3">
          <div>
            <h4 className="mb-4 font-bold">Shop</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/shop?category=Dresses" className="transition hover:text-black dark:hover:text-white">Dresses</Link></li>
              <li><Link to="/shop?category=Tops" className="transition hover:text-black dark:hover:text-white">Tops</Link></li>
              <li><Link to="/shop?category=Bottoms" className="transition hover:text-black dark:hover:text-white">Bottoms</Link></li>
              <li><Link to="/shop?category=Accessories" className="transition hover:text-black dark:hover:text-white">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Support</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/contact" className="transition hover:text-black dark:hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="transition hover:text-black dark:hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="transition hover:text-black dark:hover:text-white">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/about" className="transition hover:text-black dark:hover:text-white">Our Story</Link></li>
              <li><Link to="/terms" className="transition hover:text-black dark:hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="transition hover:text-black dark:hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">© 2026 JCS SHOP. All rights reserved.</p>
          <div className="flex gap-4">
            {defaultSocials.map(({ Icon, href, name }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all hover:border-[#9F2B68] hover:text-[#9F2B68] dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-[#9F2B68] dark:hover:text-[#9F2B68]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
