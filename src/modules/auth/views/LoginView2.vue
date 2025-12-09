<template>
  <div
    class="relative z-10 flex flex-col gap-8 w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-10 dark:bg-gray-900/20 my-auto mx-4 lg:mr-20 lg:ml-auto"
  >
    <div class="flex justify-center">
      <img alt="Logo UANL" class="h-24 w-auto" src="/src/assets/login/login2/nx-logo-N.png" />
    </div>

    <div class="text-center">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Bienvenido</h1>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-200">
        Inicia sesión para acceder a tu cuenta
      </p>
    </div>

    <form class="flex flex-col gap-5">
      <!-- Usuario -->
      <fieldset class="fieldset w-full">
        <legend class="fieldset-legend text-xl text-gray-200">Usuario</legend>
        <input type="text" class="input w-full" placeholder="Cuenta" />
        <p class="label"></p>
      </fieldset>

      <!-- Contraseña -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend text-sm text-gray-200">Contraseña</legend>
        <input type="password" class="input w-full" placeholder="Contraseña" />
        <p class="label"></p>
      </fieldset>

      <!-- Link recuperar -->

      <RouterLink class="link" to="recuperarContrasena"> ¿Olvidaste la contraseña? </RouterLink>

      <!-- Botón ingresar -->
      <button
        class="flex w-full bg-[#004A98] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 transition-all duration-200"
        type="submit"
      >
        <span class="truncate">Ingresar</span>
      </button>
    </form>
  </div>
</template>
