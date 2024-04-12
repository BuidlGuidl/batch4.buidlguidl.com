import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Builders batch #4",
  description: "A collection of builders learning to build on Ethereum.",
});

const BuildersLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default BuildersLayout;
