import type { Metadata } from "next";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
const titleTemplate = "%s | Buidlguidl Batch #4";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/batch-4-logo.png",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const imageUrl = `${baseUrl}${imageRelativePath}`;
  const frameImageUrl = `${baseUrl}/batch-4.jpg`;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: titleTemplate,
    },
    description: description,
    openGraph: {
      title: {
        default: title,
        template: titleTemplate,
      },
      description,
      images: [
        {
          url: frameImageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [imageUrl],
      title: {
        default: title,
        template: titleTemplate,
      },
      description,
    },
    icons: {
      icon: [{ url: imageUrl, sizes: "32x32", type: "image/png" }],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": frameImageUrl,
      "fc:frame:button:1": "Checkout Batch #4",
      "fc:frame:button:1:action": "link",
      "fc:frame:button:1:target": baseUrl,
      "fc:frame:button:2": "Checkout buidlguidl.com",
      "fc:frame:button:2:action": "link",
      "fc:frame:button:2:target": "https://buidlguidl.com",
    },
  };
};
