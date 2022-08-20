import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ItemMenu } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public dataMenu: Array<ItemMenu>;
  public bShowMenu = false;
  public dataMenuChildrens: any;
  public bShowSubMenu = false;
  constructor(
    private sData: DataService
  ) { }

  ngOnInit() {
    this.getDataMenu();
    this.createChildren();
  }

  clickMenu() {
    this.bShowMenu = !this.bShowMenu;
  }
  showSubMenu(id){
    this.bShowSubMenu = true;
  }
  private getDataMenu() {
    this.dataMenu = this.sData.getData();
  }

  private createChildren() {
    this.dataMenuChildrens = [];
    this.dataMenu.forEach(item => {
      if (item.parentId == null) {
        this.dataMenuChildrens.push(item);
      }
    });
    this.dataMenu.forEach(elem => {
      this.addChildren(elem, this.dataMenuChildrens)
    });
    console.log('Children', this.dataMenuChildrens);
  }

  private addChildren(elem, children) {
      if ( elem.parentId !== null) {
        children.forEach( item => {
          if (elem.parentId === item.id) {
            if( item.children === undefined){
              item.children = [];
            }
            item.children.push(elem);
          } else if (item.children !== undefined) {
            this.addChildren(elem, item.children);
          }
        });
      }
  }
}
