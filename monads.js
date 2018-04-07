var metaphors = [
    "pipes",
    "monoids in a category of endofunctors",
    "burritos",
    "abstractions",
    "boxes",
    "data workflows",
    "interpreters for the Free Monad",
    "a typeclass with laws",
    "strong lax monoidal functors"
    ];

var discoverNewMetaphor = function() {
    return metaphors[Math.floor(Math.random() * metaphors.length)];
};

var shareDiscovery = function() {
    document.getElementById("discovery").innerText = discoverNewMetaphor();
};

shareDiscovery();
