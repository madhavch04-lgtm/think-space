// PLACEHOLDER ONLY. Not a logo. Replace with the official file in src/assets/brand/
// once Madhav uploads it. Do not redraw or recolour the official artwork.
export default function LogoSlot({ size = 40 }: { size?: number }) {
  return (
    <div
      role="img"
      aria-label="Logo placeholder"
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center rounded-md border border-dashed border-line text-[9px] leading-none text-muted"
    >
      LOGO
    </div>
  );
}
