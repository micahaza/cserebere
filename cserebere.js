/**
 * Created by pezo on 2016.10.31..
 */

var config = {
    'balliberális': 'nemzeti konzervatív',
    'náci':         'kommunista',
    'fidesznyik':   'maszopos',
    'ballibsi':     'konzi',
    'baloldal':     'jobboldal',
    'baloldali':    'jobboldali',
    'Bayer':        'Bolgár',
    'Orbán':        'Gyurcsány',
    'Lázár':        'Molnár',
    'Simicska':     'Puch',
    'Rogán':        'Hunvald',
    'Deutsch':      'Juhász',
    'Matolcsy':     'Simor',
    'Európai Unió': 'brüsszeli bürokraták',
    'Parlament':    'Nemzeti Színház',
    'Brüsszel':     'Moszkva',
    'Washington':   'Peking',
    'alkotmánybíróság': 'Budapesti Nagycirkusz',
    'Magyar Nemzeti Bank': 'Budapesti Állatkert',
    'MNB':          'Állatkert',
    'atlatszo.hu':  'pestisracok.hu',
    'Bodoky':       'Huth',
    'közbeszerzés': 'közbenszerzés',
    'tolvaj banda': 'nemzeti tőkésosztály',
    'miniszter':    'szolga',
    'korrupció':    'eredeti tőkefelhalmozás',
    'állította':    'tagadta',
    'válaszolta':   'hazudta',
    'mondta':       'cáfolta',
    'kérdezte':     'kamuzta',
    'állam':        'álom',
    'ellenzék':     'kormány',
    'ellenzékiek':  'kormánypártiak',
    'Tarlós':       'Demszky',
    'Budapest':     'Felcsút',
    'Együtt':       'Külön',
    'DK':           'Jobbik',
    'Demokratikus Koalíció': 'Jobbik Magyarországért Mozgalom',
    'Habony':       'Raszputyin',
    'Habony Árpád': 'Raszputyin',
    'MTVA':         'propagandaadó',
    'RTL':          'TV2',
    'ATV':          'HírTV',
    'NAV':          'pénzbehajtók',
    'index':        'Magyar Idők',
    '444':          '888'
};

function getAllTextNodes(el){
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    return a;
}

(function() {
    var textNodes = getAllTextNodes(document.body);
    textNodes.forEach(function (textNode) {
        for (var key in config) {
            var re = new RegExp(key,"g");
            textNode.nodeValue = textNode.nodeValue.replace(re, config[key]);
        };
    });
})();
