import { Item, GildedRose } from '../app/gilded-rose';


const testItem = new Item("Aged Brie", 10, 10);
const testItem2 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5);
const testItem3 = new Item("Sulfuras, Hand of Ragnaros", 30, 30);
const testItem4 = new Item("Hannah test item", 99, 99);

const itemArray = [testItem, testItem2, testItem3, testItem4];

const masterTest = new GildedRose(itemArray);

masterTest.updateQuality();
masterTest.updateQuality();

console.log(masterTest);

// test results
/*
items: [
    Item { name: 'Aged Brie', sellIn: 8, quality: 12 },
    Item {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 3,
      quality: 11
    },
    Item {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 30,
      quality: 30
    },
    Item { name: 'Hannah test item', sellIn: 97, quality: 97 }
  ]
}
*/

// Add a master test here