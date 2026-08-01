<template>
  <div class="logo-shield-spanner-wrapper">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      fill="none" 
      class="logo-icon-svg"
    >
      <defs>
        <!-- Cyan Linear Gradients -->
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00F0FF" />
          <stop offset="50%" stop-color="#38BDF8" />
          <stop offset="100%" stop-color="#0284C7" />
        </linearGradient>

        <linearGradient id="spannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00F0FF" />
          <stop offset="100%" stop-color="#14B8A6" />
        </linearGradient>

        <!-- Subtle Glow Filter -->
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Outer Shield Path -->
      <path 
        d="M 50 12 L 78 26 C 78 54 66 74 50 88 C 34 74 22 54 22 26 Z" 
        stroke="url(#shieldGrad)" 
        stroke-width="4" 
        stroke-linejoin="round"
        fill="rgba(2, 132, 199, 0.12)"
        filter="url(#cyanGlow)"
      />

      <!-- Inner Shield Path -->
      <path 
        d="M 50 22 L 70 32 C 70 54 60 68 50 78 C 40 68 30 54 30 32 Z" 
        stroke="url(#shieldGrad)" 
        stroke-width="2.5" 
        stroke-linejoin="round"
        fill="none" 
        opacity="0.9"
      />

      <!-- Single Spanner (Wrench) Crossing Top-Left to Bottom-Right -->
      <g filter="url(#cyanGlow)">
        <!-- Spanner Main Shaft -->
        <line x1="28" y1="34" x2="72" y2="72" stroke="url(#spannerGrad)" stroke-width="7" stroke-linecap="round" />
        <!-- Shaft Inner Dark Inset Line -->
        <line x1="32" y1="38" x2="68" y2="68" stroke="#030712" stroke-width="2" stroke-linecap="round" />

        <!-- Open Jaw Wrench Head (Top-Left) -->
        <g transform="translate(24, 30) rotate(-45)">
          <path 
            d="M -7 -10 C -14 -5 -14 5 -7 10 L 0 6 C -4 3 -4 -3 0 -6 Z" 
            fill="url(#spannerGrad)" 
            stroke="url(#spannerGrad)" 
            stroke-width="1.5" 
            stroke-linejoin="round"
          />
        </g>

        <!-- Box End Ring Wrench Head (Bottom-Right) -->
        <g transform="translate(76, 75)">
          <circle cx="0" cy="0" r="10" fill="#030712" stroke="url(#spannerGrad)" stroke-width="4" />
          <!-- Socket hole in ring end -->
          <polygon 
            points="0,-4 3.5,-2 3.5,2 0,4 -3.5,2 -3.5,-2" 
            fill="url(#spannerGrad)" 
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.logo-shield-spanner-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.logo-icon-svg {
  width: 100%;
  height: 100%;
}
</style>
