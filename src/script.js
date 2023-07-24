// Função para alternar a visibilidade do menu suspenso
function toggleDropdownMenu(menuId) {
  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.toggle('hidden');
}

// Eventos de clique nos botões para exibir/ocultar os dropdowns
document.getElementById('dropdown-btn-1').addEventListener('click', function() {
  toggleDropdownMenu('dropdown-menu-1');
});

document.getElementById('dropdown-btn-2').addEventListener('click', function() {
  toggleDropdownMenu('dropdown-menu-2');
});

document.getElementById('dropdown-btn-3').addEventListener('click', function() {
  toggleDropdownMenu('dropdown-menu-3');
});
document.getElementById('dropdown-btn-4').addEventListener('click', function() {
  toggleDropdownMenu('dropdown-menu-4');
});

// Evento para fechar os dropdowns ao clicar fora deles
window.addEventListener('click', function(event) {
  var dropdownMenus = document.querySelectorAll('.dropdown-menu');
  
  dropdownMenus.forEach(function(dropdownMenu) {
    var dropdownBtn = document.getElementById(dropdownMenu.id.replace('menu', 'btn'));

    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});
