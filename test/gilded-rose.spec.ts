import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';



describe('Gilded Rose', function () {

    it('1) should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('2) should decrease quality by one for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    })

    it('3)should not return a negative quality for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 3, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    })

    it('4) should decrease sellIn by one for ITEMS products', function () {
        const gildedRose = new GildedRose([new Item('item', 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    })

    it('5) should allow sellIn to return negative for ITEMS products ', function () {
        const gildedRose = new GildedRose([new Item('item', 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
    })

    it('6) should allow quality to increase by one for BACKSTAGE passes when SellIn is over 10 days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    })

    it('7) should allow quality to increase by two for BACKSTAGE passes when SellIn is 10 or less days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    })


    it('8) should allow quality to increase by three for BACKSTAGE passes when SellIn is 5 or less days away ', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    })

    it('9) should increase the quality of Aged Brie by one as the sellIn days decreas', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 6, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    })

    it('10) should increase the quality of Aged Brie by two when the SellIn days have gone (sellIn < 0)', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -2, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
    })

    it('11) should maintain quality and sellIn values for "Sulfuras, Hand of Ragnaros" products', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    })

    it('12) should return quality 0 for BACKSTAGE passes once sellIn date passes (<0)', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -2, 7)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    })

    it('13) should return quality decreasing by two after the sellIn date has passed (<0)', function () {
        const gildedRose = new GildedRose([new Item('item', -2, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    })

    it('14) should decrease quality by two when the product is Conjured Mana Cake', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);

    })

    it('15) should decrease by one the sellIn value when the product is conjured mana cake', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
    });

    /////////////////

    it('should decrease sellIn and quality by 1 for random items', function () {

        const gildedRose = new GildedRose([new Item('foo', 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(4);
    });



    it('should return a quality of maximum 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 49)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].quality).to.equal(50);
    });

    it('should not allow quality to go below zero', function () {
        const gildedRose = new GildedRose([new Item('Test Item', 2, 1)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].quality).to.equal(0);
    });

    it('should not allow Sulfuras to decrease in sellIn or quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(10);
        expect(items2[0].quality).to.equal(10);
    });


    it('should increase quality by 1 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
        //const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(9);
        expect(items2[0].quality).to.equal(11);
    });

    it('should increase quality by 1 when the days to the concert are more than 10', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(13);
        expect(items2[0].quality).to.equal(12);
    });


    it('should increase quality by 2 when the days to the concert are between 6 and 10 inclusive', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(6);
        expect(items2[0].quality).to.equal(14);
    });

    it('should increase quality by 3 when the days to the concert are 5 or less', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(2);
        expect(items2[0].quality).to.equal(16);
    });

    it('should set quality to 0 when the days to the concert is 0', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)]);
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(-1);
        expect(items2[0].quality).to.equal(0);
    });

});
