export interface menuLinks {
  label?: string;
  href: string;
  isExternal?: boolean;
  disabled?: boolean;
  tracker?: () => void;
}

export const headerLinks = (): menuLinks[] => {
  return [
    {
     href: `/toys`,
     label: `toys`
   },
   {
     href: `/games`,
     label: `games`
   },
   {
     href: `/about`,
     label: `about`
   },
   {
     href: `/account`,
     label: `account`
   },
   {
     href: `/contact`,
     label: `contact`
   },
  ];
};
