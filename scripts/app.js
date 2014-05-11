/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @see http://jsninja.pl/mda-stirling/
 * @licence The MIT License {@link http://piecioshka.mit-license.org/}
 */
(function () {
    'use strict';

    var a, b, r;
    var $result = $('#result');

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

        try {
            // liczymy liczbę Stirlinga
            r = stirling(a, b);

            // pokasujemy kontener z wynikiem
            $result.removeClass('hidden');

            // wklejamy wynik
            $result.html('<h4>Wynik: ' + r + '</h4');
        } catch (e) {
            // ukrywamy kontener z wynikiem
            $result.addClass('hidden');

            // pokazujemy komunikat błędu
            alert(e);
        }

        event.preventDefault();
    });

}());