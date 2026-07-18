import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import ScrollProgress from '@/components/ScrollProgress';
import { projects } from '@/lib/projects';
import { SITE, asset } from '@/lib/site';

const learningGoals = [
  {
    title: 'Chinh phục ngôn ngữ',
    text: 'Nâng cao trình độ tiếng Hàn và đạt chứng chỉ TOPIK theo đúng lộ trình đã hoạch định.',
  },
  {
    title: 'Vững vàng chuyên môn',
    text: 'Học tập và nắm vững các nền tảng kiến thức chuyên ngành, đồng thời tìm hiểu sâu sắc về văn hóa Hàn Quốc.',
  },
  {
    title: 'Kỷ luật cá nhân',
    text: 'Xây dựng và duy trì thói quen học tập chủ động, kỷ luật và đạt hiệu suất cao.',
  },
];

const personalGoals = [
  {
    title: 'Hoàn thiện kỹ năng mềm',
    text: 'Tích cực rèn luyện kỹ năng giao tiếp, làm việc nhóm, thuyết trình và quản lý thời gian hiệu quả.',
  },
  {
    title: 'Làm chủ công nghệ',
    text: 'Sử dụng thành thạo các công cụ số và nền tảng trí tuệ nhân tạo để tối ưu hóa việc học tập và công việc.',
  },
  {
    title: 'Tư duy mở',
    text: 'Không ngừng mở rộng hiểu biết, duy trì tư duy tích cực và chủ động hội nhập trong môi trường quốc tế.',
  },
];

const portfolioGoals = [
  {
    title: 'Hệ thống hóa',
    text: 'Là không gian lưu trữ và sắp xếp khoa học toàn bộ quá trình học tập, các dự án thực tế và thành tích cá nhân.',
  },
  {
    title: 'Khẳng định năng lực',
    text: 'Thể hiện rõ nét các kỹ năng số, năng lực chuyên môn và sự nỗ lực không ngừng của bản thân.',
  },
  {
    title: 'Kết nối cơ hội',
    text: 'Tạo ra một công cụ trực quan, tiện lợi để dễ dàng chia sẻ với giảng viên, nhà tuyển dụng hoặc các đối tác trong tương lai.',
  },
  {
    title: 'Đánh giá tiến độ',
    text: 'Dùng làm thước đo để theo dõi sự tiến bộ của chính mình và làm cơ sở vững chắc để phát triển đường dài.',
  },
];

const skillsLearned = [
  'Sử dụng thành thạo các công cụ số như Canva, Notion và Google Workspace để thiết kế và quản lý nội dung.',
  'Biết cách xây dựng bố cục Portfolio logic, đồng thời nâng cao kỹ năng thiết kế và tư duy thẩm mỹ.',
  'Rèn luyện kỹ năng tìm kiếm, chọn lọc và tổng hợp thông tin chuẩn xác.',
  'Cải thiện đáng kể kỹ năng quản lý thời gian và lập kế hoạch khi thực hiện dự án.',
];

const proudPoints = [
  'Tự hào hoàn thành một Portfolio khoa học, trực quan, phản ánh chân thực quá trình nỗ lực học tập của bản thân.',
  'Tự tin làm chủ các công cụ số, qua đó rèn luyện được tính kiên trì và cẩn thận.',
  'Tạo ra được một sản phẩm thực tế có thể tiếp tục cập nhật và sử dụng cho việc học tập, công việc sau này.',
];

const challenges = [
  'Mất khá nhiều thời gian ban đầu để căn chỉnh, sắp xếp bố cục sao cho vừa khoa học vừa thẩm mỹ.',
  'Phải tự tìm hiểu thêm nhiều kiến thức do chưa thành thạo một số công cụ thiết kế.',
  'Cần chỉnh sửa nhiều lần để đảm bảo tính chính xác, thống nhất và chuyên nghiệp cho sản phẩm cuối cùng.',
];

