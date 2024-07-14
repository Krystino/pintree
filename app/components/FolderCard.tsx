function CardIcon() {
  return (
    <div className="mb-2">
      <svg viewBox="0 0 100 80" className="folder__svg">
        <rect x="0" y="0" width="100" height="80" className="folder__back" />
        <rect x="15" y="8" width="70" height="60" className="paper-1" />
        <rect x="10" y="18" width="80" height="50" className="paper-2" />
        <rect x="0" y="10" width="100" height="70" className="folder__front" />
        <rect
          x="0"
          y="10"
          width="100"
          height="70"
          className="folder__front right"
        />
      </svg>
    </div>
  );
}

type FolderCardProps = {
  title: string;
  key: string;
};

export default function FolderCard({ title: title }: FolderCardProps) {
  return (
    <div className="folder-card text-gray rounded-lg cursor-pointer flex flex-col items-center">
      <CardIcon />
      <h2 className="text-xs font-normal text-center w-full truncate dark:text-gray-400">
        {title}
      </h2>
    </div>
  );
}

// function createFolderCard(title, children, path) {
//   const card = document.createElement('div');
//   card.className =
//     'folder-card text-gray rounded-lg cursor-pointer flex flex-col items-center';
//   card.onclick = () => {
//     const newPath = path.concat({ title, children });
//     renderBookmarks(children, newPath);
//     updateSidebarActiveState(newPath); // Update sidebar active state
//   };

//   const cardIcon = document.createElement('div');
//   cardIcon.innerHTML = `
//     <svg viewBox="0 0 100 80" class="folder__svg">
//       <rect x="0" y="0" width="100" height="80" class="folder__back" />
//       <rect x="15" y="8" width="70" height="60" class="paper-1" />
//       <rect x="10" y="18" width="80" height="50" class="paper-2" />
//       <rect x="0" y="10" width="100" height="70" class="folder__front" />
//       <rect x="0" y="10" width="100" height="70" class="folder__front right" />
//     </svg>
//   `;
//   cardIcon.className = 'mb-2';

//   const cardTitle = document.createElement('h2');
//   cardTitle.className =
//     'text-xs font-normal text-center w-full truncate dark:text-gray-400';
//   cardTitle.innerText = title;

//   card.appendChild(cardIcon);
//   card.appendChild(cardTitle);

//   return card;
// }
