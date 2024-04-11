import { useEffect, useState } from "react";
import { AvatarComponent } from "@rainbow-me/rainbowkit";
import { blo } from "blo";
import { getAddress, isAddress } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";

export const Batch4Avatar: AvatarComponent = ({ address, size }) => {
  const [ensAvatar, setEnsAvatar] = useState<string | null>();
  const checkSumAddress = address ? getAddress(address) : undefined;

  const { data: fetchedEns } = useEnsName({
    address: checkSumAddress,
    enabled: isAddress(checkSumAddress ?? ""),
    chainId: 1,
  });

  const { data: fetchedEnsAvatar } = useEnsAvatar({
    name: fetchedEns,
    enabled: Boolean(fetchedEns),
    chainId: 1,
    cacheTime: 30_000,
  });

  useEffect(() => {
    setEnsAvatar(fetchedEnsAvatar);
  }, [fetchedEnsAvatar]);

  return (
    <img
      className="rounded-full"
      src={ensAvatar || blo(address as `0x${string}`)}
      width={size}
      height={size}
      alt={`${address} avatar`}
    />
  );
};
