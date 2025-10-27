let coolanimals = ["worms", "fish", "nudibranchs", "beetles", "moths", "bats"]

let myfavoriteanimal = {
type: "marine",
swagness: "high",
cuteness: 67,
wouldpet: true,
colors: ["grey", "purple", "orange", "speckled"]
};

let fullsentence;

fullsentence = "<p>My favorite animals are " + coolanimals[1] + ", and " + coolanimals[0] 
+ ", which have a " + myfavoriteanimal.swagness + " level of swag, and can be "
 + myfavoriteanimal.colors[0] + " or " + myfavoriteanimal.colors[3] + ". </p>";

$("#output").html(fullsentence);