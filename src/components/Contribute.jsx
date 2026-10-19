import { useState } from "react";

export default function Contribute( {issues} ) {
  const [contributers, setContributers] = useState(0);

  function handleContribute() {
    setContributers(contributers + 1);
  }

  function handleClear() {
    setContributers(0);
  }


  return (
    <div className="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
        <div>
          <h3 className="text-2xl font-bold">Want to contribute?</h3>
          <p className="mt-2 text-lg">Fix an open issue on 
            <a className="font-bold underline" href="https://github.com/Shanenathanarchival/CSIT340-G5-Midterms-Archival" target="_blank" 
            onClick={handleContribute}>
              GitHub
            </a>
          </p>
        </div>

        <div className="flex items-center gap-8">
            <p className="text-xl">Contributers
                <span className="font-bold"> {contributers}</span>
            </p>
            <p className="text-xl">Open issues
                <span className="font-bold"> {Math.max(0, issues - contributers)}</span>
            </p>
        </div>
        
        <button
          className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
    </div>
  );
}