import React from "react";

const data = [
  { fecha: "2 de diciembre (Semana 1)", actividad: "Artículo Rapifloc, aprobado por Tita Ochoa", resultado: "Publicado correctamente" },
  { fecha: "1–7 diciembre (Semana 1)", actividad: "Validación robots.txt en Search Console", resultado: "Salud del sitio: 76% → 77%" },
  { fecha: "1–7 diciembre (Semana 1)", actividad: "Keywords completadas", resultado: "1.153 productos (activos e inactivos)" },
  { fecha: "8–14 diciembre (Semana 2)", actividad: "Identificación errores href lang (975 errores)", resultado: "Corregidas y se envió correo el 21 de diciembre (SEMRUSH)" },
  { fecha: "15–21 diciembre (Semana 3)", actividad: "Identificación y corrección sitemap", resultado: "243 URLs corregidas" },
  { fecha: "17 dic", actividad: "Publicación artículo Joomla: Productos para alojamientos", resultado: "Aprobado por Tita Ochoa. Campaña MailChimp enero (diseño aprobado por María Botero)" },
  { fecha: "15–21 dic (Semana 3)", actividad: "Corrección sitemap", resultado: "243 URLs incorrectas con etiqueta noindex" },
  { fecha: "24–30 dic (Semana 4)", actividad: "Identificación en Search Console de 16.000 errores tag NOINDEX", resultado: "No es un error, etiquetas intencionales" },
  { fecha: "30 de diciembre", actividad: "Realizar Reporte Diciembre", resultado: "Documento actual como evidencia" },
  { fecha: "Noviembre a diciembre", actividad: "Validaciones de robots.txt", resultado: "Nov: 11.000 → 10.000 → 9.000. Dic: reducción mantenida. Salud del sitio en aumento: 79% (SEMRUSH)" },
  { fecha: "Envíos Mailchimp diciembre", actividad: "Tres envíos promocionales Rapifloc+Cloro", resultado: "1° dic: 114 aperturas (27.9%) → 4 dic: 100 (24.5%) → 23 dic: 24 (7.8%)" }
];

function ReporteSEO() {
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "#0056A6", textAlign: "center" }}>
        📊 Reporte SEO Técnico y Contenido – KIPCLIN (Diciembre 2025)
      </h1>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#0056A6", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Fecha / Semana</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actividad</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Resultado / Observación</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.fecha}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.actividad}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.resultado}</td>
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
    </div>
  );
}
export default ReporteSEO;