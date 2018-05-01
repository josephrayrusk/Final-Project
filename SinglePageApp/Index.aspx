<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Index.aspx.cs" Inherits="Secondary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Secondary</title>
    <script src="Scripts/knockout-3.4.2.js"></script>
    <script src="Scripts/jQuery.tmpl.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
</head>
<body>


    <form id="form1" runat="server">

    <div>
        <h1>Coffee Brewing Calculator</h1>
        Please select how many cups of coffee.  <select data-bind="options: Cups, optionsText: 'CupNumber', optionsValue:'HowMany', value: selectedCups "></select>
        <br />
        Please select the cup size.  <select data-bind="options: Size, optionsText: 'CupSize', optionsValue:'Weight', value: selectedSize "></select>
        <br />
        Please select how strong you would like the coffee.  <select data-bind="options: Strength, optionsText: 'CoffeeStrength', optionsValue:'Ratio', value: selectedStrength "></select>
        <br />
        <br />

        Using a kitchen scale that measures in grams, please weigh out <strong><span data-bind="text: CoffeeWeight"></span> grams</strong> of coffee.
        <br />
        Grind the coffee and brew using your usual method. 
        <br />
        <br />

        After it has finished brewing, how Does it Taste?
        <br />
        <select data-bind="options: Taste, optionsText: 'CoffeeFlavor', optionsCaption: 'Please Choose...', optionsValue:'Flavor', value: selectedFlavor "></select>
        <br />
        <br />
        <span data-bind="text: selectedFlavor"></span>

   
    </div>


    </form>
    <script src="Scripts/cupSize.js"></script>

</body>
</html>
