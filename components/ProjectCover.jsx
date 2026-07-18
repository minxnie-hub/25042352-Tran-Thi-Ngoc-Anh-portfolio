const COVER_COPY = {
  '01': { word: 'Tệp tin', line: 'Thao tác cơ bản với tệp tin và thư mục', note: 'Nền tảng kỹ năng số' },
  '02': { word: 'Học thuật', line: 'Tìm kiếm và đánh giá thông tin', note: 'Nguồn tin · Độ tin cậy' },
  '03': { word: 'Prompt', line: 'Viết prompt hiệu quả cho tác vụ học tập', note: 'Cấu trúc · Thử nghiệm' },
  '04': { word: 'Cộng tác', line: 'Công cụ trực tuyến cho dự án nhóm', note: 'Tổ chức · Phối hợp' },
  '05': { word: 'Sáng tạo', line: 'AI tạo sinh và nội dung số', note: 'Ý tưởng · Biên tập' },
  '06': { word: 'Trách nhiệm', line: 'Sử dụng AI trong học tập và nghiên cứu', note: 'Minh bạch · Đạo đức' },
};

export default function ProjectCover({ project, variant = 'card' }) {
  const copy = COVER_COPY[project.number] || {
    word: project.shortTitle,
    line: project.title,
    note: project.tags.slice(0, 2).join(' · '),
  };

  return (
    <div
      className={`project-cover project-cover--${variant}`}
      style={{ '--cover-accent': project.accent }}
      role="img"
      aria-label={`Bìa thiết kế cho Bài ${project.number}: ${project.title}`}
    >
      <span className="project-cover__orb project-cover__orb--one" aria-hidden="true" />
      <span className="project-cover__orb project-cover__orb--two" aria-hidden="true" />
      <span className="project-cover__flare" aria-hidden="true" />
      <span className="project-cover__spark project-cover__spark--one" aria-hidden="true">✦</span>
      <span className="project-cover__spark project-cover__spark--two" aria-hidden="true">✦</span>
      <span className="project-cover__spark project-cover__spark--three" aria-hidden="true">✦</span>

      <div className="project-cover__topline">
        <span>Portfolio học tập</span>
        <span>2026</span>
      </div>

      <div className="project-cover__frame">
        <span className="project-cover__index">Bài {project.number}</span>
        <div className="project-cover__title">
          <strong>{copy.word}</strong>
          <p>{copy.line}</p>
        </div>
        <div className="project-cover__footer">
          <span>{copy.note}</span>
          <span>VNU1001_E252058</span>
        </div>
      </div>
    </div>
  );
}
