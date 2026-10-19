import Stats from "./Stats";
import { useState } from "react";
import Intro from "./Intro";
import Contribute from "./Contribute";
import setContributers from "./Contribute";
import Controls from "./Controls";

export default function Hero() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
    setContributers(0);
  }
  return (
    <>
      <Intro author="Shane Nathan B. Archival" />

    <div className="flex justify-center gap-4 py-6">
        <Controls state={handleStar} title="Star" />
        <Controls state={handleDownload} title="Download" />
        <Controls state={handleReport} title="Report issue" />
        <Controls state={handleReset} title="Reset" />
    </div>

      <Stats stars={stars} downloads={downloads} issues={issues} />

      <Contribute issues={issues} />
    </>
  );
}