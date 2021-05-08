import { css, svg } from "lit";
import { styleMap } from "lit/directives/style-map";

export const view = (level: number) => {
  return svg`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="resin-image"
      role="img"
      aria-label="Illustration of Original Resin"
    >
    <mask
      id="resin_shape"
    >
      <rect x="-1" y="-1" width="102" height="102" fill="white" />
      <path
        d="M73.5,78C50.8,78,31.8,59.7,31,37.1C30.6,24,36,12.2,44.9,4.1c0.7-0.7,0.2-1.9-0.8-1.7
		    C19.5,5.4,0.7,27,2.1,52.7c1.3,24.2,20.8,43.8,45,45.3c17.8,1.1,33.7-7.6,42.8-21.2c0.5-0.8-0.3-1.8-1.2-1.5C84,77,78.8,78,73.5,78z"
        fill="black"
      />
    </mask>
    <rect
      x="1"
      y="1"
      width="98"
      height="98"
      fill="var(--theme-bg-sub)"
    />
    <rect
      class="resin-image-level"
      style=${styleMap({
        transform: `translateY(${100 - level}%)`,
      })}
      x="1"
      y="1"
      width="98"
      height="98"
      fill="var(--theme-primary)"
    />
    <rect
      x="-1"
      y="-1"
      width="102"
      height="102"
      mask="url(#resin_shape)"
      fill="var(--theme-bg)"
    />
    </svg>
  `;
};

export const styles = [
  css`
    .resin-image {
      display: block;
      height: auto;
      width: 100%;

      user-select: none;
    }

    .resin-image-level {
      transition: transform 0.5s ease;
    }
  `,
];
