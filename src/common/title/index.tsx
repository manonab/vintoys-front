import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  text: string;
  level: number;
  color?: string;
  className?: string;
  children?: ReactNode;
}

const Title: FunctionComponent<Props> = ({
  level,
  text,
  color,
  className,
  children,
}: Props) => {
  if (level === 1)
    return (
      <h1
        className={`${className} ${
          color ? color : "text-vinToys"
        } relative whitespace-pre-line font-montserratRegular z-[1] text-MediumLarge tracking-tighter leading-extraLoose md:text-XXL md:tracking-tightest`}
      >
        {text}
        {children}
      </h1>
    );
  if (level === 2)
    return (
      <h2
        className={`${className} ${
          color ? color : "text-vinToys"
        } relative whitespace-pre-line font-montserratRegular z-[1] text-XLarge md:text-MediumLarge md:leading-extraLoose tracking-tighter leading-medium`}
      >
        {text}
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3
        className={`${className} ${
          color ? color : "text-vinToys"
        } relative whitespace-pre-line font-montserratRegular z-[1] text-[3.2rem] leading-XLoose md:text-[3.6rem]`}
      >
        {text}
        {children}
      </h3>
    );
  if (level === 4)
    return (
      <h4
        className={`${className} ${
          color ? color : "text-vinToys"
        } relative whitespace-pre-line font-montserratRegular z-[1] text-[2.4rem] leading-small`}
      >
        {text}
        {children}
      </h4>
    );
  if (level === 5)
    return (
      <h5
        className={`${className} ${
          color ? color : "text-vinToys"
        } relative whitespace-pre-line font-montserratRegular z-[1] text-[1.8rem] md:text-[2rem]`}
      >
        {text}
        {children}
      </h5>
    );

  return <div />;
};

export default Title;
