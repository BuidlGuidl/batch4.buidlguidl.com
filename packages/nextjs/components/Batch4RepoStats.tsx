"use client";

import React, { useEffect, useState } from "react";
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip } from "chart.js";
import { useTheme } from "next-themes";
import { Line } from "react-chartjs-2";
import twconfig from "~~/tailwind.config";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const Batch4RepoStatsChart = () => {
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    openIssues: 0,
    pullRequests: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      const [repoInfo, pullRequests] = await Promise.all([
        fetch("https://api.github.com/repos/BuidlGuidl/batch4.buidlguidl.com").then(res => res.json()),
        fetch("https://api.github.com/repos/BuidlGuidl/batch4.buidlguidl.com/pulls?state=open").then(res => res.json()),
      ]);

      setStats({
        stars: repoInfo.stargazers_count,
        forks: repoInfo.forks_count,
        openIssues: repoInfo.open_issues_count,
        pullRequests: pullRequests.length,
      });
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  const themeColor = (module: string): string => {
    return theme === "light" ? twconfig.daisyui.themes[0].light[module] : twconfig.daisyui.themes[1].dark[module];
  };

  const data = {
    labels: ["Stars", "Forks", "Open Issues", "Pull Requests"],
    datasets: [
      {
        data: [stats.stars, stats.forks, stats.openIssues, stats.pullRequests],
        pointBackgroundColor: themeColor("secondary-content"),
        hoverBackgroundColor: themeColor("accent"),
        borderColor: themeColor("accent"),
        showLine: true,
        tension: 0.1,
      },
    ],
  };

  if (isLoading) {
    return <div className="skeleton w-full max-w-[800px] mx-auto p-8 rounded-3xl h-96"></div>;
  }

  return (
    <div className="w-full max-w-[800px] mx-auto p-8 bg-base-100 rounded-3xl">
      <h1 className="text-center text-xl">Batch 4 Repository Stats</h1>
      <Line
        data={data}
        options={{
          scales: {
            x: {
              ticks: {
                color: themeColor("secondary-content"),
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: themeColor("secondary-content"),
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: context => {
                  const label = context.dataset.label;
                  const value = context.parsed.y;
                  return `${label}: ${value}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Batch4RepoStatsChart;
