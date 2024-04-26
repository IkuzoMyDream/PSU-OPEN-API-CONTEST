import { Carousel, Radio } from "flowbite-react";
import { Bar, Radar } from "react-chartjs-2";

export default function StatusCarousel() {
  return (
    <div className="h-auto">
      <Carousel style={{ border: "solid red" }}>
        <div  className="h-auto">
          <Bar
            data={{
              labels: ["เทอม1", `เทอม2`],
              datasets: [{ label: "my score", data: [5, 10] }],
            }}
          />
        </div>
        <div  className="h-auto">
          <Radar
            data={{
              labels: ["เทอม1", `เทอม2`, "df", "dfg", "adf"],
              datasets: [{ label: "my score", data: [5, 10] }],
            }}
          />
        </div>
      </Carousel>
    </div>
  );
}
