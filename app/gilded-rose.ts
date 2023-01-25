export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {

            let quality = this.items[i].quality;
            let sellIn = this.items[i].sellIn;
            const product = this.items[i].name;

            function qualityValueCheck() {
                if (product != 'Sulfuras, Hand of Ragnaros') {
                    if (quality < 0) quality = 0
                    if (quality > 50) quality = 50
                }
                return quality
            }

            if (product === 'Sulfuras, Hand of Ragnaros') {
                quality;
                sellIn;
            }

            else if (product === 'Aged Brie') {
                if (sellIn <= 0) {
                    quality = quality + 2;
                }
                else {
                    quality++;
                }
                sellIn--;
            }

            else if (product === 'Backstage passes to a TAFKAL80ETC concert') {
                quality++;
                if (sellIn < 11) {
                    quality++;
                }
                if (sellIn < 6) {
                    quality++;
                }
                if (sellIn <= 0) {
                    quality = 0;
                }
                sellIn--;
            }

            else if (product === 'Conjured Mana Cake') {
                sellIn--;
                quality = quality - 2;
            }

            else {
                sellIn--;
                if (sellIn < 0) quality = quality - 2;
                else { quality-- }
            }

            qualityValueCheck()
            this.items[i].quality = quality;
            this.items[i].sellIn = sellIn;
        }

        return this.items;
    }
}

