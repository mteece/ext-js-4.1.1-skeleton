/*
 * SKEL.store.Language
 * Local files located ext-4.1.1-commercial\extjs-4.1.1\locale\ext-lang-{0}.js
*/

Ext.define('SKEL.store.Language', {
    extend: 'Ext.data.Store',
    requires: 'SKEL.model.Language',
    model: 'SKEL.model.Language',
    data: [
		{ id: 1, code: 'af', language: 'Afrikaans', charset: 'ISO-8859-2' },
		{ id: 2, code: 'bg', language: 'Bulgarian', charset: 'utf-8' },
		{ id: 3, code: 'ca', language: 'Catalonian', charset: 'ascii' },
		{ id: 4, code: 'cs', language: 'Czech', charset: 'utf-8' },
		{ id: 5, code: 'da', language: 'Danish', charset: 'utf-8' },
		{ id: 6, code: 'de', language: 'German', charset: 'utf-8' },
		{ id: 7, code: 'el_GR', language: 'Greek', charset: 'utf-8' },
		{ id: 8, code: 'en_GB', language: 'English (UK)', charset: 'ascii' },
		{ id: 9, code: 'en', language: 'English', charset: 'ascii' },
		{ id: 10, code: 'es', language: 'Spanish/Latin American', charset: 'utf-8' },
		{ id: 11, code: 'fa', language: 'Farsi (Persian)', charset: 'utf-8' },
		{ id: 12, code: 'fi', language: 'Finnish', charset: 'utf-8' },
		{ id: 13, code: 'fr_CA', language: 'France (Canadian)', charset: 'utf-8' },
		{ id: 14, code: 'fr', language: 'France (France)', charset: 'utf-8' },
		{ id: 15, code: 'gr', language: 'Greek (Old Version)', charset: 'utf-8' },
		{ id: 16, code: 'he', language: 'Hebrew', charset: 'windows-1255' },
		{ id: 17, code: 'hr', language: 'Croatian', charset: 'utf-8' },
		{ id: 18, code: 'hu', language: 'Hungarian', charset: 'utf-8' },
		{ id: 19, code: 'id', language: 'Indonesian', charset: 'ascii' },
		{ id: 20, code: 'it', language: 'Italian', charset: 'ascii' },
		{ id: 21, code: 'ja', language: 'Japanese', charset: 'utf-8' },
		{ id: 22, code: 'ko', language: 'Korean', charset: 'utf-8' },
		{ id: 23, code: 'lt', language: 'Lithuanian', charset: 'utf-8' },
		{ id: 24, code: 'lv', language: 'Latvian', charset: 'utf-8' },
		{ id: 25, code: 'mk', language: 'Macedonia', charset: 'utf-8' },
		{ id: 26, code: 'nl', language: 'Dutch', charset: 'ascii' },
		{ id: 27, code: 'no_NB', language: 'Norwegian Bokmål', charset: 'utf-8' },
		{ id: 28, code: 'no_NN', language: 'Norwegian Nynorsk', charset: 'utf-8' },
		{ id: 29, code: 'pl', language: 'Polish', charset: 'utf-8' },
		{ id: 30, code: 'pt_BR', language: 'Portuguese/Brazil', charset: 'ascii' },
		{ id: 31, code: 'pt_PT', language: 'Portuguese/Portugal', charset: 'ascii' },
		{ id: 32, code: 'ro', language: 'Romanian', charset: 'utf-8' },
		{ id: 33, code: 'ru', language: 'Russian', charset: 'UTF-8' },
		{ id: 34, code: 'sk', language: 'Slovak', charset: 'utf-8' },
		{ id: 35, code: 'sl', language: 'Slovenian', charset: 'utf-8' },
		{ id: 36, code: 'sr_RS', language: 'Serbian Cyrillic', charset: 'UTF-8' },
		{ id: 37, code: 'sr', language: 'Serbian Latin', charset: 'utf-8' },
		{ id: 38, code: 'sv_SE', language: 'Swedish', charset: 'utf-8' },
		{ id: 39, code: 'th', language: 'Thailand', charset: 'utf-8' },
		{ id: 40, code: 'tr', language: 'Turkish', charset: 'utf-8' },
		{ id: 41, code: 'ukr', language: 'Ukrainian', charset: 'UTF-8' },
		{ id: 42, code: 'vn', language: 'Vietnamese', charset: 'UTF-8' },
		{ id: 43, code: 'zh_CN', language: 'Simplified Chinese', charset: 'utf-8' },
		{ id: 44, code: 'zh_TW', language: 'Traditional Chinese', charset: 'UTF-8'}
    ],
    idProperty: 'id',
	
    // Event listeners.
    listeners: {
        'beforeload': function(self, operation) {
            console.log('SKEL.store.Language beforeload');
            console.log(self, operation);
        },
        'load': function(self, records, successful) {
            console.log('SKEL.store.Language load');
            console.log(self, records, successful);
        }
    }
});

/*
 * Language support with charset.
 *
 * languages = [
	['af', 'Afrikaans', 'ISO-8859-2'],
	['bg', 'Bulgarian', 'utf-8'],
	['ca', 'Catalonian', 'ascii'],
	['cs', 'Czech', 'utf-8'],
	['da', 'Danish', 'utf-8'],
	['de', 'German', 'utf-8'],
	['el_GR', 'Greek', 'utf-8'],
	['en_GB', 'English (UK)', 'ascii'],
	['en', 'English', 'ascii'],
	['es', 'Spanish/Latin American', 'utf-8'],
	['fa', 'Farsi (Persian)', 'utf-8'],
	['fi', 'Finnish', 'utf-8'],
	['fr_CA', 'France (Canadian)', 'utf-8'],
	['fr', 'France (France)', 'utf-8'],
	['gr', 'Greek (Old Version)', 'utf-8'],
	['he', 'Hebrew', 'windows-1255'],
	['hr', 'Croatian', 'utf-8'],
	['hu', 'Hungarian', 'utf-8'],
	['id', 'Indonesian', 'ascii'],
	['it', 'Italian', 'ascii'],
	['ja', 'Japanese', 'utf-8'],
	['ko', 'Korean', 'utf-8'],
	['lt', 'Lithuanian', 'utf-8'],
	['lv', 'Latvian', 'utf-8'],
	['mk', 'Macedonia', 'utf-8'],
	['nl', 'Dutch', 'ascii'],
	['no_NB', 'Norwegian Bokmål', 'utf-8'],
	['no_NN', 'Norwegian Nynorsk', 'utf-8'],
	['pl', 'Polish', 'utf-8'],
	['pt_BR', 'Portuguese/Brazil', 'ascii'],
	['pt_PT', 'Portuguese/Portugal', 'ascii'],
	['ro', 'Romanian', 'utf-8'],
	['ru', 'Russian', 'UTF-8'],
	['sk', 'Slovak', 'utf-8'],
	['sl', 'Slovenian', 'utf-8'],
	['sr_RS', 'Serbian Cyrillic', 'UTF-8'],
	['sr', 'Serbian Latin', 'utf-8'],
	['sv_SE', 'Swedish', 'utf-8'],
	['th', 'Thailand', 'utf-8'],
	['tr', 'Turkish', 'utf-8'],
	['ukr', 'Ukrainian', 'UTF-8'],
	['vn', 'Vietnamese', 'UTF-8'],
	['zh_CN', 'Simplified Chinese', 'utf-8'],
	['zh_TW', 'Traditional Chinese', 'UTF-8']
    ];
*/