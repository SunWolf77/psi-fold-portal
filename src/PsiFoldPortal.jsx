import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockSpectralData = [
  { date: "Sept 1", flux: 5.2 },
  { date: "Sept 3", flux: 6.8 },
  { date: "Sept 5", flux: 7.3 },
  { date: "Sept 7", flux: 6.4 },
  { date: "Sept 9", flux: 8.1 },
  { date: "Sept 11", flux: 9.7 },
  { date: "Sept 13", flux: 11.3 },
  { date: "Sept 15", flux: 13.0 },
];

export default function PsiFoldPortal() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
        ψ-Fold Observation Portal 🌌
      </h1>
      <p style={{ textAlign: "center", marginBottom: "1rem" }}>
        Track the predicted harmonic resonance from comet 3I/ATLAS (430–480nm band, Sept 1–15).
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={mockSpectralData}>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 15]} />
          <Tooltip />
          <Area type="monotone" dataKey="flux" stroke="#3b82f6" fill="#93c5fd" />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center", marginTop: "1rem", fontStyle: "italic" }}>
        Hashtag your observations: <strong>#ψFoldWatch</strong> | <strong>#SUPTPredicts</strong>
      </p>
    </div>
  );
}
