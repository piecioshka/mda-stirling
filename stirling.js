(function () {
    "use strict";

    function Stirling(a, b) {
        if (b === 1) {
            return 1;
        }

        if (a === b) {
            return 1;
        }

        return Stirling(a - 1, b - 1) + (b * Stirling(a - 1, b));
    }

    this.Stirling = Stirling;

}).call(this);
