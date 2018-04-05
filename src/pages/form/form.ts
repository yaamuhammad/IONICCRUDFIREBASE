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
    editsong:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
        this.editsong = this.navParams.get('song')
    }

    ionViewDidLoad() { 
        if (this.editsong) {
            this.song = this.editsong
        }
    }

    save() {
        if (this.editsong) {
            this.afDB.list('/songs/').update(this.editsong.key, {
                id : this.song.id,
                title : this.song.title
            }).then(()=>{
                console.log("update berhasil");
            }).catch(e=>console.log(e));
        } else {
            this.afDB.list('/songs/').push({
                id : this.song.id,
                title : this.song.title
            }).then(()=>{
                console.log("simpan data baru berhasil");
            });
        }

        this.navCtrl.pop();
    }

    deleteBook() {

    }

}
