# UI/UX & Motion Upgrade — Lagna Portfolio

## Mục Tiêu

Biến portfolio hiện tại thành một trải nghiệm portfolio cao cấp: dark premium, cinematic nhưng dễ đọc, developer-focused, product-oriented, motion-rich nhưng có kiểm soát.

Nâng cấp cần đạt các mục tiêu:

- Giao diện có chiều sâu, không generic.
- Mỗi section có vai trò thị giác riêng.
- Scroll đóng vai trò dẫn dắt nội dung, không chỉ là thao tác cuộn.
- Animation phục vụ UX: định hướng, phân cấp, chuyển tiếp, phản hồi tương tác.
- Hiệu ứng mượt, không giật, không gây khó chịu trên mobile.
- Tôn trọng `prefers-reduced-motion`.
- Dễ bảo trì bằng motion tokens và variants dùng chung.

## Motion Principles

Motion chỉ được thêm khi phục vụ một mục đích rõ ràng:

- Orientation motion: giúp người dùng biết đang ở section nào.
- Hierarchy motion: nhấn heading, CTA, project chính, skill chính.
- Transition motion: làm chuyển section mượt và cao cấp.
- Interaction motion: phản hồi hover, click, focus, scroll.
- Ambient motion: tạo nền sống nhẹ, không tranh nội dung.

Giới hạn trên mỗi viewport:

- Tối đa 1 hiệu ứng ambient.
- Tối đa 1 reveal chính.
- Tối đa 1 nhóm micro-interaction.
- Tối đa 1 điểm nhấn thị giác.

Ưu tiên animate:

- `transform`
- `opacity`
- `clip-path`
- `mask-position`
- CSS variables

Tránh animate:

- `width`
- `height`
- `top`
- `left`
- `margin`
- `padding`
- blur lớn hoặc box-shadow nặng lặp liên tục

## Motion Architecture

Định hướng tạo motion foundation:

```txt
src/motion/
  tokens.ts
  variants.ts
  transitions.ts
  hooks/
    useReducedMotionSafe.ts
    useScrollDirection.ts
    useSectionProgress.ts
    useMousePosition.ts
  components/
    SectionReveal.tsx
    TextReveal.tsx
    MagneticButton.tsx
    TiltCard.tsx
    ScrollScene.tsx
    ParallaxLayer.tsx
    GlowLine.tsx
    MotionGrid.tsx
    FloatingElement.tsx
```

Motion tokens đề xuất:

```ts
export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
  sharp: [0.4, 0, 0.2, 1],
  soft: [0.16, 1, 0.3, 1],
} as const;

export const motionDuration = {
  micro: 0.16,
  fast: 0.24,
  normal: 0.42,
  slow: 0.72,
  cinematic: 1.05,
} as const;

export const motionSpring = {
  soft: { type: "spring", stiffness: 220, damping: 28 },
  snappy: { type: "spring", stiffness: 420, damping: 34 },
  premium: { type: "spring", stiffness: 180, damping: 24, mass: 0.8 },
} as const;
```

## Section Direction

### Hero

Hero phải tạo ấn tượng trong 3-5 giây đầu:

- Split headline reveal theo dòng hoặc từ.
- Magnetic CTA cho action chính.
- Profile card tilt nhẹ theo pointer.
- Floating tech orbit trên desktop.
- Scroll hint dẫn xuống About.
- Shader adaptive: desktop dùng shader, mobile/reduced motion dùng nền tĩnh.

### About

About cần kể câu chuyện năng lực cụ thể:

- Text reveal theo paragraph.
- Code preview có cursor blink nhẹ.
- Dòng code highlight lần lượt.
- Value cards stagger.
- Hover card có border glow nhẹ.

### Skills

Desktop hướng tới skill constellation:

- Center node: Fullstack Developer.
- Orbit node: Frontend, Backend, Tools, Engineering Practices.
- Hover node hiển thị tooltip mô tả ngắn.
- SVG connection line mờ, chỉ sáng khi tương tác.

Mobile fallback:

- Accordion/list theo nhóm.
- Chip reveal nhẹ.
- Không dùng constellation phức tạp.

### Showcase

Showcase là nơi thể hiện motion mạnh nhất:

- Sticky scroll scene.
- 5 motion steps.
- Text crossfade bên trái.
- Animated preview bên phải.
- Progress dots.
- Mobile fallback đơn giản.

### Projects

Projects phải là phần thuyết phục nhất:

- Không hiển thị Live Demo nếu chưa có URL thật.
- Mỗi project cần role, challenge, solution, outcome, tech stack, source code.
- Thêm screenshot hoặc preview thật khi có asset.
- Hover card có border glow và arrow movement.
- Có thể mở modal/drawer case study.

### Contact

Contact nên có concept command center/mail composer:

- Email copy button có trạng thái `Copied`.
- GitHub/LinkedIn cards có hover preview/glow.
- Availability, timezone, location rõ ràng.
- CTA cuối có pulse rất nhẹ, không loop mạnh.

## Navigation & Scroll

Top nav:

```txt
Home / About / Skills / Showcase / Projects / Contact
```

Mobile nav có thể gọn hơn:

```txt
Home / Skills / Projects / Contact
```

Scroll progress nên có:

- Top line mảnh.
- Glow nhẹ.
- Section markers.
- Marker click để nhảy section.
- Mobile chỉ giữ progress line đơn giản.

Không dùng mandatory scroll snap toàn trang. Nếu cần, chỉ dùng proximity trong Showcase.

## Background System

Desktop:

- Shader chậm.
- Radial glow theo active section.

Mobile:

- Gradient tĩnh.
- Glow nhẹ.

Reduced motion:

- Tắt shader động.
- Tắt parallax/floating loop.
- Reveal chỉ fade.
- Smooth scroll chuyển thành auto.

## Accessibility Requirements

- Tôn trọng `prefers-reduced-motion`.
- Không flash nhanh.
- Không loop quá nhiều hiệu ứng nổi bật.
- Focus visible rõ.
- Button/link có accessible name.
- Không ẩn scrollbar hoàn toàn.
- Không dùng hover-only cho thông tin quan trọng.
- Mobile không phụ thuộc vào pointer hover.

## Performance Requirements

Mục tiêu:

- Lighthouse Performance >= 90.
- Accessibility >= 95.
- Best Practices >= 95.
- SEO >= 95.

Quy tắc:

- Không dùng quá nhiều WebGL layer.
- Không chạy shader trên mobile yếu hoặc reduced motion.
- Không animate blur lớn liên tục.
- Dùng ảnh local optimized cho project preview khi có thể.
- Lazy load ảnh dưới fold.
- Memo hóa component animation nặng.
- Tránh nested motion quá sâu.
- Dùng `will-change` có kiểm soát.
- Audit FPS bằng Chrome DevTools Performance.

## Definition Of Done

Portfolio được xem là đạt khi:

- Không có link giả hoặc nút dẫn đến `#`.
- Navigation đầy đủ, không rối.
- Project có bằng chứng rõ ràng và source code dễ truy cập.
- Hero truyền đạt developer identity trong 5 giây đầu.
- Motion có hệ thống, không rời rạc.
- Scroll mượt và có định hướng.
- Reduced motion hoạt động.
- Build, lint, responsive, keyboard, Lighthouse và FPS audit đạt yêu cầu.
