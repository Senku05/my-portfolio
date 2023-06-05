// Verifica se il sito è in manutenzione
var maintenanceMode = true;

// Se il sito è in manutenzione, reindirizza tutte le richieste alla pagina di manutenzione
if (maintenanceMode && location.pathname !== '/maintenance.html') {
  window.location.href = '/maintenance.html';
}
