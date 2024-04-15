import type { Metadata } from "next";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/batch-4-logo.png",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://batch4.buidlguidl.com`
    : `http://localhost:${process.env.PORT || 3000}`;
  const imageUrl = `${baseUrl}${imageRelativePath}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
};
