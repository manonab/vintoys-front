import React, { useState, useRef } from "react";

const MAX_IMAGES = 10;
interface ImageUploaderProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages }) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const fromIndex = Number(e.dataTransfer.getData("text/plain"));
    const droppedFiles = e.dataTransfer.files;

    const selectedImages = Array.from(droppedFiles).slice(0, MAX_IMAGES);
    const updatedImages = [...images];

    if (updatedImages.length + selectedImages.length > MAX_IMAGES) {
      // Vous pouvez afficher un message d'erreur ici ou prendre d'autres mesures
      console.log("Vous ne pouvez déposer que 10 images au maximum.");
      return;
    }

    selectedImages.forEach((image, i) => {
      updatedImages.splice(fromIndex + i, 0, image);
    });

    setImages(updatedImages);
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
    console.log("start");
  };

  const handleDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    e.dataTransfer.clearData();
    console.log("end");
  };

  const handleDragEnter = (e: React.DragEvent<HTMLImageElement>, index: number) => {
    e.preventDefault();
    setDraggedImageIndex(index);
    console.log("enter");
  };

  const handleImageDrop = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();

    if (draggedImageIndex !== null) {
      const fromIndex = Number(e.dataTransfer.getData("text/plain"));
      const toIndex = draggedImageIndex;

      if (fromIndex !== toIndex) {
        const updatedImages = [...images];
        const [draggedImage] = updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, draggedImage);
        setImages(updatedImages);
      }

      setDraggedImageIndex(null);
    }
  };
  return (
    <div>
      <div
        ref={dropRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border border-dashed p-20 rounded-md"
      >
        <p className="">Drag and drop images here or click to select</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selectedImages = Array.from(e.target.files || []).slice(0, MAX_IMAGES);
            setImages(selectedImages);
          }}
          multiple
          style={{ display: "none" }}
        />
        <button
          onClick={() =>
            (document.querySelector("input[type='file']") as HTMLInputElement)?.click()
          }
        >
          Add Images
        </button>
      </div>
      <div className="flex flex-row flex-wrap">
        {images.map((image, index) => (
          <img
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={handleImageDrop}
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="w-32 h-32 object-cover m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
