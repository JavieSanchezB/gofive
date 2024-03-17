module.exports = {
  apps: [
    {
      name: "laravel",
      script: "php artisan serve",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "vite",
      script: "npm run dev --host",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};