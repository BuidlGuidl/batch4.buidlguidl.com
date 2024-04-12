import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Buidlers batch #4",
  description: "BuidlGuidl next generation of builders",
});

const BuildersLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default BuildersLayout;
