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
     href: `/vintage`,
     label: `vintage`
   },
   {
     href: `/toys&games`,
     label: `toys&games`
   },
   {
     href: `/about`,
     label: `about`
   },
   {
     href: `/account`,
     label: `login`
   },
  ];
};
