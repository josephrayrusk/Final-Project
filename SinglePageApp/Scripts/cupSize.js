var myViewModel = function () {
    var self = this;
    this.Cups = ko.observableArray([
        {
            HowMany: 1,
            CupNumber: 'One Cup',       
        },
        {
            HowMany: 2,
            CupNumber: 'Two Cups',
        },
        {
            HowMany: 3,
            CupNumber: 'Three Cups',
        },
        {
            HowMany: 4,
            CupNumber: 'Four Cups',
        },
        ]);
    this.selectedCups = ko.observable({});

    this.Size = ko.observableArray([
        {
            Weight: 226,
            CupSize: '8oz',
        },
        {
            Weight: 283,
            CupSize: '10oz',
        },
        {
            Weight: 340,
            CupSize: '12oz',
        },
        {
            Weight: 453,
            CupSize: '16oz',
        },
    ]);
    this.selectedSize = ko.observable({}); 

    this.Strength = ko.observableArray([
        {
            Ratio: 17,
            CoffeeStrength: 'Light',
        },
        {
            Ratio: 15,
            CoffeeStrength: 'Medium',
        },
        {
            Ratio: 13,
            CoffeeStrength: 'Strong',
        },
    ]);
    this.selectedStrength = ko.observable({});


    this.Taste = ko.observableArray([
        {
            Flavor: 'Grind the coffee a little more course',
            CoffeeFlavor: 'Acidic or Overpowering',
        },
        {
            Flavor: 'Congratulations, you nailed it!',
            CoffeeFlavor: 'Tastes Delicious',
        },
        {
            Flavor: 'Grind the coffee a little more Fine',
            CoffeeFlavor: 'Bitter or Weak',
        },
    ]);
    this.selectedFlavor = ko.observable({});
    this.CoffeeWeight = ko.computed(function () {

        return Math.round((this.selectedCups() * this.selectedSize()) / this.selectedStrength());
    }, this);

}

ko.applyBindings(new myViewModel());