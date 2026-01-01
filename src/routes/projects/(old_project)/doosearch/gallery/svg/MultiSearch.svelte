<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { SVGAttributes } from "svelte/elements";

    interface Props extends SVGAttributes<SVGSVGElement> {
        class?: string;
    }

    let { class: className, ...restProps }: Props = $props();
</script>

<svg
   width="512"
   height="512"
   viewBox="0 0 512 512"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   class={cn("", className)}
   {...restProps}>
  <defs
     id="defs1" />
  <g
     id="layer1">
    <path
       id="rect1"
       style:fill="var(--primary)"
       style="opacity:1;stroke:none;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;paint-order:stroke fill markers"
       d="M 144.53193,0 H 367.46807 C 447.29085,0 512,64.709148 512,144.53193 V 367.46807 C 512,447.29085 447.29085,512 367.46807,512 H 144.53193 C 64.709148,512 0,447.29085 0,367.46807 V 144.53193 C 0,64.709148 64.709148,0 144.53193,0 Z" />
    <path
       id="circle6"
       style:fill="var(--background)"
       style="fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;-inkscape-stroke:none;paint-order:stroke fill markers"
       d="m 153.21094,-65.101562 a 88.108627,88.108627 0 0 1 -88.109378,-88.109378 88.108627,88.108627 0 0 1 88.109378,-88.10742 88.108627,88.108627 0 0 1 88.10742,88.10742 88.108627,88.108627 0 0 1 -88.10742,88.109378 z m 205.57812,0 a 88.108627,88.108627 0 0 1 -88.10742,-88.109378 88.108627,88.108627 0 0 1 88.10742,-88.10742 88.108627,88.108627 0 0 1 88.10938,88.10742 88.108627,88.108627 0 0 1 -88.10938,88.109378 z M 153.21094,-270.68164 a 88.108627,88.108627 0 0 1 -88.109378,-88.10742 88.108627,88.108627 0 0 1 88.109378,-88.10938 88.108627,88.108627 0 0 1 88.10742,88.10938 88.108627,88.108627 0 0 1 -88.10742,88.10742 z m 205.57812,0 a 88.108627,88.108627 0 0 1 -88.10742,-88.10742 88.108627,88.108627 0 0 1 88.10742,-88.10938 88.108627,88.108627 0 0 1 88.10938,88.10938 88.108627,88.108627 0 0 1 -88.10938,88.10742 z"
       transform="scale(1,-1)" />
    <path
       id="path7"
       style:fill="var(--foreground)"
       style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;paint-order:stroke fill markers;enable-background:accumulate;stop-color:#000000;stop-opacity:1"
       d="m 358.78976,308.06108 a 9.4032641,9.4032641 0 0 0 -9.40327,9.40327 v 31.92212 h -31.92211 a 9.4032641,9.4032641 0 0 0 -9.40327,9.40327 9.4032641,9.4032641 0 0 0 9.40327,9.40326 h 31.92211 v 31.92212 a 9.4032641,9.4032641 0 0 0 9.40327,9.40326 9.4032641,9.4032641 0 0 0 9.40326,-9.40326 V 368.193 h 31.92213 a 9.4032641,9.4032641 0 0 0 9.40326,-9.40326 9.4032641,9.4032641 0 0 0 -9.40326,-9.40327 h -31.92213 v -31.92212 a 9.4032641,9.4032641 0 0 0 -9.40326,-9.40327 z" />
  </g>
</svg>
