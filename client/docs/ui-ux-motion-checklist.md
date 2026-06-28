# UI/UX & Motion Upgrade Checklist

Checklist này là nguồn theo dõi tiến độ cho kế hoạch trong `docs/ui-ux-motion-upgrade.md`.

Quy ước trạng thái:

- `[x]` Hoàn thành và đã verify.
- `[~]` Đang làm hoặc hoàn thành một phần.
- `[ ]` Chưa làm.

## Phase 1 — UI/UX Foundation

Mục tiêu: sửa các lỗi làm giảm độ tin cậy và sự rõ ràng của portfolio.

- [x] Footer dùng link thật từ `profile.github`, `profile.linkedin`, `profile.email`.
- [x] Project chưa có demo không còn render nút Live Demo mở `#`.
- [x] Project data dùng `liveUrl: null` cho demo chưa sẵn sàng.
- [x] Metadata domain/social trong `index.html` đồng bộ với dữ liệu thật.
- [x] Thêm `src/data/site.ts` làm nguồn site metadata dùng chung.
- [x] Main nav có đủ `Home / About / Skills / Showcase / Projects / Contact`.
- [x] Shared navigation data có `Showcase`.
- [x] Scrollbar không còn bị ẩn toàn trang; đã thay bằng scrollbar mảnh.
- [x] Section navigation dùng `replaceState` thay vì `pushState`.
- [x] `MotionItem.direction` hoạt động lại với offset nhẹ.
- [x] App chỉ import animation từ `motion/react`.
- [x] Gỡ direct dependency `framer-motion` khỏi `package.json`.
- [x] Showcase accordion chuyển sang tab semantics.
- [x] Showcase tabs hỗ trợ keyboard arrow navigation.
- [x] README không còn là template Vite.
- [x] TypeScript bật `strict`.
- [x] ESLint bật type-aware `recommendedTypeChecked`.
- [x] `npm run lint` pass.
- [x] `npm run build` pass.

## Phase 2 — Motion Foundation

Mục tiêu: tạo hệ thống animation dùng lại, tránh hiệu ứng rải rác.

- [x] Tạo thư mục `src/motion/`.
- [x] Tạo `src/motion/tokens.ts`.
- [x] Tạo `src/motion/variants.ts`.
- [x] Tạo `src/motion/transitions.ts`.
- [x] Tạo `useReducedMotionSafe`.
- [x] Tạo `useScrollDirection`.
- [x] Tạo `useSectionProgress`.
- [x] Tạo `useMousePosition`.
- [x] Tạo `SectionReveal`.
- [x] Tạo `TextReveal`.
- [x] Tạo `MagneticButton`.
- [x] Tạo `TiltCard`.
- [x] Tạo `ScrollScene`.
- [x] Tạo `ParallaxLayer`.
- [x] Tạo `GlowLine`.
- [x] Tạo `MotionGrid`.
- [x] Tạo `FloatingElement`.
- [x] Refactor `src/components/common/Reveal.tsx` để dùng motion foundation mới.
- [x] Reduced motion dùng fade-only reveal.
- [x] Audit nested motion để tránh render/animation quá sâu.

## Phase 3 — Hero Cinematic

Mục tiêu: tạo ấn tượng rõ trong 3-5 giây đầu.

- [x] Split headline reveal theo dòng hoặc từ.
- [x] Status pill reveal trước headline.
- [x] Summary reveal sau headline.
- [x] CTA group reveal sau summary.
- [x] Magnetic CTA cho nút chính.
- [x] CTA arrow movement khi hover.
- [x] Profile card tilt nhẹ theo pointer.
- [x] Floating tech orbit trên desktop.
- [x] Tắt floating orbit trên mobile/reduced motion.
- [x] Scroll hint dẫn xuống About.
- [x] Background glow riêng cho Hero.
- [ ] Kiểm tra Hero mobile không quá nặng.

## Phase 4 — About Upgrade

Mục tiêu: About kể rõ năng lực thực tế, không generic.

- [ ] Viết lại copy About theo năng lực cụ thể.
- [ ] Code preview có cursor blink nhẹ.
- [ ] Dòng code highlight lần lượt.
- [ ] Value cards reveal theo stagger.
- [ ] Hover card có border glow nhẹ.
- [ ] Kiểm tra heading hierarchy.
- [ ] Kiểm tra readable line length trên mobile.

## Phase 5 — Skills Constellation

Mục tiêu: Skills trở thành hệ thống năng lực trực quan.

- [ ] Thiết kế desktop skill constellation.
- [ ] Center node: Fullstack Developer.
- [ ] Group nodes: Frontend, Backend, Tools, Engineering Practices.
- [ ] Skill node hover/focus state.
- [ ] Tooltip mô tả từng skill.
- [ ] SVG connection lines.
- [ ] Active/hover line highlight.
- [ ] Mobile fallback dạng accordion hoặc grouped chips.
- [ ] Tooltip không phụ thuộc hover-only.
- [ ] Kiểm tra keyboard access cho skill nodes.

## Phase 6 — Motion Showcase

Mục tiêu: Showcase là section thể hiện năng lực motion mạnh nhất.

