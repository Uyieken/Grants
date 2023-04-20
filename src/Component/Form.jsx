import React, { useEffect, useState } from "react";
import "./Form.css";
import { Card, Grid } from "@mui/material";

function Form() {
  const activities = [
    {
      id: "1",
      name: "Furniture and Equipment",
    },
    {
      id: "2",
      name: "Supplies",
    },
    {
      id: "3",
      name: "Travel",
    },
    {
      id: "4",
      name: "Other Progreamming Costs",
    },
    {
      id: "5",
      name: "Trainings",
    },
    {
      id: "6",
      name: "Meetings",
    },
    {
      id: "7",
      name: "Operational Cost",
    },
    {
      id: "8",
      name: "Contractual",
    },
    {
      id: "9",
      name: "Community Testing",
    },
  ];

  const activity = [
    { id: "1", actid: "1", name: "Furniture and Equipment" },
    { id: "2", actid: "2", name: "Laboratory Supplies" },
    { id: "3", actid: "2", name: "General Office Supplies" },
    { id: "4", actid: "2", name: "Other Supplies" },
    { id: "5", actid: "3", name: "Vehicle Fuel" },
    { id: "6", actid: "3", name: "Car Hire" },
    { id: "7", actid: "3", name: "Local travel" },
    { id: "8", actid: "3", name: "Joint Supervisory Visit (CCFN & GON)" },
    { id: "9", actid: "3", name: "Air Ticket" },
    { id: "10", actid: "3", name: "Per Diem" },
    { id: "11", actid: "4", name: "Programing Cost" },
    { id: "13", actid: "5", name: "Step-down Trainings" },
    { id: "14", actid: "6", name: "ART Pickup sites cluster meeting" },
    { id: "15", actid: "6", name: "State Quarterly M&E Data Validation" },
    { id: "16", actid: "6", name: "Quarterly Meeting with Data Clerks" },
    { id: "17", actid: "6", name: "Referral Coordination Meeting" },
    { id: "18", actid: "6", name: "ART Surge Sites Review Meeting" },
    { id: "19", actid: "6", name: "ART Surge Consortium meeting" },
    { id: "20", actid: "6", name: "LMCU/PSM Meeting" },
    { id: "21", actid: "6", name: "State HIV Stakeholders Meeting" },
    { id: "22", actid: "6", name: "Quartely Meetings" },
    { id: "23", actid: "6", name: "Monthly Meetings" },
    { id: "24", actid: "7", name: "Facilities Maintenance & Repairs" },
    { id: "25", actid: "7", name: "Computer Maintenance/Repair" },
    { id: "26", actid: "7", name: "Vehicles Maintenance & Repairs" },
    { id: "27", actid: "7", name: "Postage & Courier Services" },
    { id: "28", actid: "7", name: "Bank Charges" },
    { id: "29", actid: "7", name: "Electricty Bill" },
    { id: "30", actid: "7", name: "Water Rate" },
    { id: "31", actid: "7", name: "Waste Management" },
    { id: "32", actid: "7", name: "Internet Subscription" },
    { id: "33", actid: "7", name: "Generator Diesel & Maintenance" },
    {
      id: "34",
      actid: "8",
      name: "Senior Assistant Monitoring and Evaluation",
    },
    { id: "35", actid: "8", name: "Care and Treatment Associates" },
    { id: "36", actid: "8", name: "Senior Assistant Care & Treatment" },
    { id: "37", actid: "8", name: "HTS Assistants" },
    { id: "38", actid: "8", name: "Data Management Clerks" },
    { id: "39", actid: "8", name: "Tracking and Retention Assistant" },
    { id: "40", actid: "8", name: "Viral Load Monitoring Assistants" },
    { id: "41", actid: "8", name: "ART Nurse/Adherence Counselor" },
    { id: "42", actid: "8", name: "Pharmacy/Pharmacy Techinician" },
    { id: "43", actid: "8", name: "Laboratory Scientist/Technician" },
    { id: "44", actid: "8", name: "Lay adherence counselor" },
    { id: "45", actid: "8", name: "Other Health care workers" },
    { id: "46", actid: "8", name: "Office Staff" },
    { id: "47", actid: "8", name: "Finance Staff" },
    { id: "48", actid: "8", name: "COOUTH LAB Staff" },
    { id: "49", actid: "8", name: "ECHO Activities- Internet Subscription" },
    { id: "50", actid: "8", name: "Recharge card for tracking and home visit" },
    { id: "51", actid: "8", name: "Viral load incentives/Logistic" },
    { id: "52", actid: "8", name: "viral load uptake" },
    { id: "53", actid: "8", name: "Facility with Best Viral Suppression Rate" },
    { id: "54", actid: "8", name: "Best patient retention (TX Net New)" },
    { id: "55", actid: "8", name: "Best Surge Facility Team in the State" },
    { id: "56", actid: "8", name: "Best Echo facility" },
    { id: "57", actid: "8", name: "Printing/Production of PMM tools" },
    { id: "58", actid: "8", name: "Service Delivery Facility Refitting" },
    { id: "59", actid: "8", name: "Drug Refill/Delivery" },
    { id: "60", actid: "8", name: "X-Ray Cost" },
    { id: "61", actid: "8", name: "OTZ Club activities" },
    { id: "62", actid: "8", name: "Additional Communication Support" },
    {
      id: "63",
      actid: "8",
      name: "HIV Postive identification and linkage incentives( Spokes)",
    },
    { id: "64", actid: "8", name: "New service delivery model" },
    { id: "65", actid: "9", name: "Community testers stipends" },
    { id: "66", actid: "9", name: "Incentive for Comm Testing" },
    { id: "67", actid: "9", name: "Operational Cost for 4 CBOs" },
    { id: "68", actid: "9", name: "Incentive for CBO Testing" },
    { id: "69", actid: "9", name: "Data Entry Clerk" },
    { id: "70", actid: "9", name: "Integrated Health testing commodities" },
    { id: "71", actid: "9", name: "HTS Consumables" },
  ];

  const quarter = [
    { id: "1", name: "Quarter 1" },
    { id: "2", name: "Quarter 2" },
    { id: "3", name: "Quarter 3" },
    { id: "4", name: "Quarter 4" },
  ];

  const month = [
    { id: "1", quartID: "1", name: "January" },
    { id: "2", quartID: "1", name: "Febuary" },
    { id: "3", quartID: "1", name: "March" },
    { id: "4", quartID: "2", name: "April" },
    { id: "5", quartID: "2", name: "May" },
    { id: "6", quartID: "2", name: "June" },
    { id: "7", quartID: "3", name: "July" },
    { id: "8", quartID: "3", name: "August" },
    { id: "9", quartID: "3", name: "September" },
    { id: "10", quartID: "4", name: "October" },
    { id: "11", quartID: "4", name: "November" },
    { id: "12", quartID: "4", name: "December" },
  ];

  const [act, setact] = useState([]);
  const [activ, setactiv] = useState([]);

  const [quart, setquart] = useState([]);
  const [mon, setmon] = useState([]);

  useEffect(() => {
    setquart(quarter);
  }, []);

  useEffect(() => {
    setact(activities);
  }, []);
  const handleact = (id) => {
    const dt = activity.filter((x) => x.actid === id);
    setactiv(dt);
  };
  return (
    <div>
      <form action="results.html" method="GET">
        <Grid container>
          <Card>
            <select
              id="ddlactivities"
              className="form-control"
              onChange={(e) => handleact(e.target.value)}
            >
              <option value="0">Select activities</option>
              {act && act !== undefined
                ? act.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Country"}
            </select>
            <br />
            <select id="ddlactivity" className="form-control">
              <option value="0">Select item</option>
              {activ && activ !== undefined
                ? activ.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Country"}
            </select>
            <br />
            <select></select>
            <br />
            <select></select>
            <br />
            <select></select>
          </Card>
        </Grid>
      </form>
    </div>
  );
}

export default Form;
