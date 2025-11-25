import { artPieces } from "./mock-art-data";

export default function ArtGallery() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>CSS Art Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {artPieces.map((art, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "#f9f9f9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                height: "150px",
                borderRadius: "8px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Contributors will place CSS art here */}
              <div style={art.previewStyle}></div>
            </div>

            <h3>{art.title}</h3>
            <p style={{ opacity: 0.7 }}>By {art.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
