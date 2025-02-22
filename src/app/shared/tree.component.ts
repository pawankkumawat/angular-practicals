// import {ChangeDetectionStrategy, Component} from '@angular/core';
// import {MatTreeModule} from '@angular/material/tree';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';

// /**
//  * Food data with nested structure.
//  * Each node has a name and an optional list of children.
//  */
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];

// /**
//  * @title Tree with nested nodes (childrenAccessor)
//  */
// @Component({
//   selector: 'app-tree',
//   templateUrl: './tree.component.html',
//   styleUrl: './tree.component.scss',
//   imports: [MatTreeModule, MatButtonModule, MatIconModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class TreeNestedChildAccessorOverviewExample {
//   childrenAccessor = (node: FoodNode) => node.children ?? [];

//   dataSource = TREE_DATA;

//   hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
// }


import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Routes } from '../constants/constant';
import { Router } from '@angular/router';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = Routes;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNestedChildAccessorOverviewExample {
  dataSource = TREE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  router = inject(Router);
  onRouteClick(route: string, text: string) {
    route && this.router.navigateByUrl(`/${route}`);
  }
}
