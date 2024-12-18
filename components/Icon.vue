<template>

  <!-- github -->
  <template v-if="name == 'github'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
    </svg>
  </template>

  <!-- linkedin -->
  <template v-if="name == 'linkedin'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
    </svg>
  </template>

  <!-- facebook -->
  <template v-if="name == 'facebook'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
    </svg>
  </template>

  <!-- add subject -->
  <template v-if="name == 'addSubject'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h14q.825 0 1.413.588T19 5v5h-2V8H3v11h13v2zM3 6h14V5H3zm0 0V5z" />
    </svg>
  </template>

  <!-- left arrow -->
  <template v-if="name == 'leftArrow'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="m12 19l-7-7l7-7m7 7H5" />
    </svg>
  </template>

  <!-- loader -->
  <template v-if="name == 'loader'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="16;0" />
          <animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="rotate"
            values="0 12 12;360 12 12" />
        </path>
        <path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity="0.3"
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="2.4s" values="64;0" />
        </path>
      </g>
    </svg>
  </template>

  <!-- eye -->
  <template v-if="name == 'view'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" />
    </svg>
  </template>

  <!-- delete -->
  <template v-if="name == 'delete'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
  </template>

  <!-- calculate -->
  <template v-if="name == 'calculate'">
    <svg :class="className" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm5-.75h5v-1.5h-5zm0-2.5h5v-1.5h-5zm1.1-3.8l1.4-1.4l1.4 1.4l1.05-1.05l-1.4-1.45l1.4-1.4L16.9 6l-1.4 1.4L14.1 6l-1.05 1.05l1.4 1.4l-1.4 1.45zM6.25 9.2h5V7.7h-5zM5 21q-.825 0-1.413-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z" />
    </svg>
  </template>


</template>


<script setup>

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

</script>