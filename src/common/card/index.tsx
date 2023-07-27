import React from "react";
import { Ads } from "@models/ad";
import { Container } from "@common/container";
import Text, { Align, LineHeight, Size, Weight } from "@common/text";
import Button from "@common/button";
import { useRouter } from "next/router";

type Ad = Partial<Ads>;

const AdsCards: React.FC<Ad> = ({
  title,
  description,
  price,
  id,
  thumbnail_url,
  time_ago,
}: Ad) => {
  const router = useRouter();

  return (
    <Container className="flex flex-wrap flex-col border border-lavender my-2 rounded bg-white  shadow-lg p-4 w-64 rounded-2xl">
      <img
        src={thumbnail_url}
        alt="Ad Image"
        className="w-full h-32 object-cover mb-4 rounded rounded-3xl"
      />
      <Text
        text={`${title}`}
        size={Size.XSMall}
        textAlign={Align.Left}
        fontWeight={Weight.Bold}
        className="mb-2"
        lineHeight={LineHeight.Inter}
      />
      <Text
        text={`${description}`}
        size={Size.XSMall}
        textAlign={Align.Left}
        fontWeight={Weight.Light}
        className="mb-2 text-sm"
        lineHeight={LineHeight.Inter}
      />
      <Text
        text={`Posted ${time_ago}`}
        size={Size.XSMall}
        textAlign={Align.Left}
        fontWeight={Weight.Light}
        className="mb-2 text-sm"
        lineHeight={LineHeight.Inter}
      />
      <Text
        text={`${price}€`}
        size={Size.XSMall}
        textAlign={Align.Left}
        fontWeight={Weight.Light}
        className="mb-2 text-sm"
        lineHeight={LineHeight.Inter}
      />
      <Text
        text="Location: New York, USA"
        size={Size.XSMall}
        textAlign={Align.Left}
        fontWeight={Weight.Light}
        className="mb-4 text-sm"
        lineHeight={LineHeight.Inter}
      />
      {id !== undefined && (
        <Button text="View Details" onClick={() => router.push(`/toys/${id}`)} />
      )}
    </Container>
  );
};

export default AdsCards;
