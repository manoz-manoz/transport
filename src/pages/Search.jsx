import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RoleSelection from "../components/RoleSelection";

const trips = [
  // ---------- PALLEVELUGU ----------
  { serviceNo: "SRV0001/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "05:15", endTime: "06:10", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0002/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "07:00", endTime: "07:55", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0003/1", route: "GUNTUR - TENALI", depotName: "GUNTUR3", startTime: "08:30", endTime: "09:25", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0004/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "10:15", endTime: "11:10", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0005/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "12:00", endTime: "12:55", busType: "PALLEVELUGU" },

  { serviceNo: "SRV0006/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "06:30", endTime: "07:25", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0007/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "08:15", endTime: "09:10", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0008/1", route: "TENALI - GUNTUR", depotName: "TENALI3", startTime: "09:45", endTime: "10:40", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0009/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "11:30", endTime: "12:25", busType: "PALLEVELUGU" },
  { serviceNo: "SRV0010/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "13:15", endTime: "14:10", busType: "PALLEVELUGU" },

  // ---------- LUXURY ----------
  { serviceNo: "SRV0011/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "06:00", endTime: "06:55", busType: "LUXURY" },
  { serviceNo: "SRV0012/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "07:45", endTime: "08:40", busType: "LUXURY" },
  { serviceNo: "SRV0013/1", route: "GUNTUR - TENALI", depotName: "GUNTUR3", startTime: "09:15", endTime: "10:10", busType: "LUXURY" },
  { serviceNo: "SRV0014/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "11:00", endTime: "11:55", busType: "LUXURY" },
  { serviceNo: "SRV0015/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "12:45", endTime: "13:40", busType: "LUXURY" },

  { serviceNo: "SRV0016/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "07:15", endTime: "08:10", busType: "LUXURY" },
  { serviceNo: "SRV0017/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "09:00", endTime: "09:55", busType: "LUXURY" },
  { serviceNo: "SRV0018/1", route: "TENALI - GUNTUR", depotName: "TENALI3", startTime: "10:30", endTime: "11:25", busType: "LUXURY" },
  { serviceNo: "SRV0019/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "12:15", endTime: "13:10", busType: "LUXURY" },
  { serviceNo: "SRV0020/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "14:00", endTime: "14:55", busType: "LUXURY" },

  // ---------- EXPRESS ----------
  { serviceNo: "SRV0021/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "06:30", endTime: "07:20", busType: "EXPRESS" },
  { serviceNo: "SRV0022/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "08:00", endTime: "08:50", busType: "EXPRESS" },
  { serviceNo: "SRV0023/1", route: "GUNTUR - TENALI", depotName: "GUNTUR3", startTime: "09:30", endTime: "10:20", busType: "EXPRESS" },
  { serviceNo: "SRV0024/1", route: "GUNTUR - TENALI", depotName: "GUNTUR1", startTime: "11:15", endTime: "12:05", busType: "EXPRESS" },
  { serviceNo: "SRV0025/1", route: "GUNTUR - TENALI", depotName: "GUNTUR2", startTime: "13:00", endTime: "13:50", busType: "EXPRESS" },

  { serviceNo: "SRV0026/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "07:45", endTime: "08:35", busType: "EXPRESS" },
  { serviceNo: "SRV0027/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "09:15", endTime: "10:05", busType: "EXPRESS" },
  { serviceNo: "SRV0028/1", route: "TENALI - GUNTUR", depotName: "TENALI3", startTime: "10:45", endTime: "11:35", busType: "EXPRESS" },
  { serviceNo: "SRV0029/1", route: "TENALI - GUNTUR", depotName: "TENALI1", startTime: "12:30", endTime: "13:20", busType: "EXPRESS" },
  { serviceNo: "SRV0030/1", route: "TENALI - GUNTUR", depotName: "TENALI2", startTime: "14:15", endTime: "15:05", busType: "EXPRESS" }
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function normalizeRoute(route) {
  return route.trim().replace(/\s+/g, "").toUpperCase();
}

export default function Search() {
  const query = useQuery();
  const from = query.get("from") || "";
  const to = query.get("to") || "";
  const busTypeParam = query.get("busType") || "";

  useEffect(() => {
    console.log("From:", from);
    console.log("To:", to);
    console.log("Bus type:", busTypeParam);
  }, [from, to, busTypeParam]);

  const expectedRoute = normalizeRoute(`${from} - ${to}`);
  const expectedBusType = busTypeParam.trim().toUpperCase();

  const filteredTrips = trips.filter(trip => {
    const tripRoute = normalizeRoute(trip.route);
    const tripBusType = trip.busType ? trip.busType.trim().toUpperCase() : "";
    const routeMatches = tripRoute === expectedRoute;
    const busTypeMatches = !busTypeParam || tripBusType === expectedBusType;

    return routeMatches && busTypeMatches;
  });

  return (
    
<div>
<RoleSelection />
<div className="md:w-[90%] m-auto ">
        <div className="md:w-[90%] m-auto" style={{
            borderBottom: "1px dotted #ccc",
            padding: "15px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h1 className="text-center ">TRIP DETAILS</h1>
            <h1 className="text-center ">TRIP TIMINGS</h1>
            <h1 className="text-center hidden lg:block">TRIP Status</h1>
            <h1 className="text-center ">TRIP TYPE</h1>                    

        </div>
    <div className="md:w-[90%]  m-auto">
      {filteredTrips.length === 0 ? (
        <p>No trips found matching the search criteria.</p>
      ) : (
        filteredTrips.map((trip, i) => (
          <div key={i} style={{
            borderBottom: "1px dotted #ccc",
            padding: "15px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <strong>Service No :</strong> {trip.serviceNo}<br />
             {trip.route}<br />
              <strong>Depot Name:</strong> {trip.depotName}
            </div>
            <div>
              <div><strong>Departure:</strong> {trip.startTime}</div>
              <div><strong>Arrival:</strong> {trip.endTime}</div>
            </div>
            <div className="hidden lg:block" >-</div>
            <div className="flex flex-col gap-2">
            <button onClick={() => alert(`Clicked on ${trip.busType}`)}>{trip.busType}</button>
            <button className="bg-red-500 py-1 px-3 rounded-full">Track</button>
            </div>
          </div>
        ))
      )}
    </div>
     </div>
     </div>
  );
}
