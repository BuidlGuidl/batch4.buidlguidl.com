"use client";

import { useEffect, useState } from "react";
import { Address as AddressType, getAddress, isAddress } from "viem";
import { useEnsName } from "wagmi";

type AddressProps = {
  address?: AddressType;
  disableAddressLink?: boolean;
  format?: "short" | "long";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
};
export const Batch4Address = ({ address, format, size = "base" }: AddressProps) => {
  const [ens, setEns] = useState<string | null>();
  const checkSumAddress = address ? getAddress(address) : undefined;
  const { data: fetchedEns } = useEnsName({
    address: checkSumAddress,
    enabled: isAddress(checkSumAddress ?? ""),
    chainId: 1,
  });

  useEffect(() => {
    setEns(fetchedEns);
  }, [fetchedEns]);

  if (!checkSumAddress) {
    return (
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-300 h-6 w-6"></div>
        <div className="flex items-center space-y-6">
          <div className="h-2 w-28 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (!isAddress(checkSumAddress)) {
    return <span className="text-error">Wrong address</span>;
  }

  let displayAddress = checkSumAddress?.slice(0, 6) + "..." + checkSumAddress?.slice(-4);

  if (ens) {
    displayAddress = ens;
  } else if (format === "long") {
    displayAddress = checkSumAddress;
  }

  return (
    <div className="flex items-center">
      <span className={`ml-1.5 text-${size} font-normal`}>{displayAddress}</span>
    </div>
  );
};
