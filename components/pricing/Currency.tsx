import { DollarSign, Euro, IndianRupee, PoundSterling } from "lucide-react";

export default function Currency({
  locale = "US",
  width = 24,
  height = 24,
  rate = false,
  price = 0,
}: {
  locale: string;
  width: number;
  height: number;
  rate?: boolean;
  price?: number;
}) {
  console.log(locale);
  if (locale.includes("IN"))
    return (
      <div className="flex items-center gap-1">
        <IndianRupee width={width} height={height} />
        {rate ? price * 50 : ""}
      </div>
    );
  if (locale.includes("US"))
    return (
      <div className="flex items-center gap-1">
        <DollarSign width={width} height={height} />
        {rate ? price * 1 : ""}
      </div>
    );
  if (locale.includes("GB"))
    return (
      <div className="flex items-center gap-1">
        <PoundSterling width={width} height={height} />
        {rate ? price * 0.8 : ""}
      </div>
    );
  if (locale.includes("EU") || locale.includes("DE"))
    return (
      <div className="flex items-center gap-1">
        <Euro width={width} height={height} />
        {rate ? price * 0.85 : ""}
      </div>
    );
  return (
    <div className="flex items-center gap-1">
      <DollarSign width={width} height={height} />
      {rate ? price * 1 : ""}
    </div>
  );
}
