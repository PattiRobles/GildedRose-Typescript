import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

//TESTS
//1. any random item, we expect decrease in sell in and quality by -1 in both
//2. aged brie should show sellIn -1 and quality +1
//3. if the sellIn is less than 0 quality decreases by 2 
//4. if we create an item with quality > 50 it should return quality 50
//5. passes behave like brie until 10 days to go - so if we pass sellin of 15 and quality of 10, returns shouls be 14, q 11
//6. passes of sellin between 10 and 5, the quality increases by 2 - so sellin 8, quality 8 return sellin 7 and q 10
//7. passes of sellin between 5 and 0, the quality increases by 3 - so sellin 4, quality 8 return sellin 3 and q 11
//8. passes sell in less than 0

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

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
        const items = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2[0].sellIn).to.equal(8);
        expect(items2[0].quality).to.equal(12);
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
