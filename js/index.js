'use strict';

function hamburger() {
    var x = $("#myLinks")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$("#light_green").click(function () {
    $("body").css("background-color", "#B2F5D5");
    $(".top-bar").css("background-color", "#00704f");
    $(".speechbubble h2").css("color", "#B2F5D5");
});

$("#sidebar_light_green").click(function () {
    $("body").css("background-color", "#B2F5D5");
    $(".top-bar").css("background-color", "#00704f");
    $(".speechbubble h2").css("color", "#B2F5D5");
});

$("#blue").click(function () {
    $("body").css("background-color", "#9AB9F4");
    $(".top-bar").css("background-color", "#7e61c9");
    $(".speechbubble h2").css("color", "#9AB9F4");
});

$("#sidebar_blue").click(function () {
    $("body").css("background-color", "#9AB9F4");
    $(".top-bar").css("background-color", "#7e61c9");
    $(".speechbubble h2").css("color", "#9AB9F4");
});

$("#grey").click(function () {
    $("body").css("background-color", "#DCDCDC");
    $(".top-bar").css("background-color", "#424242");
    $(".speechbubble h2").css("color", "#DCDCDC");
});

$("#sidebar_grey").click(function () {
    $("body").css("background-color", "#DCDCDC");
    $(".top-bar").css("background-color", "#424242");
    $(".speechbubble h2").css("color", "#DCDCDC");
});

$("#light_blue").click(function () {
    $("body").css("background-color", "#D8EEFB");
    $(".top-bar").css("background-color", "#006bed");
    $(".speechbubble h2").css("color", "#D8EEFB");
});

$("#sidebar_light_blue").click(function () {
    $("body").css("background-color", "#D8EEFB");
    $(".top-bar").css("background-color", "#006bed");
    $(".speechbubble h2").css("color", "#D8EEFB");
});


/* read csv file and create table 
    source : https://code.tutsplus.com/tutorials/parsing-a-csv-file-with-javascript--cms-25626 */

$.ajax({
    url: './data/mock_data.csv',
    dataType: 'text',
  }).done(createTable)

function createTable(data) {
var allRows = data.split(/\r?\n|\r/);
var table = '<table>';

for (var row = 0; row < allRows.length; row++) {
    if (row === 0) {
    table += '<thead>';
    table += '<tr>';
    } else {
    table += '<tr>';
    }
    var cells = allRows[row].split(',');

    for (var cell = 0; cell < cells.length; cell++) {
    if (row === 0) {
        table += '<th>';
        table += cells[cell];
        table += '</th>';
    } else {
        if(cell < cells.length -1) {
        table += '<td>';
        table += cells[cell];
        table += '</td>';
        } else {
            table += '<td>';
            table += '<a href="#delete_quote" id="removeRow" aria-lable="remove text"><img src="./img/delete.png" alt="trash can">';
            table += '</td>';
        }
    }

    }
    if (row === 0) {
    table += '</tr>';
    table += '</thead>';
    table += '<tbody>';
    } else {
    table += '</tr>';
    }
} 
table += '</tbody>';
table += '</table>';
$('.table-container').append(table);
}

function SomeDeleteRowFunction(btndel) {
    if (typeof(btndel) == "object") {
        $(btndel).closest("tr").remove();
    } else {
        return false;
    }
}

$("#removeRow").on('click', '.removeRow', function() {
    $(this).closest('tr').remove();
    return false;
});

// function rowDelete(bt) {
//     if (typeof(bt) == "object") {
//         $(bt).closest("tr").remove();
//     } else {
//         return false;
//     }
// }
