import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getAllUniversitiesList(){
    return this.http.get("http://universities.hipolabs.com/search");
  }
}
