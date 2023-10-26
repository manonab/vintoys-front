import React from "react";

interface ImageProps {
  setPreviewImages: React.Dispatch<React.SetStateAction<string[]>>;
  previewImages: string[];
  methods: any;
}

const HandleImages: React.FC<ImageProps> = ({
  setPreviewImages,
  methods,
}: ImageProps) => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageArray: { type: string, name: string, base64: string }[] = [];
      const imageUrls: string[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        if (file.size > MAX_FILE_SIZE) {
          alert(`Le fichier ${file.name} est trop volumineux. La taille maximale autorisée est ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
          continue;
        }
        const promise = new Promise<void>((resolve) => {
          reader.onload = (e) => {
            if (e.target) {
              const base64Data = e.target.result as string;
              const imageObject = {
                type: file.type,
                name: file.name,
                base64: base64Data,
              };
              imageArray.push(imageObject);
              resolve();
            }
          };
        });

        promises.push(promise);
        imageUrls.push(URL.createObjectURL(file));
        reader.readAsDataURL(file);
      }

      await Promise.all(promises);

      setPreviewImages(imageUrls);
      methods.setValue("images", imageArray);
    }
  };

  return (
    <div>
      <h3 className="font-Capuch my-3">Images</h3>
      <input
        type="file"
        className="my-3 font-inter p-1"
        accept="image/*"
        multiple
        onChange={handleImageChange}

      />
    </div>
  );
};

export default HandleImages;
