function removecolor() {
    var select = document.getElementById("colorSelect");

    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}