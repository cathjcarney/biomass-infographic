d3.csv("data/data_mod.csv").then(function(data) {

    data.forEach(function(d) {
        d.volume = +d.volume;
    });

    new d3plus.Treemap()
        .data(data)
        .groupBy([
            "level1",
            "level2",
            "level3"
        ])
        .sum("volume")
        .label("label")
        .color("level1")
        .select("#treemap")
        .render();

});
