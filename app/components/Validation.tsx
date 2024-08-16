import { useState } from "react";
import { getContract } from "@/utils/BlockActive";
import {  switchToScrollSepolia} from "@/utils/ethereumUtils"

export default function ValidateAddress() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleValidation = async () => {
    setLoading(true); 
    setResult(""); 
    try { 
    
      console.log("Getting contract instance...");
      const contract = getContract();
      
      console.log("Contract address:", contract.address);
      console.log("Validating address:", address);
      const response = await contract.validateAddress(address);

      setResult(response);
      console.log("Result:", response);
    } catch (error) {
      console.error("Error validating address:", error);
      if (error instanceof Error) {
        setResult("Error: " + error.message); 
      } else {
        setResult("An unknown error occurred."); 
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="bg-white text-black ">
      <h1 className="text-xl">Validate Address</h1>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button className="bg-white" onClick={handleValidation} disabled={loading}>
        {loading ? "Validating..." : "Validate"}
      </button>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