function StarList({ items }) {
  return (
    <ul className="star-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="top" className="ethereal-page">
        <section className="home-hero">
          <SiteHeader />
          <div className="ethereal-backdrop" aria-hidden="true">
            <span className="aurora aurora--one" />
            <span className="aurora aurora--two" />
            <span className="glass-orb glass-orb--one" />
            <span className="glass-orb glass-orb--two" />
            <span className="glass-orb glass-orb--three" />
            <span className="crystal crystal--one" />
            <span className="crystal crystal--two" />
            <span className="crystal crystal--three" />
            <span className="prism-flare prism-flare--one" />
            <span className="prism-flare prism-flare--two" />
          </div>
          <div className="home-hero__stars" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>

          <div className="home-hero__content shell">
            <div className="home-hero__copy">
              <p className="eyebrow"><span lang="ko">안녕하세요!</span> · Portfolio học tập 2026</p>
              <h1 aria-label="Trần Thị Ngọc Anh">
                <span>Trần Thị</span>
                <em>Ngọc Anh</em>
              </h1>
              <p className="home-hero__lead">Tôi ghi lại hành trình học tập bằng ngôn ngữ, công nghệ và một chút ánh sao.</p>
              <div className="home-hero__actions">
                <a className="button button--light" href="#projects">Khám phá 6 bài tập</a>
                <a className="text-link" href="#about">Đọc giới thiệu <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className="home-hero__portrait-wrap">
              <div className="home-hero__orbit" aria-hidden="true" />
              <figure className="home-hero__portrait">
                <img src={asset('/assets/profile/ngoc-anh.webp')} alt="Trần Thị Ngọc Anh trong trang phục Hanbok" />
              </figure>
              <div className="hero-note hero-note--one">25042352</div>
              <div className="hero-note hero-note--two">NMCNS &amp; AI</div>
              <div className="hero-profile-line">
                <span>Sinh viên Khoa Ngôn ngữ và Văn hóa Hàn Quốc</span>
                <small>ULIS · ĐHQGHN</small>
              </div>
              <span className="portrait-glint" aria-hidden="true" />
            </div>
          </div>

          <div className="home-hero__ticker" aria-label="Các chủ đề chính">
            <div>
              <span>Ngôn ngữ</span><i>✦</i><span>Văn hóa Hàn Quốc</span><i>✦</i><span>Công nghệ số</span><i>✦</i><span>AI có trách nhiệm</span><i>✦</i>
              <span>Ngôn ngữ</span><i>✦</i><span>Văn hóa Hàn Quốc</span><i>✦</i><span>Công nghệ số</span><i>✦</i><span>AI có trách nhiệm</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="about-section shell" id="about">
          <Reveal className="about-section__intro">
            <div>
              <p className="section-kicker">Giới thiệu</p>
              <h2>Ngôn ngữ là điểm bắt đầu, sáng tạo là cách tôi mở rộng góc nhìn.</h2>
            </div>
            <div className="about-intro-copy">
              <p>
                Xin chào, tôi là Trần Thị Ngọc Anh. Hiện tại, tôi đang là sinh viên chuyên ngành Ngôn ngữ và Văn hóa Hàn Quốc tại Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội (ULIS).
              </p>
              <p>
                Bên cạnh tình yêu dành cho ngôn ngữ, tôi là một người say mê sự sáng tạo và những góc nhìn đa chiều. Trong thời gian rảnh, tôi thường tìm niềm vui qua việc vẽ tranh và nghe nhạc.
              </p>
            </div>
          </Reveal>

          <div className="about-layout">
            <Reveal className="profile-sheet">
              <div className="about-card__label">Thông tin sinh viên</div>
              <p className="profile-sheet__intro">Thông tin cá nhân và lớp học phần của tôi.</p>
              <dl>
                <div><dt>Họ tên</dt><dd>{SITE.name}</dd></div>
                <div><dt>MSSV</dt><dd>{SITE.studentId}</dd></div>
                <div><dt>Lớp học phần</dt><dd>{SITE.courseCode}</dd></div>
                <div><dt>Khoa</dt><dd>{SITE.faculty}</dd></div>
                <div><dt>Trường</dt><dd>{SITE.university}</dd></div>
                <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
              </dl>
            </Reveal>

            <Reveal className="goals-panel">
              <div className="goals-panel__header">
                <span>Định hướng</span>
                <h3>Mục tiêu học tập và phát triển bản thân</h3>
              </div>
              <div className="goal-columns">
                <section>
                  <h4>Mục tiêu học tập</h4>
                  <div className="goal-list">
                    {learningGoals.map((item) => (
                      <article key={item.title}>
                        <span aria-hidden="true">✦</span>
                        <div><h5>{item.title}</h5><p>{item.text}</p></div>
                      </article>
                    ))}
                  </div>
                </section>
                <section>
                  <h4>Mục tiêu phát triển bản thân</h4>
                  <div className="goal-list">
                    {personalGoals.map((item) => (
                      <article key={item.title}>
                        <span aria-hidden="true">✦</span>
                        <div><h5>{item.title}</h5><p>{item.text}</p></div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </Reveal>
          </div>

          <Reveal className="portfolio-purpose">
            <div className="portfolio-purpose__heading">
              <span>Mục tiêu của Portfolio</span>
              <h3>Một không gian để hệ thống hóa quá trình học tập và kết nối những cơ hội trong tương lai.</h3>
            </div>
            <div className="portfolio-purpose__grid">
              {portfolioGoals.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="projects-section" id="projects">
          <div className="shell">
            <Reveal className="projects-section__heading">
              <div>
                <p className="section-kicker">Bài tập</p>
                <h2>06 bài tập đã hoàn thành</h2>
              </div>
              <p>Mỗi bài có một bìa riêng theo cùng hệ thống thị giác; trang chi tiết giữ đúng trình tự nội dung và đặt minh chứng ngay sau phần liên quan.</p>
            </Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal key={project.slug} className={index === 0 || index === 5 ? 'project-reveal project-reveal--wide' : 'project-reveal'}>
                  <ProjectCard project={project} featured={index === 0 || index === 5} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="reflection-section" id="reflection">
          <div className="reflection-section__texture" aria-hidden="true">
            <span className="reflection-orb" />
            <span className="reflection-shard reflection-shard--one" />
            <span className="reflection-shard reflection-shard--two" />
          </div>
          <div className="reflection-section__inner shell">
            <Reveal className="reflection-summary">
              <p className="section-kicker">Tổng kết</p>
              <div className="reflection-summary__lead">
                <h2>Nhìn lại quá trình học tập qua một sản phẩm trực quan và có hệ thống.</h2>
                <div className="reflection-lead__copy">
                  <span>Trải nghiệm và cảm nhận cá nhân</span>
                  <p>
                    Quá trình xây dựng Portfolio giúp tôi nhìn lại toàn bộ kiến thức và kỹ năng đã tích lũy từ môn học. Dù ban đầu gặp khó khăn trong việc sắp xếp bố cục nội dung, nhưng nhờ chủ động thực hành, tôi đã hoàn thiện một sản phẩm trực quan và dễ theo dõi. Đây là cơ hội tuyệt vời để tôi rèn luyện tính cẩn thận, sự sáng tạo và khả năng tự học.
                  </p>
                </div>
              </div>

              <div className="reflection-summary__grid">
                <article className="reflection-card reflection-card--skills">
                  <span className="reflection-card__label">Những kiến thức và kỹ năng đã học được</span>
                  <StarList items={skillsLearned} />
                </article>
                <article className="reflection-card">
                  <span className="reflection-card__label">Những điểm tâm đắc</span>
                  <StarList items={proudPoints} />
                </article>
                <article className="reflection-card">
                  <span className="reflection-card__label">Những thách thức đã gặp</span>
                  <StarList items={challenges} />
                </article>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
