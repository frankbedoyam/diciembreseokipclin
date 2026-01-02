import React from "react";

const data = [
  { fecha: "2 de diciembre (Semana 1)", actividad: "Artículo Rapifloc, aprobado por Tita Ochoa", resultado: "Publicado correctamente", kpi: "21 visitas" },
  { fecha: "1–7 diciembre (Semana 1)", actividad: "Validación robots.txt en Search Console", resultado: "Salud del sitio: 76% → 77%", kpi: "Elevar porcentaje de salud del sitio en 1%" },
  { fecha: "1–7 diciembre (Semana 1)", actividad: "Keywords completadas", resultado: "1.153 productos (activos e inactivos)", kpi: "El rendimiento del tráfico de www.kipclin.com ha mejorado entre nov 2025 y 31 dic 2025, con un aumento de la visibilidad del 9.1 %. (SEMRUSH)" },
  { fecha: "8–14 diciembre (Semana 2)", actividad: "Identificación errores href lang (975 errores)", resultado: "Corregidas y se envió correo el 21 de diciembre (SEMRUSH)", kpi: "Elevar porcentaje de salud del sitio en 1%" },
  { fecha: "15–21 diciembre (Semana 3)", actividad: "Identificación y corrección sitemap", resultado: "243 URLs corregidas", kpi: "(Aplica en correcciones)" },
  { fecha: "17 dic", actividad: "Publicación artículo Joomla: Cuando la limpieza vale más que una buena vista", resultado: "Aprobado por Tita Ochoa. Campaña MailChimp enero (diseño aprobado por María Botero)", kpi: "17 visitas" },
  { fecha: "15–21 dic (Semana 3)", actividad: "Corrección sitemap", resultado: "243 URLs incorrectas con etiqueta noindex", kpi: "Elevar porcentaje de salud del sitio en 1%" },
  { fecha: "24–30 dic (Semana 4)", actividad: "Identificación en Search Console de 16.000 errores tag NOINDEX", resultado: "No es un error, etiquetas intencionales", kpi: "No aplica" },
  { fecha: "30 de diciembre", actividad: "Realizar Reporte Diciembre", resultado: "Documento actual como evidencia", kpi: "No aplica" },
  { fecha: "Noviembre a diciembre", actividad: "Validaciones de robots.txt", resultado: "Nov: 11.000 → 10.000 → 9.000. Dic: reducción mantenida. Salud del sitio en aumento: 79% (SEMRUSH)", kpi: "Elevar porcentaje de salud del sitio en 3% en 1 mes" },
  { fecha: "Envíos Mailchimp diciembre", actividad: "Tres envíos promocionales Rapifloc+Cloro", resultado: "1° dic: 114 aperturas (27.9%) → 4 dic: 100 aperturas (24.5%) → 23 dic: 24 aperturas (7.8%)", kpi: "238 aperturas" }
];

function ReporteSEO() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div style={{ margin: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#0056A6", margin: 0 }}>
          📊 Reporte SEO Técnico y Contenido – KIPCLIN (Diciembre 2025)
        </h1>
        <button 
          onClick={handleDownloadPDF}
          style={{
            backgroundColor: "#0056A6",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
          className="no-print"
        >
          📥 DESCARGAR PDF
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#0056A6", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", width: "15%" }}>Fecha / Semana</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", width: "25%" }}>Actividad</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", width: "35%" }}>Resultado / Observación</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", width: "25%" }}>KPI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.fecha}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.actividad}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.resultado}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", color: "#666", fontStyle: "italic" }}>
                {row.kpi || "Pendiente"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "10px", 
        marginTop: "40px" 
      }}>
        <img src="/images/seo1.png" alt="SEO 1" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="/images/seo2.png" alt="SEO 2" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="/images/seo3.png" alt="SEO 3" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="/images/seo4.png" alt="SEO 4" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="/images/seo5.png" alt="SEO 5" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="/images/seo6.png" alt="SEO 6" style={{ width: "100%", borderRadius: "8px" }} />
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            margin: 0;
            padding: 20px;
          }
          table {
            page-break-inside: auto;
          }
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
          img {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}

export default ReporteSEO;