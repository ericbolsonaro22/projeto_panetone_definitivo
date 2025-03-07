export default {
    root: './', // Indica que o diretório raiz é o local do HTML principal
    build: {
      outDir: 'dist', // Define a pasta onde o build será gerado
      rollupOptions: {
        input: 'index.html' // Arquivo principal do projeto
      }
    },
    server: {
      open: true // Abre o navegador automaticamente ao iniciar o servidor de desenvolvimento
    }
}