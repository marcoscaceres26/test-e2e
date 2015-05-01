
var DawebTest = function(browser) {

    this.properties = [
                        1,
                        2,
                        3,
                        6,
                        7
                    ];

    this.cities = [
                    "AVENTUR",
                    "BALHARBR",
                    "BAYHARIS",
                    "BISCPARK",
                    "COCOGROV",
                    "CORALGBL",
                    "CUTLRBAY",
                    "DORAL",
                    "ELPORTAL",
                    "FLACITY",
                    "FORTLAUD",
                    "GOLDNBCH",
                    "HALLNDLE",
                    "HIALEAH",
                    "HIALGRDN",
                    "HOLLYWD",
                    "HOMESTED",
                    "INDCREEK",
                    "KENDALL",
                    "KEYBISCY",
                    "MEDLEY",
                    "MIAMI",
                    "MIAMIBCH",
                    "MIAMIGAR",
                    "MIAMILKE",
                    "MIAMISHR",
                    "MIAMISPR",
                    "MIRAMAR",
                    "NBAYVLGE",
                    "NMIAMI",
                    "NMIAMIBC",
                    "OPALOCKA",
                    "PALMEBAY",
                    "PEMBPINE",
                    "PINECRST",
                    "SMIAMI",
                    "SUNNYISL",
                    "SUNRISE",
                    "SURFSIDE",
                    "SWEETWTR",
                    "VIRGRDNS",
                    "WMIAMI",
                    "OTHERFLA"
                ];

    this.reset = function() {
        browser.url('http://daluxuryrealty.com').waitForElementVisible('body', 5000);
        return this;
    };

    this.search = function(type, city) {
        browser
            .click('.callto-search')
            .pause(1000)
            .click('.property-type')
            .pause(1000)
            .click('option[value="' + type + '"]')
            .pause(1000)
            .click('.property-city')
            .pause(1000)
            .click('option[value="' + city + '"]')
            .pause(1000)
            .click('.submit');
        return this;
    };

    this.resultsShouldContain = function(text) {
        browser
            .waitForElementVisible('.search-inner h3 span', 15000)
            .assert.containsText('.search-inner h3 span', text);
        return this;
    };
};

module.exports = {

    before: function(browser) {
        this.DawebTest = new DawebTest(browser);
    },

    'Verify listings': function(browser) {
        var that = this;
        this.DawebTest.properties.forEach(function(property){
            that.DawebTest.cities.forEach(function(city){
                that.DawebTest.reset();
                that.DawebTest.search(property, city)
                    .resultsShouldContain('QUICK SEARCH');
            });
        });

    }

    ,after: function(browser) {
        browser.end();
    }
};
