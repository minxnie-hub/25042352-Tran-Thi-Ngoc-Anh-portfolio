import Reveal from './Reveal';
import LightboxGallery from './LightboxGallery';

function SectionHeading({ title, index }) {
  return (
    <div className="detail-section__heading">
      <span>{String(index + 1).padStart(2, '0')}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function ProjectContent({ sections }) {
  return (
    <div className="detail-sections">
      {sections.map((section, index) => (
        <Reveal className="detail-section" key={`${section.title}-${index}`}><span id={section.anchor} className="anchor-target" aria-hidden="true" />
          <SectionHeading title={section.title} index={index} />

          {section.type === 'text' && (
            <div className="reading-copy">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          )}

          {section.type === 'bullets' && (
            <ul className="feature-list">
              {section.items.map((item, itemIndex) => (
                <li key={item}><span>{String(itemIndex + 1).padStart(2, '0')}</span><p>{item}</p></li>
              ))}
            </ul>
          )}

          {section.type === 'steps' && (
            <div className="steps-list">
              {section.items.map((item, stepIndex) => (
                <article className="step-block" key={item.title}>
                  <div className="step-block__copy">
                    <span>Bước {String(stepIndex + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <LightboxGallery images={item.images} altPrefix={`Minh chứng ${item.title}`} variant={item.images.length === 1 ? 'single' : 'grid'} />
                </article>
              ))}
            </div>
          )}

          {section.type === 'galleryGroup' && (
            <div className="gallery-group">
              <p className="gallery-group__intro">{section.description}</p>
              <LightboxGallery images={section.images} captions={section.captions} variant={section.images.length === 1 ? 'single' : 'grid'} />
            </div>
          )}

          {section.type === 'heroImage' && (
            <div className="hero-evidence">
              <LightboxGallery images={[section.image]} captions={[section.caption]} variant="hero" />
            </div>
          )}

          {section.type === 'table' && (
            <div className="table-scroll" role="region" aria-label={section.title} tabIndex="0">
              <table className="content-table">
                <thead><tr>{section.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
                <tbody>
                  {section.rows.map((row, rowIndex) => (
                    <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.type === 'references' && (
            <div className="references-list">
              <ol>{section.items.map((item) => <li key={item}>{item}</li>)}</ol>
              {section.note && <p className="section-note">{section.note}</p>}
            </div>
          )}

          {section.type === 'principles' && (
            <div className="principles-grid">
              {section.items.map(([name, description], itemIndex) => (
                <article key={name}>
                  <span>{String(itemIndex + 1).padStart(2, '0')}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          )}

          {section.type === 'quote' && (
            <blockquote className="big-quote">
              <span aria-hidden="true">✦</span>
              <p>{section.quote}</p>
            </blockquote>
          )}
        </Reveal>
      ))}
    </div>
  );
}
