import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	songs: Observable<any[]>;

    constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {
    	this.songs = afDB.list('/songs').valueChanges();
    }


    ionViewDidEnter() {
    	// console.log("okokkkjjjjj")
    	// this.afDB.list('/songs/').update('3', {
     //        title : "songs 3"
     //    }).then(()=>{
     //        console.log("horeeeeeeeeeeeeeeeeeeee");
     //    });
    }

    add() {
        this.navCtrl.push("FormPage")
    }

}
