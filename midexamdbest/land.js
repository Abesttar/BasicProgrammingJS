function optimizeLand(land) {
    let fertilePlots = 0;

    for (let i = 0; i < land.length; i++) {
        let fertileRow = land[i].filter(plot => plot === "fertile").length;

        if (fertileRow < land[i].length / 2) {
            land[i] = land[i].map(() => "dry");
        } else {
            fertilePlots += fertileRow;
        }
    }

    return fertilePlots;
}

module.exports = { optimizeLand };
