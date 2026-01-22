import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  index: number;
}

const GalleryImage = ({ src, alt, onClick, index }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="gallery-image group relative rounded-lg overflow-hidden bg-muted w-full h-full"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};

export default GalleryImage;
