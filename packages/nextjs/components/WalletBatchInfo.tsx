import { zeroAddress } from "viem";
import { useAccount } from "wagmi";
import { LockClosedIcon, ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/24/solid";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function WalletBatchInfo() {
  const { address } = useAccount();

  const { data: isInAllowList } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });
  const { data: userContractAddress } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });
  const isCheckedIn = userContractAddress && userContractAddress !== zeroAddress;

  console.log({ isInAllowList, userContractAddress, isCheckedIn });

  if (!address) {
    return <></>;
  }

  return (
    <div className="flex">
      {isInAllowList ? (
        isCheckedIn ? (
          <ShieldCheckIcon className="h-6" title="You have checked in successfully" />
        ) : (
          <ShieldExclamationIcon className="h-6" title="You are in the batch but not checked in" />
        )
      ) : (
        <LockClosedIcon className="h-6" title="You are not in the batch" />
      )}
    </div>
  );
}
