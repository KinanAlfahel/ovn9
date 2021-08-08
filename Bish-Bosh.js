$(document).ready(function () {
    // console.clear();

    //$("p").click(function () {
    //    $(this).hide();
    //});

    $('#processBtn').click(function(event) {
        event.preventDefault();
       
        var bbArray = [];

        if($('#startNumber').val() !== "" && $('#endNumber').val() !== "" && $('#bishNumber').val()!=="" && $('#boshNumber').val()!=="")
        {
            for (let i = $('#startNumber').val(); i <= $('#endNumber').val(); i++) {
                bbArray.push(i);
            }
        
            bbArray.forEach(myFunction);
        }else if ($('#endNumber').val() < $('#startNumber').val())
        {
            alert('End number must be greater than start number!!!')
        }
        else
        {
            alert('All fields are required!')
        }
    });

    function myFunction(bbNumber) {
        var msg = bbNumber;

        if (bbNumber % $('#bishNumber').val() == 0) {
            msg = "Bish";
        }
        if (bbNumber % $('#boshNumber').val() == 0) {
            msg = "Bosh";
        }
        if (bbNumber % $('#bishNumber').val() == 0 && bbNumber % $('#boshNumber').val() == 0) {
            msg = "Bish-Bosh";
        }

        console.log(msg);
    }

});