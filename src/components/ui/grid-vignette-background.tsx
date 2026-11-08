import { cn } from "@/lib/utils";

interface GridVignetteBackgroundProps {
  /** Grid cell size in px. */
  size?: number;
  /** Vignette center, in % of the container. */
  x?: number;
  y?: number;
  /** Vignette ellipse size, in % of the container. */
  horizontalVignetteSize?: number;
  verticalVignetteSize?: number;
  /** 0–100: how early the grid starts fading toward the edges. */
  intensity?: number;
}

/**
 * Grid lines that fade out toward the edges. Fills its nearest positioned
 * parent (give the parent `relative overflow-hidden`). Line color comes from
 * `currentColor`, so set it with a text class, e.g. `text-white/10` on dark
 * surfaces or `text-line` on light ones.
 */
export function GridVignetteBackground({
  className,
  size = 48,
  x = 50,
  y = 50,
  horizontalVignetteSize = 100,
  verticalVignetteSize = 100,
  intensity = 0,
  style,
  ...props
}: React.ComponentProps<"div"> & GridVignetteBackgroundProps) {
  const mask = `radial-gradient(ellipse ${horizontalVignetteSize}% ${verticalVignetteSize}% at ${x}% ${y}%, black ${
    100 - intensity
  }%, transparent 100%)`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]",
        className,
      )}
      style={{
        backgroundSize: `${size}px ${size}px`,
        maskImage: mask,
        WebkitMaskImage: mask,
        ...style,
      }}
      {...props}
    />
  );
}
