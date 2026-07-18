import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import ScrollProgress from '@/components/ScrollProgress';
import { projects } from '@/lib/projects';
import { SITE, asset } from '@/lib/site';

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
              <p className="home-hero__lead">{SITE.tagline}</p>
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
              <p className="section-kicker">01 · Giới thiệu</p>
              <h2>Tôi lưu lại hành trình học tập bằng ngôn ngữ, công nghệ và tư duy phản biện.</h2>
            </div>
            <p>
              Tôi là Trần Thị Ngọc Anh, sinh viên Khoa Ngôn ngữ và Văn hóa Hàn Quốc, Trường Đại học Ngoại ngữ - ĐHQGHN. Portfolio này ghi lại cách tôi tiếp cận công nghệ số, nghiên cứu học thuật và trí tuệ nhân tạo trong quá trình học tập.
            </p>
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

            <Reveal className="about-narrative">
              <span className="about-narrative__kicker">Góc nhìn cá nhân</span>
              <h3>Ngôn ngữ là điểm bắt đầu. Công nghệ mở rộng cách tôi tìm hiểu, cộng tác và sáng tạo.</h3>
              <p>
                Qua sáu bài tập, tôi từng bước rèn luyện kỹ năng quản lý dữ liệu, tìm kiếm nguồn học thuật, thiết kế prompt, phối hợp nhóm và sử dụng AI có trách nhiệm.
              </p>
              <div className="focus-list">
                <article>
                  <span>01</span>
                  <h4>Năng lực số</h4>
                  <p>Tôi tổ chức tệp tin, tài liệu và quy trình học tập theo một hệ thống rõ ràng.</p>
                </article>
                <article>
                  <span>02</span>
                  <h4>Tư duy học thuật</h4>
                  <p>Tôi tìm kiếm, đánh giá nguồn và trình bày thông tin theo cấu trúc mạch lạc.</p>
                </article>
                <article>
                  <span>03</span>
                  <h4>AI có trách nhiệm</h4>
                  <p>Tôi sử dụng AI như một công cụ hỗ trợ, đồng thời giữ sự minh bạch và chủ động.</p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="shell">
            <Reveal className="projects-section__heading">
              <div>
                <p className="section-kicker">02 · Dự án học tập</p>
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
            <Reveal className="reflection-section__copy">
              <p className="section-kicker">03 · Tổng kết</p>
              <h2>Tôi đã đi từ thao tác kỹ thuật đến tư duy sử dụng AI có trách nhiệm.</h2>
              <p>
                Sáu bài tập tạo thành một hành trình liền mạch của tôi: bắt đầu từ quản lý tệp, tiếp tục với tìm kiếm học thuật, thiết kế prompt, phối hợp nhóm, sáng tạo cùng AI và kết thúc bằng việc xác lập những nguyên tắc đạo đức cá nhân.
              </p>
              <div className="reflection-points">
                <article><span>01</span><h3>Chủ động</h3><p>Tôi tự tổ chức tài liệu, tiến độ và quy trình học tập.</p></article>
                <article><span>02</span><h3>Kiểm chứng</h3><p>Tôi không sử dụng thông tin khi chưa đánh giá nguồn và đối chiếu.</p></article>
                <article><span>03</span><h3>Minh bạch</h3><p>Tôi ghi nhận rõ vai trò của AI và phần đóng góp của bản thân.</p></article>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
