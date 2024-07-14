import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  title: string;
  icon: string;
  url: string;
  key: string;
};

export default function Card({ title, icon, url }: CardProps) {
  // Clean URL by removing http(s) and trailing slash
  const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <Link href={`https://${cleanUrl}`}>
      <div className="w-64 cursor-pointer flex items-center hover:shadow-sm transition-shadow p-4 bg-white shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-600/10 rounded-lg hover:bg-gray-100 dark:bg-gray-700/10 dark:hover:bg-gray-800">
        <Image
          src={icon || 'default-icon.svg'} // Use provided icon or default icon
          alt={title}
          width={200}
          height={200}
          className="w-10 h-10 mr-4 rounded-full flex-shrink-0" // Smaller size and rounded
        />
        <div
          className="flex flex-col overflow-hidden" // Ensure the content is hidden if too long
        >
          <h2 className="text-sm font-semibold mb-1 truncate dark:text-gray-400">
            {title}
          </h2>
          <p className="text-xs text-gray-400 truncate">
            {
              cleanUrl
              // Use cleaned URL
            }
          </p>
        </div>
      </div>
    </Link>
  );
}
