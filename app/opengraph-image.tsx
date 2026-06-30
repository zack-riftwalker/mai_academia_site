import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#070B1A",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "#11D8FF",
          opacity: 0.15,
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          display: "flex",
          color: "#FFFFFF",
          fontSize: 88,
          fontWeight: 700,
        }}
      >
        Maya Academy
      </div>
      <div
        style={{
          display: "flex",
          color: "#11D8FF",
          fontSize: 36,
          fontWeight: 500,
          marginTop: 20,
        }}
      >
        مرجع پریمیوم اکانت‌ها و ابزارهای هوش مصنوعی
      </div>
    </div>,
    { ...size },
  );
}
