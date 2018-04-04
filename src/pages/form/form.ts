import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
   selector: 'page-form',
   templateUrl: 'form.html',
})

export class FormPage {
    song: any = {
        id: '',
        title: '',
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
    
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad FormPage');
    }

    save() {
        this.afDB.list('/songs/').update(this.song.id, {
            id : this.song.id,
            title : this.song.title
        }).then(()=>{
            console.log("horeeeeeeeeeeeeeeeeeeee");
        });

        this.navCtrl.pop();
    }

    deleteBook() {

    }

}
