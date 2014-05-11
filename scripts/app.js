/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @see http://jsninja.pl/mda-stirling/
 * @licence The MIT License {@link http://piecioshka.mit-license.org/}
 */
(function () {
    'use strict';

    var a, b, r;

    function stirling(a, b) {
        if (b === 1) {
            return 1;
        }

        if (a === b) {
            return 1;
        }

        return stirling(a - 1, b - 1) + (b * stirling(a - 1, b));
    }

    $('#do-it').on('submit', function (event) {
        // pobieramy pierwszą wartość z formularza
        a = parseInt($('#a').val(), 10);

        // pobieramy drugą wartość z formularza
        b = parseInt($('#b').val(), 10);

        var $result = $('#result');

        try {
            // liczymy liczbę Stirlinga
            r = stirling(a, b);

            // pokasujemy kontener z wynikiem
            $result.parent().show();

            // wklejamy wynik
            $result.text(r);
        } catch (e) {
            // ukrywamy kontener z wynikiem
            $result.parent().hide();

            // pokazujemy komunikat błędu
            alert(e);
        }

        event.preventDefault();
    });

}());