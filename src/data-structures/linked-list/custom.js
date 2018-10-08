import RLinkedList from "./RLinkedList";

$(document).ready(function () {

    window.myList = null;

    $('#createlist').on('click', () => {
        window.myList = new RLinkedList();
        alert('list created');
    })

    $('#add').on('click', () => {
        var ipValue = $('#ip').val();
        window.myList.addNode(ipValue);
        var listItem = $('</li>', {
            html: ipValue,
        });
        $("#result").append(listItem);
    })
})