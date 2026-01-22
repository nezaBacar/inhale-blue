
import GalleryImage from "./GalleryImage";

const PhotoGallery = ({galleryImages}: {galleryImages: {src: string; caption: string; aspectRatio: "landscape" | "portrait";}[]}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`${
              image.aspectRatio === "portrait"
                ? "md:row-span-2"
                : ""
            } w-full h-full`}
          >
            <GalleryImage
              src={image.src}
              alt={image.caption}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
