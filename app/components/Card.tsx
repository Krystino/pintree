import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  title: string;
  icon: string;
  url: string;
  key: string;
};

export default function Card({ title, icon, url }: CardProps) {
  return (
    <Link href={url}>
      <div className="w-64 cursor-pointer flex items-center hover:shadow-sm transition-shadow p-4 bg-white shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-600/10 rounded-lg hover:bg-gray-100 dark:bg-gray-700/10 dark:hover:bg-gray-800">
        {/* cardIcon
        const cardIcon = document.createElement('img');
        cardIcon.src = icon || 'assets/default-icon.svg'; // Use provided icon or default icon
        cardIcon.alt = title;
        cardIcon.className = 'w-5 h-5 mr-4 rounded-full flex-shrink-0'; // Smaller size and rounded
      */}
        <Image
          src={icon} // Use provided icon or default icon
          alt={title}
          width={200}
          height={200}
          className="w-10 h-10 mr-4 rounded-full flex-shrink-0" // Smaller size and rounded
        />
        {/* cardContent
        const cardContent = document.createElement('div');
        cardContent.className = 'flex flex-col overflow-hidden'; // Ensure the content is hidden if too long
      */}
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-sm font-semibold mb-1 truncate dark:text-gray-400">
            {title}
          </h2>
          <p className="text-xs text-gray-400 truncate">{url}</p>
        </div>
      </div>
    </Link>
  );
}

// // Function to create a card element
// function createCard(title, url, icon) {
//   const card = document.createElement('div');
//   card.className =
//     'cursor-pointer flex items-center hover:shadow-sm transition-shadow p-4 bg-white shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-600/10 rounded-lg hover:bg-gray-100 dark:bg-gray-700/10 dark:hover:bg-gray-800';
//   card.onclick = () => window.open(url, '_blank'); // Make the whole card clickable

// const cardIcon = document.createElement('img');
// cardIcon.src = icon || 'assets/default-icon.svg'; // Use provided icon or default icon
// cardIcon.alt = title;
// cardIcon.className = 'w-5 h-5 mr-4 rounded-full flex-shrink-0'; // Smaller size and rounded

// const cardContent = document.createElement('div');
// cardContent.className = 'flex flex-col overflow-hidden'; // Ensure the content is hidden if too long

//   const cardTitle = document.createElement('h2');
//   cardTitle.className =
//     'text-sm font-semibold mb-1 truncate dark:text-gray-400';
//   cardTitle.innerText = title;

//   // Clean URL by removing http(s) and trailing slash
//   const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

//   const cardUrl = document.createElement('p');
//   cardUrl.className = 'text-xs text-gray-400 truncate';
//   cardUrl.innerText = cleanUrl; // Use cleaned URL

//   cardContent.appendChild(cardTitle);
//   cardContent.appendChild(cardUrl); // Add URL paragraph

//   card.appendChild(cardIcon);
//   card.appendChild(cardContent);

//   return card;
// }
