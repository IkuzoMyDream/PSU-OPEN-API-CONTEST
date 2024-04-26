import { Carousel, Radio } from "flowbite-react";
import { Bar, Radar } from "react-chartjs-2";

export default function StatusCarousel() {
  return (
    <div className="h-80">
      <Carousel style={{ border: "solid red", height: "500px" }}>
        <div className="h-auto" style={{ border: "solid red" }}>
          <Bar
            data={{
              labels: ["เทอม1", `เทอม2`],
              datasets: [{ label: "my score", data: [5, 10] }],
            }}
          />
        </div>
        <div className="h-auto" style={{ border: "solid red", width: "200px" }}>
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
