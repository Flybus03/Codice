Date.prototype.toDateInputValue = (function(){
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('start').value = new Date().toDateInputValue();
document.getElementById('start').min = new Date().toDateInputValue();

document.getElementById('end').value = new Date().toDateInputValue();
document.getElementById('end').min = new Date().toDateInputValue();


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("camera-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);




/* CODICE PER I FILTRI DELLE CAMERE */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}



/* TODO: Aggiungere la funzione di ordinamento delle camere */

// Get the camera-select dropdown elements
var cameraSelects = document.getElementsByClassName("camera-select");

// Loop through each camera-select dropdown
for (var i = 0; i < cameraSelects.length; i++) {
  // Add event listener to each camera-select dropdown
  cameraSelects[i].addEventListener("change", function() {
    // Get the selected option value
    var selectedOption = this.value;

    // Get the container element
    var container = document.getElementsByClassName("container")[0];

    // Get all the items inside the container
    var items = container.getElementsByClassName("item");

    // Convert the items HTMLCollection to an array for easier manipulation
    var itemsArray = Array.from(items);

    // Sort the items based on the selected option value
    itemsArray.sort(function(a, b) {
      var aValue = a.getAttribute("data-category");
      var bValue = b.getAttribute("data-category");
      if (aValue === selectedOption) {
        return -1;
      } else if (bValue === selectedOption) {
        return 1;
      } else {
        return 0;
      }
    });

    // Clear the container
    container.innerHTML = "";

    // Append the sorted items back to the container
    itemsArray.forEach(function(item) {
      container.appendChild(item);
    });
  });
}
