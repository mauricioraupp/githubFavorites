export function checkIfTableIsEmpty() {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  if (tbody.rows.length === 0) {
      const row = tbody.insertRow();
      const cell = row.insertCell(0);
      cell.colSpan = 4;
      cell.className = 'td-empty-message'
      cell.innerHTML = `
      <div class="empty-message">
        <img src="assets/Estrela.svg">
        <span>Nenhum favorito ainda</span>
      </div>
      `
  }
}

window.onload = checkIfTableIsEmpty;