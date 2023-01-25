import { Item, GildedRose } from '../app/gilded-rose';

const masterTest = new GildedRose([
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Aged Brie', 6, 5),
  new Item('Aged Brie', 4, 15),
  new Item('Aged Brie', 0, 35),
  new Item('Aged Brie', -2, 45),
  new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10),
  new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
  new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30),
  new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0),
  new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
  new Item('item1', 5, 25),
  new Item('item2', 4, 20),
  new Item('item3', -2, 15),
  new Item('item4', 0, 0)

]);

console.log(masterTest)

//CONSOLE.LOG FROM ABOVE EXPANDED TESTS
//GildedRose{
// items: [
//   Item { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
//   Item { name: 'Aged Brie', sellIn: 6, quality: 5 },
//   Item { name: 'Aged Brie', sellIn: 4, quality: 15 },
//   Item { name: 'Aged Brie', sellIn: 0, quality: 35 },
//   Item { name: 'Aged Brie', sellIn: -2, quality: 45 },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: 20,
//     quality: 10
//   },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: 10,
//     quality: 20
//   },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: 5,
//     quality: 30
//   },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: 1,
//     quality: 30
//   },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: 0,
//     quality: 0
//   },
//   Item {
//     name: 'Backstage passes to a TAFKAL80ETC concert',
//     sellIn: -1,
//     quality: 0
//   },
//   Item { name: 'item1', sellIn: 5, quality: 25 },
//   Item { name: 'item2', sellIn: 4, quality: 20 },
//   Item { name: 'item3', sellIn: -2, quality: 15 },
//   Item { name: 'item4', sellIn: 0, quality: 0 }
// ]
// }