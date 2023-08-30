import "./styles.css";
import { PLPTile } from "./PLPTile";

export default function App() {
  return (
    <div className="bg-gray-900 w-full h-full flex flex-col items-center justify-center absolute top-0 left-0">
      <div className="w-4/5 min-h-[600px] flex p-6 rounded-xl bg-white gap-8">
        <div className="w-[300px] flex flex-col gap-4">
          <h1 className="text-xl">Hi Trevor!</h1>
          <p className="text-sm">
            For this code challenge you're gonna build a React component using
            Tailwind and TS.
          </p>
          <p className="text-sm">
            You're allowed to search for documentation and ask any questions at
            any time.
          </p>
          <p className="text-sm">
            You'll have <strong>45 minutes</strong> to complete this challenge.
            Focus on attention to detail, accesibility, SEO and performance.{' '}
            <strong>You don't need to finish the whole exercise. If you run out of time is totally OK.</strong>
          </p>
          <div className="bg-gray-200 text-gray-600 leading-relaxed p-2 rounded flex flex-col gap-1">
            <span className="text-xs uppercase font-bold tracking-wide">
              Description
            </span>
            <h3 className="font-bold">PLP Tile</h3>
            <p className="text-sm mt-2">
              Build a component using mock data (found inside the PLPTile
              folder) that follows{" "}
              <a
                href="https://www.figma.com/file/ahsUlZpAKklQgDKJT4ajXb/PLP-Tiles-exercise?type=design&node-id=0%3A1&mode=design&t=4anz0oODSWvuNmLa-1"
                target="_blank"
                className="text-blue-500 font-bold"
                rel="noreferrer"
              >
                this Figma link design
              </a>
              .
            </p>
            <p className="text-sm mt-2">
              Please use TypeScript and Tailwind as much as possible.
            </p>
          </div>
          <strong className="text-red-500 text-sm">
            Please don't modify this file
          </strong>
        </div>
        <div className="flex flex-1 flex-col gap-4 leading-2">
          <h2 className="text-gray-400 text-sm uppercase tracking-wider">
            Component preview
          </h2>
          <div className="w-full bg-gray-100 p-2 flex justify-center items-center flex-1">
            <PLPTile />
          </div>
        </div>
      </div>
    </div>
  );
}
