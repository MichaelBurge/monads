var metaphors = [
    "pipes",
    "monoids in a category of endofunctors",
    "burritos",
    "abstractions",
    "boxes",
    "data workflows",
    "interpreters for the Free Monad",
    "a typeclass with laws",
    "strong lax monoidal functors",
    "algebraic theories",
    "classes of computational effect",
    "closure operators",
    "adjunctions",
    "monads",
    "a monoid with smart pipes",
    "composable functions with external semantics",
    "programmable semicolons",
    "factories for sequentially composed commands",
    "triples",
    "comonad duals",
    "automated workflows"
    ];

var discoverNewMetaphor = function() {
    return metaphors[Math.floor(Math.random() * metaphors.length)];
};

var shareDiscovery = function() {
    document.getElementById("discovery").innerText = discoverNewMetaphor();
};

shareDiscovery();
