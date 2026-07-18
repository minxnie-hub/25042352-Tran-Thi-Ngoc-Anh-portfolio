'use client';

import { useEffect, useState } from 'react';
import { asset } from '@/lib/site';

export default function LightboxGallery({ images, captions = [], altPrefix = 'Minh chứng', variant = 'grid' }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((value) => (value + 1) % images.length);
      if (event.key === 'ArrowLeft') setActive((value) => (value - 1 + images.length) % images.length);
    };
    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [active, images.length]);

  return (
    <>
      <div className={`evidence-gallery evidence-gallery--${variant}`}>
        {images.map((image, index) => (
          <figure className="evidence-card" key={`${image}-${index}`}>
            <button type="button" onClick={() => setActive(index)} aria-label={`Phóng to ${captions[index] || `${altPrefix} ${index + 1}`}`}>
              <img src={asset(image)} alt={captions[index] || `${altPrefix} ${index + 1}`} loading="lazy" />
            </button>
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {captions[index] || `${altPrefix} ${index + 1}`}
            </figcaption>
          </figure>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh minh chứng">
          <button className="lightbox__backdrop" type="button" onClick={() => setActive(null)} aria-label="Đóng ảnh" />
          <div className="lightbox__panel">
            <button className="lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Đóng">×</button>
            <img src={asset(images[active])} alt={captions[active] || `${altPrefix} ${active + 1}`} />
            <div className="lightbox__caption">
              <span>{active + 1} / {images.length}</span>
              <p>{captions[active] || `${altPrefix} ${active + 1}`}</p>
            </div>
            {images.length > 1 && (
              <div className="lightbox__controls">
                <button type="button" onClick={() => setActive((active - 1 + images.length) % images.length)} aria-label="Ảnh trước">←</button>
                <button type="button" onClick={() => setActive((active + 1) % images.length)} aria-label="Ảnh tiếp theo">→</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
