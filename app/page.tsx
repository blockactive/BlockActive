import Image from "next/image";
import SearchBox from "@/app/components/SearchBox"
import Card from "@/app/components/Card"; // Adjust the import path as necessary
import { FaLink } from 'react-icons/fa'; 
export default function Home() {
  const chainData = [
    { title: 'Chain 1', icon: <FaLink />, dateOfActivity: '2024-08-15' },
    { title: 'Chain 2', icon: <FaLink />, dateOfActivity: '2024-08-14' },
    { title: 'Chain 3', icon: <FaLink />, dateOfActivity: '2024-08-13' },
    { title: 'Chain 4', icon: <FaLink />, dateOfActivity: '2024-08-12' },
    { title: 'Chain 5', icon: <FaLink />, dateOfActivity: '2024-08-11' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SearchBox />
      </div>

      <div className="w-full max-w-md mt-8"> {/* Adjust spacing and width as needed */}
        <Card chains={chainData} />
      </div>
    </main>
  );
}
