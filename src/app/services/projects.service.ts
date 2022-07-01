import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllProjects() {
    return this.afs.collection<Project>('items').valueChanges();
  }

  getActiveProjects() {
    return this.afs.collection<Project>('projects', ref => ref.where('active', '==', true)).valueChanges();
  }
}
