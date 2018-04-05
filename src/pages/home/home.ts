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
        this.songs = afDB.list('/songs').snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    add() {
        this.navCtrl.push("FormPage")
    }

    edit(song) {
        this.navCtrl.push("FormPage", {song: song})
    }

}
