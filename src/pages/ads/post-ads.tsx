import Button from "@common/button";
import { Container } from "@common/container";
import ImageUploader from "@common/image-uploader";
import Text, { Size } from "@common/text";
import Title from "@common/title";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PostAds: React.FC = () => {
  const [adTitle, setAdTitle] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const router = useRouter();

  const handleContinue = () => {
    if (adTitle.length > 1) {
      router.push({
        pathname: "/ads/create-next",
        query: { title: adTitle, images: images.map((image) => image.name) },
      });
    }
  };

  return (
    <Container>
      <Title
        text="Let's start with the basics!"
        level={4}
        className="text-left m-5 text-vintoys"
      />
      <Container>
        <Text text="What is the title of your ad ?" size={Size.XSMall} className="mx-5" />
        <Container>
          <input
            className="w-1/3 border p-2 m-5 rounded rounded-1xl"
            value={adTitle}
            onChange={(e) => setAdTitle(e.target.value)}
          />
          <Button
            isPost={false}
            text="Continue"
            onClick={handleContinue}
            disabled={!adTitle}
            className="border bg-turquoise p-2 rounded rounded-1xl text-white font-montserratLight"
          />
        </Container>
      </Container>
      <Container>
        <ImageUploader images={images} setImages={setImages} />
      </Container>
    </Container>
  );
};

export default PostAds;
