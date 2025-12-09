<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-semibold text-center">Crear Cuenta</h1>

    <input type="text" placeholder="Nombre" class="w-full border rounded p-2" />
    <input type="email" placeholder="Correo" class="w-full border rounded p-2" />
    <input type="password" placeholder="Contraseña" class="w-full border rounded p-2" />

    <button class="w-full bg-green-600 text-white p-2 rounded">Registrarme</button>

    <p class="text-center text-sm">
      ¿Ya tienes cuenta?
      <RouterLink to="/auth3/login3" class="text-blue-500 underline"> Iniciar sesión </RouterLink>
    </p>
  </div>
</template>