- [ ] Đổi concept section thành `Motion Showcase`.
- [ ] Tạo sticky scroll scene.
- [ ] Tạo 5 motion steps.
- [ ] Text crossfade theo active step.
- [ ] Animated preview bên phải.
- [ ] Step progress dots.
- [ ] Preview card morph hoặc shared layout transition.
- [ ] Glow sweep có kiểm soát.
- [ ] Mobile fallback không dùng sticky scene nặng.
- [ ] Reduced motion fallback.
- [ ] Kiểm tra CLS và scroll smoothness.

## Phase 7 — Projects Case Study

Mục tiêu: Projects có sức thuyết phục thật.

- [ ] Thêm project role.
- [ ] Thêm one-liner cho từng project.
- [ ] Thêm screenshot hoặc preview thật khi có asset.
- [ ] Project card có challenge/solution/outcome rõ.
- [ ] Hover card border glow.
- [ ] CTA arrow movement.
- [ ] Project filter: All / Frontend / Fullstack / Mobile / AI.
- [ ] Case study modal hoặc drawer.
- [ ] Modal có Problem / Role / Tech decisions / Key screens / Lessons learned / Links.
- [ ] Shared layout transition từ card sang modal.
- [ ] Modal keyboard/focus management.
- [ ] Không render Live Demo nếu URL không thật.

## Phase 8 — Contact Upgrade

Mục tiêu: Contact là điểm kết thúc mạnh, dễ chuyển đổi.

- [ ] Concept mail composer hoặc command center.
- [ ] Email copy button.
- [ ] `Copied` state.
- [ ] Hover email icon Send movement.
- [ ] GitHub/LinkedIn cards có glow + arrow movement.
- [ ] Availability status rõ.
- [ ] Timezone/location rõ.
- [ ] Final CTA pulse nhẹ, không loop mạnh.
- [ ] Keyboard access cho copy email.

## Phase 9 — Navigation & Scroll Polish

Mục tiêu: scroll có định hướng nhưng không rối.

- [ ] Scroll progress line có section markers.
- [ ] Marker click để điều hướng section.
- [ ] Marker hover/focus hiện section label.
- [ ] Mobile chỉ giữ progress line đơn giản.
- [ ] Header trong suốt hơn ở Hero.
- [ ] Header nền đậm hơn khi scroll.
- [ ] Header có thể ẩn nhẹ khi scroll nhanh xuống.
- [ ] Header hiện lại khi scroll lên.
- [ ] Contextual nav chỉ hiển thị khi thực sự cần.
- [ ] Không dùng mandatory scroll snap toàn trang.

## Phase 10 — Background System

Mục tiêu: nền có identity nhưng không tranh nội dung.

- [ ] Tạo section theme map.
- [ ] Background glow đổi theo active section.
- [ ] Desktop shader chạy chậm.
- [ ] Mobile dùng gradient tĩnh.
- [ ] Reduced motion tắt shader động.
- [ ] Không dùng quá nhiều WebGL layer.
- [ ] Kiểm tra background không làm text khó đọc.

## Phase 11 — Accessibility Audit

Mục tiêu: motion mạnh nhưng accessible.

- [ ] Verify `prefers-reduced-motion`.
- [ ] Không có flash nhanh.
- [ ] Không có loop nổi bật gây khó chịu.
- [ ] Focus visible rõ trên toàn site.
- [ ] Tất cả button/link có accessible name.
- [ ] Không còn hover-only information.
- [ ] Keyboard navigation cho nav, showcase, project modal.
- [ ] Screen reader labels cho interactive widgets.
- [ ] Mobile không phụ thuộc pointer hover.

## Phase 12 — Performance Audit

Mục tiêu: giữ portfolio mượt và nhẹ.

- [ ] Lighthouse Performance >= 90.
- [ ] Lighthouse Accessibility >= 95.
- [ ] Lighthouse Best Practices >= 95.
- [ ] Lighthouse SEO >= 95.
- [ ] FPS audit bằng Chrome DevTools Performance.
- [ ] Không drop FPS rõ khi scroll nhanh.
- [ ] Không CLS đáng kể khi scroll/load.
- [ ] Ảnh project được optimize.
- [ ] Ảnh dưới fold lazy-load.
- [ ] Không animate layout properties.
- [ ] `will-change` chỉ dùng ở phần cần thiết.

## Phase 13 — Final Review

- [ ] Responsive audit: mobile, tablet, desktop, wide.
- [ ] Keyboard-only audit.
- [ ] Visual QA toàn page.
- [ ] SEO/social preview audit.
- [ ] README cập nhật theo implementation cuối.
- [ ] Deploy preview review.
- [ ] Ghi lại các tradeoff còn lại.

## Current Verified Commands

Các lệnh đã pass trước khi tạo checklist này:

```bash
npm run lint
npm run build
```

## Commit Policy

- Mỗi nhóm thay đổi nên có commit riêng.
- Với checklist, cập nhật trạng thái trong file này cùng commit triển khai tương ứng.
- Commit message dùng Conventional Commits.
- Sau mỗi batch hoàn chỉnh, push lên `main`.
