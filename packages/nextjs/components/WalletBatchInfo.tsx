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

  if (!address) {
    return <></>;
  }

  return (
    <div className="flex">
      {isInAllowList ? (
        isCheckedIn ? (
          <div
            className="tooltip tooltip-bottom tooltip-primary"
            data-tip="Wallet address is part of the current batch and has successfully checked-in!"
          >
            <ShieldCheckIcon className="h-6" />
          </div>
        ) : (
          <div
            className="tooltip tooltip-bottom tooltip-primary"
            data-tip="Wallet address is part of the current batch, but is yet to check in!"
          >
            <ShieldExclamationIcon className="h-6" />
          </div>
        )
      ) : (
        <div
          className="tooltip tooltip-bottom tooltip-primary"
          data-tip="Wallet address is not part of the current batch!"
        >
          <LockClosedIcon className="h-6" />
        </div>
      )}
    </div>
  );
}
