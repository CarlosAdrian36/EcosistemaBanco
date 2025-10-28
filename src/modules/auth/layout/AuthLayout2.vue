<script setup lang="ts"></script>

<template>
  <div class="min-h-screenflex w-full bg-base-300">
    <img
      src="/src/assets/login/imagenlogin/28.png"
      alt="Fondo de la pantalla"
      class="absolute h-full w-full object-cover"
    />
  </div>
  <!-- <div class="flex justify-end">
    <div class="flex items-center justify-center w-full lg:w-1/2 h-screen p-8 z-10">
      <div
        class="border-2 border-amber-50 flex flex-col gap-8 max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-6"
      >
        <div class="flex justify-center">Aqui va el logo</div>
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-800">Bienvenido</h1>
        </div>
      </div>
    </div>
  </div> -->
  <div
    class="relative z-10 flex flex-col gap-8 w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-10 dark:bg-gray-900/20 my-auto mx-4 lg:mr-20 lg:ml-auto"
  >
    <div class="flex justify-center">
      <img
        alt="Logo UANL"
        class="h-24 w-auto"
        data-alt="UANL Official Logo in blue color"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8kvjkIZE1d-OBZJJPjM9iein2NNIrnZ2Wh8bW3aedwBI8kPpZx-LxXAaYUfIqTB8oh6FDhIrWWuWLnC4VYLlz8um93AOPlVYhayOJNGhQ_pUtZ6ueTt6F81eutf9c9uNJr3VLROlToCV3pyIqAMRoWRgSY6QxAMXLJkTlIEjU9424dnhnXYkCTTN2eq0tiJ0jvE2OHcCYKT9vuQ9g4a_EdK4gFPCVUM-UX7rCfzA2fLV15DTi4QkX43VlIGbnnPaEDdJDKp2npuo"
      />
    </div>
    <div class="text-center">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Bienvenido</h1>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-200">
        Inicia sesión para acceder a tu cuenta
      </p>
    </div>
    <form class="flex flex-col gap-5">
      <label class="flex flex-col">
        <p class="text-sm font-medium leading-normal pb-2 text-gray-700 dark:text-gray-200">
          Usuario
        </p>
        <div
          class="flex w-full flex-1 items-stretch rounded-lg border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary/80 transition-all duration-200 bg-white dark:bg-gray-800"
        >
          <span class="flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <i class="material-symbols-outlined">person</i>
          </span>
          <input
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-0 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-base font-normal leading-normal"
            placeholder="Ingresa tu usuario"
            value=""
          />
        </div>
      </label>
      <label class="flex flex-col">
        <p class="text-sm font-medium leading-normal pb-2 text-gray-700 dark:text-gray-200">
          Contraseña
        </p>
        <div
          class="flex w-full flex-1 items-stretch rounded-lg border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary/80 transition-all duration-200 bg-white dark:bg-gray-800"
        >
          <span class="flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <i class="material-symbols-outlined">lock</i>
          </span>
          <input
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-0 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-base font-normal leading-normal"
            placeholder="Ingresa tu contraseña"
            type="password"
            value=""
          />
          <button
            class="flex items-center pr-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            type="button"
          >
            <i class="material-symbols-outlined">visibility</i>
          </button>
        </div>
      </label>
      <div class="text-right">
        <a class="text-sm font-medium text-primary hover:underline" href="#"
          >¿Olvidaste tu contraseña?</a
        >
      </div>
      <button
        class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 transition-all duration-200"
      >
        <span class="truncate">Ingresar</span>
      </button>
    </form>
  </div>
</template>
<!--  -->
