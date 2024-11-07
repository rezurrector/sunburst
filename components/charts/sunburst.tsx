import React from "react"
import { ResponsiveSunburst } from "@nivo/sunburst"

const data = {
  name: "root",
  children: [
    {
      name: "Category A",
      children: [
        { name: "Subcategory A1", value: 100 },
        { name: "Subcategory A2", value: 50 },
      ],
    },
    {
      name: "Category B",
      children: [
        { name: "Subcategory B1", value: 80 },
        { name: "Subcategory B2", value: 120 },
      ],
    },
  ],
}

const SunburstChart = () => (
  <div style={{ height: 400 }}>
    <ResponsiveSunburst
      data={data}
      margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
      value="value"
      cornerRadius={2}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "nivo" }}
      childColor={{ from: "color", modifiers: [["brighter", 0.4]] }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ theme: "labels.text.fill" }}
    />
  </div>
)

export default SunburstChart
