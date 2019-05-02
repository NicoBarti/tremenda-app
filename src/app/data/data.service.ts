import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

baseUrl = ''

  constructor(private http: HttpClient) { }
}



// Here's an example in jQuery:
// 
// jQuery.ajax({
//   type: 'POST',
//   url: '/people',
//   dataType: 'json',
//   contentType: 'application/json',
//   data: JSON.stringify({ person: { firstName: "Yehuda", lastName: "Katz" } }),
//   success: function(json) { }
// });
// ActionDispatch::Request will see the Content-Type and your parameters will be:
//
// { :person => { :firstName => "Yehuda", :lastName => "Katz" } }
