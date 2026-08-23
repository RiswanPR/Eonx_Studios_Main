import { TechnicalGrid } from "./TechnicalGrid";
import { AmbientField } from "./AmbientField";
import { LightStreaks } from "./LightStreaks";
import { NoiseLayer } from "./NoiseLayer";
import { Vignette } from "./Vignette";

export function AtmosphereEngine() {
  return (
    <>
      <TechnicalGrid />
      <AmbientField />
      <LightStreaks />
      <NoiseLayer />
      <Vignette />
    </>
  );
}
