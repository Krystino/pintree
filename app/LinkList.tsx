'use client';

import Card from './components/Card';

export default function LinkList({ data }: any) {
  const links = data
    .filter((item: any) => item.type === 'link')
    .sort((a: any, b: any) => b.addDate - a.addDate);

  console.log(links);

  return (
    <div className="flex gap-8 m-3">
      {links.map((link: any) => (
        <Card
          title={link.title}
          url={link.url}
          key={link.title}
          icon={link.icon}
        />
      ))}
    </div>
  );
}
