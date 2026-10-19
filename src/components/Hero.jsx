import Stats from "./Stats";

import Intro from "./Intro";

export default function Hero() {
  return (
    <>
      <Intro author="Shane Nathan B. Archival" />

      <div className="flex justify-center gap-4 py-6">
      </div>

      <Stats stars="1,234" downloads="5,678" issues="90" />
    </>
  );
}