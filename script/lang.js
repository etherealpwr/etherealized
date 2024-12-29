$(document).ready(function () {
    var savedLang = localStorage.getItem('selectedLanguage') || 'lt';
    $('[lang]').hide();
    $('[lang="' + savedLang + '"]').show();
    $('#lang-switch').val(savedLang);
});

$('#lang-switch').change(function () {
    var lang = $(this).val();
    localStorage.setItem('selectedLanguage', lang);
    $('[lang]').hide();
    $('[lang="' + lang + '"]').show();
});
