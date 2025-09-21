import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import searchIcon from "../assets/search2.svg";
import searchIcon2 from "../assets/search3.svg";
import { useNavigate } from "react-router-dom";

const cityList = ["GUNTUR", "TENALI"];
const busTypes = ["PALLEVELUGU", "LUXURY", "EXPRESS"];
const validServiceNumbers = ["12345", "54321", "67890"];
const validVehicleNumbers = [
  "PB01 AB 1234","PB02 CD 5678","PB03 EF 9012",
  "PB04 GH 3456","PB05 IJ 7890","PB06 KL 2345",
  "PB07 MN 6789","PB08 OP 0123","PB09 QR 4567","PB10 ST 8901"
];

export default function Services() {
  const navigate = useNavigate();
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [busType, setBusType] = useState(busTypes[0]);
  const [serviceNumber, setServiceNumber] = useState("");
  const [searchType, setSearchType] = useState("service");
  const [isValidNumber, setIsValidNumber] = useState(null);

  function handleClearLocations() {
    setFromStation("");
    setToStation("");
    setBusType(busTypes[0]);
  }

  function handleSwapLocations() {
    setFromStation(toStation);
    setToStation(fromStation);
  }

  function handleSearchLocations() {
    if (!fromStation || !toStation) {
      alert("Please select both From and To stations");
      return;
    }
    navigate(`/search?from=${fromStation}&to=${toStation}&busType=${busType}`);
  }

  function handleClearService() {
    setServiceNumber("");
    setIsValidNumber(null);
  }

  function validateNumber(val) {
    if (!val) {
      setIsValidNumber(null);
      return;
    }
    const normalizedVal = val.toUpperCase();
    const isValid = searchType === "service"
      ? validServiceNumbers.includes(normalizedVal)
      : validVehicleNumbers.includes(normalizedVal);
    setIsValidNumber(isValid);
  }

  function handleNumberChange(e) {
    const val = e.target.value.toUpperCase();
    setServiceNumber(val);
    validateNumber(val);
  }

  function handleSearchService() {
    if (!isValidNumber) {
      alert("Enter a valid number");
      return;
    }
    const busTypeForSearch = searchType === "service" ? "PALLEVELUGU" : "LUXURY";
    navigate(`/search?busType=${busTypeForSearch}`);
  }

  const numberInputClass = isValidNumber == null
    ? "border-gray-300"
    : isValidNumber
      ? "border-green-500"
      : "border-red-500";

  return (
    <div className="min-h-screen p-4 bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Locations Card */}
        <div className="p-6 bg-[#f2eeff] rounded-2xl shadow-md">
          <div className="flex justify-center mb-6">
            <img src={searchIcon} alt="" className="w-24 rounded-full" />
          </div>
          <h2 className="text-center text-xl font-semibold text-purple-800 mb-6">
            Search Between Locations
          </h2>

          <select
            value={fromStation}
            onChange={e => setFromStation(e.target.value)}
            className="w-full px-4 py-3 mb-4 border rounded-lg"
          >
            <option value="">Select From*</option>
            {cityList.filter(c => c !== toStation).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <div className="flex justify-center mb-4">
            <button onClick={handleSwapLocations} className="p-2 rounded-full">
              <ArrowUpDown className="w-5 h-5 text-purple-400" />
            </button>
          </div>

          <select
            value={toStation}
            onChange={e => setToStation(e.target.value)}
            className="w-full px-4 py-3 mb-4 border rounded-lg"
          >
            <option value="">Select To*</option>
            {cityList.filter(c => c !== fromStation).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={busType}
            onChange={e => setBusType(e.target.value)}
            className="w-full px-4 py-3 mb-4 border rounded-lg bg-teal-300 text-white"
          >
            {busTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSearchLocations}
              disabled={!fromStation || !toStation}
              className={`w-1/2 py-3 text-white rounded-full ${
                fromStation && toStation ? "bg-purple-600" : "bg-gray-400"
              }`}
            >
              Search
            </button>
            <button
              onClick={handleClearLocations}
              className="w-1/2 py-3 bg-red-400 text-white rounded-full"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Service/Vehicle Card */}
        <div className="p-6 bg-[#f2eeff] rounded-2xl shadow-md">
          <div className="flex justify-center m-auto rounded-full h-[100px] w-[100px] bg-white mb-6">
            <img src={searchIcon2} alt="" className="rounded-full w-24" />
          </div>
          <h2 className="text-center text-xl font-semibold text-purple-800 mb-6">
            Search By <br /> Service/Vehicle
          </h2>

          <div className="flex gap-6 mb-4  mt-12 md:mt-0">
            <label className="flex items-center cursor-pointer ">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={searchType === "service"}
                onChange={() => { setSearchType("service"); handleClearService(); }}
              />
              <span className="ml-2">By Service No.</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={searchType === "vehicle"}
                onChange={() => { setSearchType("vehicle"); handleClearService(); }}
              />
              <span className="ml-2">By Vehicle No.</span>
            </label>
          </div>
          <br />

          <input 
            type="text"
            placeholder={
              searchType === "service"
                ? "Enter Service No.*"
                : "Enter Vehicle No.*"
            }
            value={serviceNumber}
            onChange={handleNumberChange}
            className={`w-full px-4 py-3 mb-4  rounded-lg border-2 ${numberInputClass}`}
          />

          <div className="text-center mb-6 mt-9">
            <p className="text-purple-600 text-sm">
              Don't know what is service number?
            </p>
            <button className="text-purple-700 font-medium text-sm hover:underline mt-2">
              Click here!
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSearchService}
              disabled={!isValidNumber}
              className={`w-1/2 py-3 text-white rounded-full ${
                isValidNumber ? "bg-purple-600" : "bg-gray-400"
              }`}
            >
              Search
            </button>
            <button
              onClick={handleClearService}
              className="w-1/2 py-3 bg-red-400 text-white rounded-full"
            >
              Clear
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
