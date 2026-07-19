export const projects = [
  {
    number: '01',
    slug: 'tep-tin-va-thu-muc',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    shortTitle: 'Tệp tin & thư mục',
    summary: 'Thực hành trọn vẹn quy trình tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu trên Windows.',
    document: '/documents/bai-1.pdf',
    accent: '#7096D1',
    tags: ['Windows', 'File Explorer', 'Kỹ năng số'],
    intro: 'Bài thực hành đầu tiên tập trung vào những thao tác nền tảng nhất khi làm việc với dữ liệu. Tôi thực hiện từng bước trên File Explorer và lưu lại ảnh minh chứng theo đúng thứ tự.',
    sections: [
      {
        type: 'text',
        title: 'Mục tiêu thực hành',
        paragraphs: [
          'Làm quen với cấu trúc ổ đĩa, thư mục và tệp tin; đồng thời phân biệt rõ Copy, Cut, Delete và Restore trong quá trình quản lý dữ liệu.',
          'Toàn bộ thao tác được thực hiện trên Windows, với thư mục thực hành mang tên cá nhân để dễ kiểm tra và đối chiếu.'
        ]
      },
      {
        type: 'steps',
        title: 'Bài làm theo từng bước',
        items: [
          { title: 'Mở File Explorer', text: 'Khởi động trình quản lý tệp bằng tổ hợp Windows + E hoặc biểu tượng thư mục trên thanh tác vụ.', images: ['/assets/projects/1/img-000.png'] },
          { title: 'Chọn vị trí lưu', text: 'Truy cập This PC và chọn ổ D: làm không gian thực hành, tách khỏi ổ hệ thống.', images: ['/assets/projects/1/img-001.png'] },
          { title: 'Tạo thư mục cá nhân', text: 'Dùng lệnh New → Folder và đặt tên thư mục theo họ tên sinh viên.', images: ['/assets/projects/1/img-002.png'] },
          { title: 'Mở thư mục vừa tạo', text: 'Kiểm tra thư mục đã xuất hiện đúng vị trí rồi mở để tiếp tục thao tác.', images: ['/assets/projects/1/img-003.png'] },
          { title: 'Tạo tệp văn bản', text: 'Tạo một Text Document mới, đặt tên GhiChu.txt và xác nhận tên tệp.', images: ['/assets/projects/1/img-004.png', '/assets/projects/1/img-005.png'] },
          { title: 'Đổi tên tệp', text: 'Sử dụng Rename để đổi GhiChu.txt thành GhiChuQuanTrong.txt.', images: ['/assets/projects/1/img-006.png', '/assets/projects/1/img-007.png'] },
          { title: 'Tạo thư mục con', text: 'Tạo thư mục TaiLieu bên trong thư mục thực hành để tổ chức dữ liệu theo cấp.', images: ['/assets/projects/1/img-008.png'] },
          { title: 'Sao chép tệp', text: 'Copy tệp GhiChuQuanTrong.txt và Paste vào thư mục TaiLieu, giữ lại cả bản gốc lẫn bản sao.', images: ['/assets/projects/1/img-009.png', '/assets/projects/1/img-010.png', '/assets/projects/1/img-011.png'] },
          { title: 'Di chuyển tệp', text: 'Tạo DiChuyen.txt, dùng Cut rồi Paste vào TaiLieu để minh họa sự khác biệt giữa sao chép và di chuyển.', images: ['/assets/projects/1/img-012.png', '/assets/projects/1/img-013.png', '/assets/projects/1/img-014.png', '/assets/projects/1/img-015.png', '/assets/projects/1/img-016.png', '/assets/projects/1/img-017.png'] },
          { title: 'Xóa vào Thùng rác', text: 'Delete GhiChuQuanTrong.txt để tệp được chuyển vào Recycle Bin và vẫn có khả năng phục hồi.', images: ['/assets/projects/1/img-018.png'] },
          { title: 'Xóa vĩnh viễn', text: 'Dùng Shift + Delete với DiChuyen.txt, đọc cảnh báo và xác nhận thao tác không qua Thùng rác.', images: ['/assets/projects/1/img-019.png'] },
          { title: 'Khôi phục tệp', text: 'Mở Recycle Bin, tìm đúng tệp đã xóa và chọn Restore để đưa tệp trở lại vị trí ban đầu.', images: ['/assets/projects/1/img-020.png'] }
        ]
      },
      {
        type: 'text',
        title: 'Kết quả và cảm nhận',
        paragraphs: [
          'Bài thực hành giúp tôi hình thành quy trình quản lý dữ liệu có trật tự và hiểu rõ hậu quả của từng thao tác xóa.',
          'Điểm quan trọng nhất là phân biệt được Copy với Cut, đồng thời biết khi nào dữ liệu còn có thể khôi phục và khi nào bị xóa vĩnh viễn.'
        ]
      }
    ]
  },
  {
    number: '02',
    slug: 'tim-kiem-thong-tin-hoc-thuat',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    shortTitle: 'Thông tin học thuật',
    summary: 'Khảo sát tác động của Làn sóng Hallyu tới động lực học tiếng Hàn của sinh viên Việt Nam qua nhiều nhóm nguồn.',
    document: '/documents/bai-2.pdf',
    accent: '#334EAC',
    tags: ['Hallyu', 'Nghiên cứu', 'Harvard'],
    intro: 'Đề tài kết nối trực tiếp với ngành học của tôi: Ngôn ngữ và Văn hóa Hàn Quốc. Bài báo cáo tập trung vào việc xây dựng phạm vi tìm kiếm, phân nhóm tài liệu và đánh giá độ tin cậy của từng loại nguồn.',
    sections: [
      {
        type: 'text',
        title: 'Chủ đề và lý do lựa chọn',
        paragraphs: [
          'Chủ đề nghiên cứu là tác động của Làn sóng Hallyu tới xu hướng và động lực học tiếng Hàn của sinh viên Việt Nam hiện nay.',
          'Bài viết xem Hallyu không chỉ là một trào lưu giải trí mà còn là biểu hiện của quyền lực mềm. Trọng tâm phân tích nằm ở ranh giới giữa hứng thú nhất thời với K-pop, K-drama và động lực học ngôn ngữ bền vững gắn với định hướng nghề nghiệp.'
        ]
      },
      {
        type: 'bullets',
        title: 'Phạm vi tìm kiếm',
        items: [
          'Nội dung: lý thuyết động lực học ngôn ngữ, sự lan tỏa của Hallyu tại Đông Nam Á và các khảo sát về người học tiếng Hàn.',
          'Thời gian: ưu tiên tài liệu từ năm 2019 trở lại đây để phản ánh xu hướng của thế hệ Gen Z.',
          'Ngôn ngữ: kết hợp tài liệu tiếng Việt, tiếng Anh và tiếng Hàn.',
          'Nền tảng: Google Scholar, thư viện điện tử VNU-LIC, tạp chí chuyên ngành, sách, luận văn và nguồn mở chính thống.'
        ]
      },
      {
        type: 'table',
        title: 'Đánh giá các nhóm nguồn',
        columns: ['Nhóm nguồn', 'Cơ sở đánh giá', 'Ưu điểm', 'Hạn chế'],
        rows: [
          ['Cơ sở dữ liệu & tạp chí', 'Tác giả chuyên môn, phản biện học thuật, phương pháp nghiên cứu minh bạch.', 'Độ chính xác cao; số liệu thực tiễn; lập luận có căn cứ.', 'Dung lượng bài báo có hạn nên tổng quan lịch sử đôi khi chưa bao quát.'],
          ['Sách chuyên khảo', 'Tác giả uy tín, nhà xuất bản chính thống, tiếp cận hệ thống và lịch sử.', 'Khung lý thuyết vững; phân tích sâu về quyền lực mềm và tiếp biến văn hóa.', 'Chu kỳ xuất bản chậm, khó cập nhật nhanh các xu hướng mới.'],
          ['Luận văn / luận án', 'Được bảo vệ trước hội đồng, mô tả phương pháp và quy trình tương đối chi tiết.', 'Đi sâu vào nhóm đối tượng cụ thể, gần với bối cảnh sinh viên.', 'Tính khái quát và tầm ảnh hưởng thường thấp hơn sách hoặc tạp chí lớn.'],
          ['Nguồn mở chính thống', 'Trang của cơ quan nhà nước hoặc tổ chức quốc gia, không phải blog cá nhân.', 'Cập nhật nhanh; có số liệu vĩ mô và thông tin chính sách.', 'Thiếu phân tích chuyên sâu về tâm lý giáo dục và phương pháp giảng dạy.']
        ]
      },
      {
        type: 'references',
        title: 'Danh mục tài liệu trong bài nộp',
        items: [
          'Bộ Văn hóa, Thể thao và Du lịch Việt Nam (2023), Bài học từ quảng bá văn hóa của Hàn Quốc.',
          'Hoàng, T. M. (2023), “Khảo sát nhu cầu học tiếng Hàn của người học tại các trung tâm ngoại ngữ”, Tạp chí Giáo dục.',
          'Kim, J. (2021), “The Hallyu Wave and Korean Language Education Abroad”, Journal of Korean Language Education.',
          'Korea.net (2023), Các ảnh hưởng tích cực từ làn sóng Hallyu đến văn hóa của thế hệ trẻ hiện đại.',
          'Lê, T. C. (2024), “Giải pháp nâng cao hiệu quả giảng dạy văn hóa Hàn Quốc thông qua phương tiện truyền thông đại chúng”.',
          'Lee, S. & Park, H. (2020), “K-Pop motivation in foreign language learning contexts”, Modern Language Journal.',
          'Nguyễn, T. A. (2022), “Động lực học tiếng Hàn của sinh viên khối ngành ngôn ngữ tại Hà Nội”.',
          'Phạm, T. K. O. (2022), Ảnh hưởng của văn hóa đại chúng Hàn Quốc đến định hướng nghề nghiệp của sinh viên ngôn ngữ.',
          'Phạm, T. T. (2024), Tác động của làn sóng Hallyu đến giới trẻ Việt Nam.',
          'Shim, D. (2020), Media and Cultural Transformation in Asia.',
          'Trần, V. B. (2023), “Sự lan tỏa của làn sóng Hallyu và tác động đến nhận thức văn hóa của giới trẻ Việt Nam”.',
          'Vũ, D. H. (2019), Làn sóng Hallyu và Ngoại giao văn hóa Hàn Quốc.'
        ],
        note: 'Danh mục trên được trình bày lại từ báo cáo gốc của sinh viên.'
      },
      {
        type: 'text',
        title: 'Kết quả và cảm nhận',
        paragraphs: [
          'Qua bài tập, tôi rèn được thói quen không dừng ở việc “tìm thấy” thông tin mà còn phải kiểm tra tác giả, cơ quan xuất bản, phương pháp, mức độ cập nhật và khả năng khái quát.',
          'Đề tài cũng cho thấy văn hóa đại chúng có thể trở thành điểm khởi đầu tích cực, nhưng động lực học tập bền vững vẫn cần mục tiêu, phương pháp và định hướng nghề nghiệp rõ ràng.'
        ]
      }
    ]
  },
  {
    number: '03',
    slug: 'toi-uu-prompt-hoc-tap',
    title: 'Tối ưu hóa prompt trong các tác vụ học tập',
    shortTitle: 'Prompt học tập',
    summary: 'So sánh prompt cơ bản, cải tiến và nâng cao qua ba tác vụ: tóm tắt, giải thích và tạo câu hỏi ôn tập.',
    document: '/documents/bai-3.pdf',
    accent: '#7AB4F9',
    tags: ['Prompt engineering', 'AI', 'Tư duy phản biện'],
    intro: 'Tôi thử nghiệm ba cấp độ prompt trên ba loại nhiệm vụ học tập khác nhau để quan sát cách ngữ cảnh, vai trò và định dạng đầu ra ảnh hưởng đến chất lượng câu trả lời.',
    sections: [
      {
        type: 'text',
        title: 'Ba tác vụ thử nghiệm',
        paragraphs: [
          'Tác vụ 1: tóm tắt tài liệu “The importance of children’s play”.',
          'Tác vụ 2: giải thích quy luật Cung - Cầu trong Kinh tế vi mô.',
          'Tác vụ 3: tạo bộ câu hỏi ôn tập Triết học Mác - Lênin về Vật chất và Ý thức.'
        ]
      },
      {
        type: 'galleryGroup',
        title: 'Tác vụ 1 · Tóm tắt tài liệu học thuật',
        description: 'Từ yêu cầu ngắn, bài thử dần bổ sung đối tượng người đọc, cấu trúc tóm tắt, vai trò chuyên gia và tiêu chí đánh giá.',
        images: ['/assets/projects/3/img-001.png', '/assets/projects/3/img-003.png', '/assets/projects/3/img-004.png', '/assets/projects/3/img-005.png'],
        captions: ['Prompt cơ bản', 'Prompt cải tiến', 'Kết quả có cấu trúc', 'Phiên bản nâng cao']
      },
      {
        type: 'galleryGroup',
        title: 'Tác vụ 2 · Giải thích quy luật Cung - Cầu',
        description: 'Prompt cải tiến yêu cầu ví dụ và bảng; prompt nâng cao gán vai trò giảng viên, yêu cầu giải thích theo tiến trình và liên hệ cân bằng thị trường.',
        images: ['/assets/projects/3/img-006.png', '/assets/projects/3/img-007.png', '/assets/projects/3/img-009.png', '/assets/projects/3/img-010.png'],
        captions: ['Khái niệm nền tảng', 'Cung - Cầu và cân bằng', 'Ví dụ minh họa', 'Bảng tổng kết']
      },
      {
        type: 'galleryGroup',
        title: 'Tác vụ 3 · Bộ câu hỏi ôn tập',
        description: 'Bộ câu hỏi được nâng cấp từ câu hỏi ghi nhớ sang câu hỏi đa dạng mức độ, có đáp án và tình huống vận dụng.',
        images: ['/assets/projects/3/img-011.png', '/assets/projects/3/img-012.png', '/assets/projects/3/img-013.png', '/assets/projects/3/img-014.png', '/assets/projects/3/img-015.png', '/assets/projects/3/img-016.png', '/assets/projects/3/img-017.png'],
        captions: ['Prompt cơ bản', 'Câu hỏi phân loại', 'Câu hỏi vận dụng', 'Thử nghiệm trên biểu mẫu', 'Đáp án và phản hồi', 'Phiên bản nâng cao', 'Kết quả hoàn chỉnh']
      },
      {
        type: 'table',
        title: 'So sánh ba cấp độ prompt',
        columns: ['Tác vụ', 'Cơ bản', 'Cải tiến', 'Nâng cao'],
        rows: [
          ['Tóm tắt', 'Ngắn và thiếu ngữ cảnh.', 'Có cấu trúc, chỉ rõ yêu cầu.', 'Gán vai trò chuyên gia và yêu cầu lập luận theo trình tự.'],
          ['Giải thích', 'Giải thích chung chung.', 'Bổ sung ví dụ minh họa.', 'Kết hợp vai trò chuyên gia và suy luận từng bước.'],
          ['Ôn tập', 'Chủ yếu kiểm tra trí nhớ.', 'Đa dạng dạng câu hỏi, có đáp án.', 'Đưa vào câu hỏi tư duy, tình huống và ví dụ mẫu.']
        ]
      },
      {
        type: 'principles',
        title: 'Năm nguyên tắc rút ra',
        items: [
          ['Role', 'Gán vai trò cụ thể để định hình góc nhìn và mức độ chuyên môn.'],
          ['Context', 'Cung cấp tài liệu nền, mục tiêu và đối tượng người đọc.'],
          ['Reasoning', 'Yêu cầu phân tích theo bước để tăng tính logic và khả năng kiểm tra.'],
          ['Output format', 'Chỉ định rõ dạng bảng, danh sách, đoạn văn hoặc cấu trúc học thuật.'],
          ['Few-shot', 'Đưa một vài ví dụ mẫu để AI bám đúng khuôn đầu ra mong muốn.']
        ]
      }
    ]
  },
  {
    number: '04',
    slug: 'hop-tac-truc-tuyen',
    title: 'Ứng dụng công cụ hợp tác trực tuyến trong dự án nhóm',
    shortTitle: 'Hợp tác trực tuyến',
    summary: 'Kết hợp Trello, Google Drive, Google Docs và Discord để điều phối bài thuyết trình nhóm môn Triết học.',
    document: '/documents/bai-4.pdf',
    accent: '#6DD3F7',
    tags: ['Trello', 'Google Workspace', 'Discord'],
    intro: 'Trong dự án thuyết trình về “Vật chất và Ý thức”, tôi giữ vai trò thành viên cốt lõi, thiết lập không gian làm việc, theo dõi tiến độ và kết nối thông tin giữa các thành viên.',
    sections: [
      {
        type: 'text',
        title: 'Vai trò cá nhân',
        paragraphs: [
          'Tôi chịu trách nhiệm tổ chức hệ thống công cụ chung, chuẩn hóa cách lưu trữ tài liệu và duy trì luồng trao đổi để nhóm hoàn thành bài đúng hạn.',
          'Mục tiêu không chỉ là sử dụng nhiều công cụ, mà là phân vai rõ cho từng nền tảng để tránh trùng lặp và thất lạc thông tin.'
        ]
      },
      {
        type: 'galleryGroup',
        title: 'Trello · Quản lý nhiệm vụ',
        description: 'Board được chia theo trạng thái công việc; thẻ có nhãn ưu tiên, mô tả và deadline để theo dõi tiến độ.',
        images: ['/assets/projects/4/img-000.png', '/assets/projects/4/img-002.png'],
        captions: ['Không gian quản lý chung', 'Cập nhật trạng thái công việc']
      },
      {
        type: 'galleryGroup',
        title: 'Google Drive & Google Docs · Tài nguyên cộng tác',
        description: 'Drive được tổ chức theo cây thư mục; tệp áp dụng quy tắc YYMMDD_Ten_tai_lieu_v01. Google Docs dùng bình luận để thống nhất trước các chỉnh sửa lớn.',
        images: ['/assets/projects/4/img-004.png', '/assets/projects/4/img-006.png', '/assets/projects/4/img-008.png', '/assets/projects/4/img-010.png'],
        captions: ['Cấu trúc thư mục', 'Quyền truy cập', 'Chia sẻ liên kết', 'Tài liệu cộng tác']
      },
      {
        type: 'galleryGroup',
        title: 'Discord · Giao tiếp nhóm',
        description: 'Các kênh #thong-bao, #thao-luan-chinh và #tai-lieu giúp tách luồng thông tin, giảm tình trạng tin nhắn quan trọng bị trôi.',
        images: ['/assets/projects/4/img-012.png', '/assets/projects/4/img-014.png'],
        captions: ['Hệ thống kênh', 'Tài khoản và không gian nhóm']
      },
      {
        type: 'table',
        title: 'Thách thức và cách xử lý',
        columns: ['Thách thức', 'Giải pháp tôi áp dụng'],
        rows: [
          ['Thành viên chưa quen Trello', 'Hướng dẫn cách dùng nhãn màu, trạng thái và deadline trên từng thẻ.'],
          ['Tài liệu trùng lặp, khó tìm', 'Thiết lập cây thư mục và áp dụng quy tắc đặt tên tệp thống nhất.'],
          ['Xung đột khi cùng sửa Google Docs', 'Yêu cầu trao đổi qua Comment trước khi thay đổi những phần nội dung lớn.']
        ]
      },
      {
        type: 'quote',
        title: 'Bài học rút ra',
        quote: 'Công cụ chỉ là phương tiện; sự chủ động và trách nhiệm cá nhân mới là chìa khóa để hệ thống vận hành hiệu quả.'
      }
    ]
  },
  {
    number: '05',
    slug: 'ai-tao-sinh-va-sang-tao-noi-dung',
    title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    shortTitle: 'AI & sáng tạo',
    summary: 'Phối hợp Gemini, ChatGPT và Canva để xây dựng infographic lộ trình học tiếng Hàn cho sinh viên năm nhất.',
    document: '/documents/bai-5.pdf',
    accent: '#BBEBFB',
    tags: ['Gemini', 'ChatGPT', 'Canva'],
    intro: 'Sản phẩm cuối cùng là infographic “The Effective Korean Learning Roadmap for Freshmen”, kết hợp cấu trúc nội dung, hình minh họa và kinh nghiệm học tập cá nhân.',
    sections: [
      {
        type: 'text',
        title: 'Mục tiêu dự án',
        paragraphs: [
          'Xây dựng một lộ trình học tiếng Hàn dễ theo dõi, kết hợp tư duy học tập, tiến trình kỹ năng, công cụ số và bí quyết duy trì động lực.',
          'Đối tượng chính là sinh viên năm nhất Khoa Ngôn ngữ và Văn hóa Hàn Quốc.'
        ]
      },
      {
        type: 'galleryGroup',
        title: 'Google Gemini · Xây dựng khung nội dung',
        description: 'Gemini hỗ trợ tạo cấu trúc bốn phần: tư duy, lộ trình, công cụ và bí kíp. Tôi rút gọn các đoạn dài và bổ sung Personal Learning Tips từ trải nghiệm bản thân.',
        images: ['/assets/projects/5/img-000.png', '/assets/projects/5/img-002.png', '/assets/projects/5/img-004.png', '/assets/projects/5/img-006.png'],
        captions: ['Prompt ban đầu', 'Đề xuất lộ trình', 'Gợi ý công cụ', 'Bí quyết học tập']
      },
      {
        type: 'galleryGroup',
        title: 'ChatGPT · Tạo minh họa',
        description: 'Các hình được yêu cầu theo phong cách flat vector, pastel và tối giản để không cạnh tranh với phần chữ trong infographic.',
        images: ['/assets/projects/5/img-008.png', '/assets/projects/5/img-010.png', '/assets/projects/5/img-013.png'],
        captions: ['Minh họa sơ đồ học tập', 'Minh họa sinh viên', 'Minh họa công cụ học tập']
      },
      {
        type: 'galleryGroup',
        title: 'Canva AI · Hoàn thiện bố cục',
        description: 'Magic Design được dùng như điểm khởi đầu; sau đó bố cục, màu, hình và khoảng cách được chỉnh thủ công để tạo nhịp đọc liền mạch.',
        images: ['/assets/projects/5/img-012.png'],
        captions: ['Không gian thiết kế và phiên bản đang hoàn thiện']
      },
      {
        type: 'heroImage',
        title: 'Sản phẩm cuối cùng',
        image: '/assets/projects/5/img-015.png',
        alt: 'Infographic The Effective Korean Learning Roadmap for Freshmen',
        caption: 'Infographic tổng hợp tư duy cốt lõi, lộ trình bốn bước, công cụ đề xuất và mẹo học tập cá nhân.'
      },
      {
        type: 'table',
        title: 'So sánh ba công cụ',
        columns: ['Công cụ', 'Điểm mạnh', 'Hạn chế'],
        rows: [
          ['Gemini', 'Phân tích cấu trúc nhanh, tạo dàn ý theo tư duy chuyên gia.', 'Cần biên tập để giảm cảm giác khô và dài.'],
          ['ChatGPT', 'Tạo hình ảnh sáng tạo, hiểu đúng ngữ cảnh mô tả.', 'Khó chỉnh từng chi tiết nhỏ trực tiếp trong ảnh.'],
          ['Canva', 'Giao diện kéo thả dễ dùng, hỗ trợ hoàn thiện bố cục nhanh.', 'Một số tính năng AI yêu cầu trả phí.']
        ]
      },
      {
        type: 'principles',
        title: 'Ba vấn đề đạo đức được cân nhắc',
        items: [
          ['Tính xác thực', 'Nội dung do AI gợi ý phải được kiểm tra lại với giáo trình và nguồn đáng tin cậy.'],
          ['Quyền sở hữu', 'Sản phẩm cần có đóng góp cá nhân rõ ràng, không chỉ ghép nguyên đầu ra của AI.'],
          ['Giá trị nhân văn', 'AI có thể hỗ trợ cấu trúc và mỹ thuật nhưng không thay thế sự kiên trì, cảm xúc và trải nghiệm của người học.']
        ]
      },
      {
        type: 'text',
        title: 'Kết quả và cảm nhận',
        paragraphs: [
          'Quy trình sáng tạo thay đổi từ “tự làm từ con số 0” sang Prompt → Review → Edit → Integration. Vai trò của người học chuyển thành người kiểm soát, tuyển chọn và nâng cấp đầu ra.',
          'Tôi ước tính AI giúp tiết kiệm khoảng 70% thời gian tìm ý và tạo minh họa, nhưng phần cá nhân hóa và quyết định cuối cùng vẫn do người thực hiện chịu trách nhiệm.'
        ]
      }
    ]
  },
  {
    number: '06',
    slug: 'su-dung-ai-co-trach-nhiem',
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    shortTitle: 'AI có trách nhiệm',
    summary: 'Phân tích chính sách, thử nghiệm tóm tắt bài báo bằng AI và xây dựng sáu nguyên tắc cá nhân về liêm chính học thuật.',
    document: '/documents/bai-6.pdf',
    accent: '#D0E3FF',
    tags: ['Đạo đức AI', 'Liêm chính học thuật', 'Infographic'],
    intro: 'Bài cuối chuyển trọng tâm từ “AI làm được gì” sang “người học phải chịu trách nhiệm thế nào”. Nội dung gồm phân tích định hướng của ULIS - ĐHQGHN, một nhiệm vụ tóm tắt học thuật và bộ nguyên tắc cá nhân.',
    sections: [
      {
        type: 'text',
        title: 'Phân tích định hướng sử dụng AI',
        paragraphs: [
          'Báo cáo xác định ba trụ cột: chủ động thích ứng, liêm chính học thuật và trách nhiệm cá nhân. AI được xem là công cụ hỗ trợ tư duy, không phải phương tiện thay thế quá trình học độc lập.',
          'So với một số đại học quốc tế, định hướng của ULIS/ĐHQGHN mang tính khung chung; trong khi nhiều trường cho phép giảng viên quy định cụ thể theo từng học phần. Điểm chung là kết quả cuối cùng phải phản ánh năng lực thật của người học.'
        ]
      },
      {
        type: 'quote',
        title: 'Prompt cho nhiệm vụ học tập',
        quote: 'Đóng vai một chuyên gia Kinh tế chính trị, hãy tóm tắt bài báo theo bốn phần: mục tiêu nghiên cứu, phương pháp, kết quả nổi bật về kinh tế - xã hội và ý nghĩa thực tiễn; sử dụng văn phong hàn lâm, khách quan.'
      },
      {
        type: 'bullets',
        title: 'Đầu ra sau khi hiệu đính',
        items: [
          'Mục tiêu: so sánh chủ nghĩa tư bản thế kỷ XIX với chủ nghĩa tư bản hiện đại trên phương diện kinh tế và chính trị - xã hội.',
          'Phương pháp: nghiên cứu so sánh dựa trên lý luận của C. Mác, dữ liệu thực tiễn và số liệu từ các tổ chức quốc tế.',
          'Kết quả kinh tế: mô hình quản lý, năng suất và điều tiết khủng hoảng thay đổi; mâu thuẫn tư bản - lao động được giảm nhẹ về hình thức.',
          'Kết quả chính trị - xã hội: nhà nước tăng vai trò điều tiết và an sinh, đồng thời xuất hiện mâu thuẫn mới từ công ty xuyên quốc gia và phụ thuộc công nghệ.',
          'Ý nghĩa: chủ nghĩa tư bản có khả năng tự điều chỉnh và thích ứng, vì vậy quá trình chuyển đổi xã hội mang tính lâu dài.'
        ]
      },
      {
        type: 'text',
        title: 'Cách đánh giá và tích hợp đầu ra',
        paragraphs: [
          'Tôi kiểm tra tính logic, đối chiếu số liệu với tài liệu gốc và biên tập lại văn phong để tránh kiểu trả lời máy móc.',
          'Việc sử dụng AI được ghi nhận minh bạch: nội dung do AI hỗ trợ đã được người học kiểm chứng, chỉnh sửa và đối chiếu với bài báo gốc.'
        ]
      },
      {
        type: 'table',
        title: 'Ba vấn đề đạo đức cốt lõi',
        columns: ['Vấn đề', 'Phân tích'],
        rows: [
          ['Hỗ trợ hay gian lận', 'Hỗ trợ khi AI gợi ý dàn ý hoặc tóm tắt; gian lận khi người học nộp toàn bộ văn bản do AI tạo và nhận là sản phẩm cá nhân.'],
          ['Quyền sở hữu trí tuệ', 'AI tổng hợp từ tri thức của nhiều tác giả; bỏ qua trích dẫn nguồn và công cụ là thiếu tôn trọng bản quyền.'],
          ['Phát triển kỹ năng', 'Lạm dụng AI làm suy giảm phân tích và phản biện; sử dụng đúng giúp tăng tốc xử lý thông tin để dành thời gian cho tư duy sâu.']
        ]
      },
      {
        type: 'principles',
        title: 'Sáu nguyên tắc cá nhân',
        items: [
          ['Minh bạch', 'Ghi rõ phần nào trong bài làm có sự hỗ trợ của AI.'],
          ['Làm chủ', 'AI chỉ đưa gợi ý; người học chịu trách nhiệm với quyết định cuối cùng.'],
          ['Xác thực', 'Không sử dụng dữ liệu chưa kiểm chứng bằng tài liệu gốc.'],
          ['Tôn trọng tác giả', 'Trích dẫn nguồn của ý tưởng và dữ liệu, kể cả khi được AI tổng hợp.'],
          ['Phát triển năng lực', 'Dùng AI cho công việc kỹ thuật, dành thời gian cho phân tích và phản biện.'],
          ['Không gian lận', 'Không dùng AI để che giấu năng lực thật hoặc phá vỡ môi trường học thuật trung thực.']
        ]
      },
      {
        type: 'heroImage',
        title: 'Infographic minh họa',
        image: '/assets/projects/6/img-000.png',
        alt: 'Infographic trợ lý thông minh - trách nhiệm cao',
        caption: 'Thông điệp chính: AI hỗ trợ, con người hiệu đính, nguồn được kiểm chứng và sản phẩm cuối cùng phải thể hiện công sức thật.'
      },
      {
        type: 'quote',
        title: 'Thông điệp kết thúc',
        quote: 'Công nghệ là đòn bẩy, đạo đức là nền tảng.'
      }
    ]
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
