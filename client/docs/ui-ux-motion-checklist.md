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

- [x] Viết lại copy About theo năng lực cụ thể.
- [x] Code preview có cursor blink nhẹ.
- [x] Dòng code highlight lần lượt.
- [x] Value cards reveal theo stagger.
- [x] Hover card có border glow nhẹ.
- [x] Kiểm tra heading hierarchy.
- [x] Kiểm tra readable line length trên mobile.

## Phase 5 — Skills Constellation

Mục tiêu: Skills trở thành hệ thống năng lực trực quan.

- [x] Thiết kế desktop skill constellation.
- [x] Center node: Fullstack Developer.
- [x] Group nodes: Frontend, Backend, Tools, Engineering Practices.
- [x] Skill node hover/focus state.
- [x] Tooltip mô tả từng skill.
- [x] SVG connection lines.
- [x] Active/hover line highlight.
- [x] Mobile fallback dạng accordion hoặc grouped chips.
- [x] Tooltip không phụ thuộc hover-only.
- [x] Kiểm tra keyboard access cho skill nodes.

## Phase 6 — Motion Showcase

Mục tiêu: Showcase là section thể hiện năng lực motion mạnh nhất.

- [x] Đổi concept section thành `Motion Showcase`.
- [x] Tạo sticky scroll scene.
- [x] Tạo 5 motion steps.
- [x] Text crossfade theo active step.
- [x] Animated preview bên phải.
- [x] Step progress dots.
- [x] Preview card morph hoặc shared layout transition.
- [x] Glow sweep có kiểm soát.
- [x] Mobile fallback không dùng sticky scene nặng.
- [x] Reduced motion fallback.
- [ ] Kiểm tra CLS và scroll smoothness.

## Phase 7 — Projects Case Study

Mục tiêu: Projects có sức thuyết phục thật.

- [x] Thêm project role.
- [x] Thêm one-liner cho từng project.
- [ ] Thêm screenshot hoặc preview thật khi có asset.
- [x] Project card có challenge/solution/outcome rõ.
- [x] Hover card border glow.
- [x] CTA arrow movement.
- [x] Project filter: All / Frontend / Fullstack / Mobile / AI.
- [x] Case study modal hoặc drawer.
- [x] Modal có Problem / Role / Tech decisions / Key screens / Lessons learned / Links.
- [x] Shared layout transition từ card sang modal.
- [x] Modal keyboard/focus management.
- [x] Không render Live Demo nếu URL không thật.

## Phase 8 — Contact Upgrade

Mục tiêu: Contact là điểm kết thúc mạnh, dễ chuyển đổi.

- [x] Concept mail composer hoặc command center.
- [x] Email copy button.
- [x] `Copied` state.
- [x] Hover email icon Send movement.
- [x] GitHub/LinkedIn cards có glow + arrow movement.
- [x] Availability status rõ.
- [x] Timezone/location rõ.
- [x] Final CTA pulse nhẹ, không loop mạnh.
- [x] Keyboard access cho copy email.

## Phase 9 — Navigation & Scroll Polish

Mục tiêu: scroll có định hướng nhưng không rối.

- [x] Scroll progress line có section markers.
- [x] Marker click để điều hướng section.
- [x] Marker hover/focus hiện section label.
- [x] Mobile chỉ giữ progress line đơn giản.
- [x] Header trong suốt hơn ở Hero.
- [x] Header nền đậm hơn khi scroll.
- [x] Header có thể ẩn nhẹ khi scroll nhanh xuống.
- [x] Header hiện lại khi scroll lên.
- [x] Contextual nav chỉ hiển thị khi thực sự cần.
- [x] Không dùng mandatory scroll snap toàn trang.

## Phase 10 — Background System

Mục tiêu: nền có identity nhưng không tranh nội dung.

- [x] Tạo section theme map.
- [x] Background glow đổi theo active section.
- [x] Desktop shader chạy chậm.
- [x] Mobile dùng gradient tĩnh.
- [x] Reduced motion tắt shader động.
- [x] Không dùng quá nhiều WebGL layer.
- [x] Kiểm tra background không làm text khó đọc.

## Phase 11 — Accessibility Audit

Mục tiêu: motion mạnh nhưng accessible.

- [x] Verify `prefers-reduced-motion`.
- [x] Không có flash nhanh.
- [x] Không có loop nổi bật gây khó chịu.
- [x] Focus visible rõ trên toàn site.
- [x] Tất cả button/link có accessible name.
- [x] Không còn hover-only information.
- [x] Keyboard navigation cho nav, showcase, project modal.
- [x] Screen reader labels cho interactive widgets.
- [x] Mobile không phụ thuộc pointer hover.

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
