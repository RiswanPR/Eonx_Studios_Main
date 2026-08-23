import NextImage, {
  type ImageProps as NextImageProps,
} from "next/image";
import { cn } from "@/lib/utils/cn";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  wrapperClassName?: string;
}

export function Image({
  alt,
  className,
  wrapperClassName,
  ...props
}: ImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        wrapperClassName,
      )}
    >
      <NextImage
        alt={alt}
        className={cn(
          "h-auto w-full object-cover",
          className,
        )}
        {...props}
      />
    </div>
  );
}
