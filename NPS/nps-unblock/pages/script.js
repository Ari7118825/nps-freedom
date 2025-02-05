document.addEventListener('DOMContentLoaded', function() {
        var buttons = document.querySelectorAll('button');
        var header = document.getElementById('headerb');
        var iframe = document.getElementById('iframeDisplay');

        header.addEventListener('click', function() {
            iframe.src = '';
            iframe.style.display = 'block';
        });

        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                var url = button.id;
                iframe.src = url;
                iframe.style.display = 'block';
            });
        });
    });