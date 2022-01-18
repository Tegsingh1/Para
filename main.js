var inputs = [];

function getParagraph1()
{
    for(var i = 1 ; i <=6 ; i++)
    {
        inputes.push(document.getElementById("para1_input_box_" + i).value);
        inputs.join(".");
        document.getElementsById("showParagraph1").innerHTML = inputs.join(". ");
    } 
}