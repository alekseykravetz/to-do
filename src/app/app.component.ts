import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TO-DO List';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
   // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
