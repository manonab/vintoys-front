import React from "react";
import { Container } from "@common/container";

interface ImageProps {
  setPreviewImages: React.Dispatch<React.SetStateAction<string[]>>;
  previewImages: string[];
  methods: any;
}

const HandleImages: React.FC<ImageProps> = ({
  setPreviewImages,
  methods,
}: ImageProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles: File[] = [];
      const imageUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        imageUrls.push(imageUrl);
        imageFiles.push(file);
      }
      setPreviewImages(imageUrls);
      const imageObjects = imageUrls.map((url) => ({ url }));
      methods.setValue("images", imageObjects);
    }
  };

  return (
    <Container>
      <h3 className="font-Capuch my-3">Images</h3>
      <input
        type="file"
        className="my-3 font-inter p-1"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </Container>
  );
};

export default HandleImages;
