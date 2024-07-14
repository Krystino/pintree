'use client';

import FolderCard from './components/FolderCard';

export default function FolderCardList({ data }: any) {
  const folders = data.filter((item: any) => item.type === 'folder');
  console.log(folders);
  return (
    <div className="flex gap-8 m-3">
      {folders.map((e: any) => (
        <FolderCard key={e.title} title={e.title} />
      ))}
    </div>
  );
}
