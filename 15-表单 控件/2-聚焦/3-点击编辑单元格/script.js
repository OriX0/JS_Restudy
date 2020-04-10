let editingTd;
let table = document.getElementById('bagua-table');
table.onclick = function (event) {
  let target = event.target.closest('.edit-cancel,.edit-ok,td')
  if (!table.contains(target)) return;
  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false)
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true)
  } else if (target.nodeName == 'TD') {
    if (editingTd) return;
    makeTdEditable(target);
  }
}

function makeTdEditable (td) {
  // console.log('触发');
  editingTd = {
    elem: td,
    data: td.innerHTML
  }
  td.classList.add('edit-td');
  let area = document.createElement('textarea');
  area.style.width = td.clientWidth + 'px';
  area.style.height = td.clientHeight + 'px';
  area.className = 'edit-area';
  area.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(area);
  area.focus();
  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}
function finishTdEdit (td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}