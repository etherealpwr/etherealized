$('[lang]').hide()
				$('[lang="lt"]').show()
				$('#lang-switch').change(function() {
					var lang = $(this).val();
					switch (lang) {
						case 'en':
							$('[lang]').hide();
							$('[lang="en"]').show();
						break;
						case 'lt':
							$('[lang]').hide();
							$('[lang="lt"]').show();
					}
				});