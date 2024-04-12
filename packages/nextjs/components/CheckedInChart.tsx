"use client";

import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, TimeScale, Tooltip } from "chart.js";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import twconfig from "~~/tailwind.config";

export const CheckedInChart = () => {
  ChartJS.register(CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Tooltip);

  const { data: checkedInEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 118484927n,
  });

  const { theme } = useTheme();

  const firstCheckInEvents = checkedInEvents ? checkedInEvents.filter(event => event.args?.first === true) : [];

  const firstCheckInData = firstCheckInEvents
    .map(event => {
      const dateTime = new Date(Number((event as any).block?.timestamp ?? 0) * 1000);
      return {
        address: event.args.builder,
        timestamp: dateTime,
      };
    })
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  const cumulativeBuilders: number[] = firstCheckInData.reduce((acc: number[], curr, index) => {
    acc.push(index + 1);
    return acc;
  }, []);

  if (isLoading || firstCheckInData.length === 0) {
    return <div className="skeleton w-full max-w-[800px] mx-auto p-8 rounded-3xl h-96"></div>;
  }

  const themeColor = (module: string): string => {
    return theme === "light" ? twconfig.daisyui.themes[0].light[module] : twconfig.daisyui.themes[1].dark[module];
  };

  return (
    <div className="w-full max-w-[800px] mx-auto p-8 bg-base-100 rounded-3xl">
      <h1 className="text-center text-xl">Checked In Builders</h1>
      <Line
        data={{
          labels: firstCheckInData.map(data => data.timestamp),
          datasets: [
            {
              data: cumulativeBuilders,
              pointBackgroundColor: themeColor("secondary-content"),
              hoverBackgroundColor: themeColor("accent"),
              borderColor: themeColor("accent"),
              showLine: true,
              tension: 0.1,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "linear",
              ticks: {
                callback: value => {
                  const date = new Date(value);
                  return date.toLocaleDateString();
                },
                color: themeColor("secondary-content"),
              },
            },
            y: {
              type: "linear",
              min: 0,
              max: cumulativeBuilders[cumulativeBuilders.length - 1] + 5,
              ticks: {
                stepSize: 1,
                color: themeColor("secondary-content"),
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: context => {
                  const index = context.dataIndex;
                  const address = firstCheckInData[index].address;
                  return `Address: ${address}`;
                },
                title: context => {
                  const index = context[0].dataIndex;
                  const datetime = firstCheckInData[index].timestamp.toLocaleString();
                  return `${datetime}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
