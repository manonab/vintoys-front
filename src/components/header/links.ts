export interface menuLinks {
  label?: string;
  icon?: string;
  href: string;
  isExternal?: boolean;
  disabled?: boolean;
  tracker?: () => void;
}

export const headerLinks = (): menuLinks[] => {
  return [
    {
      href: `/`,
      label: `Home`
    },
    {
     href: `/categories`,
     label: `Categories`
   },
   {
    href: `/used`,
    label: `Used`
  },
   {
     href: `/vintage`,
     label: `Vintage`
   },
   {
     href: `/brands`,
     label: `Brands`
   },
   {
    href: `/promotions`,
    label: `Promotions`
    },
   {
     href: `/account`,
     icon: `Chest`
   },
   {
    href: `/cart`,
    icon: `Cart`
  },
  ];
};
